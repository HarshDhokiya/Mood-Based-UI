


// src/components/MoodContent.jsx
import { moodContent } from "../moods/content";

export default function MoodContent({ mood }) {
  const content = moodContent[mood] || moodContent.neutral;

  return (
    <div className="mt-8 text-center max-w-md">
      <div className="text-6xl mb-4 animate-bounce">{content.emoji}</div>
      <p className="text-xl font-medium italic">{content.quote}</p>
    </div>
  );
}
