// src/components/FaceMoodDetector.jsx
import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

export default function FaceMoodDetector({ setMood }) {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      setLoading(false);
    };

    loadModels();
  }, []);

  useEffect(() => {
    if (loading) return;

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });

    const interval = setInterval(async () => {
      if (videoRef.current && !videoRef.current.paused) {
        const detections = await faceapi.detectAllFaces(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        ).withFaceExpressions();

        if (detections.length > 0) {
          const expressions = detections[0].expressions;
          const sorted = Object.entries(expressions).sort((a, b) => b[1] - a[1]);
          const topExpression = sorted[0][0];

          const expressionMap = {
            happy: "happy",
            sad: "sad",
            angry: "angry",
            neutral: "neutral",
            surprised: "happy",
            disgusted: "angry",
            fearful: "sad",
          };

          setMood(expressionMap[topExpression] || "neutral");
        }
      }
    }, 3000); // check every 3 seconds

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="mt-6">
      <video
        ref={videoRef}
        autoPlay
        muted
        width="320"
        height="240"
        className="rounded-lg shadow"
      />
      <p className="text-sm text-center mt-2 text-gray-600">Mood detected from face 😎</p>
    </div>
  );
}
