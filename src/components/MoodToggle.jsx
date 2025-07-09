// MoodToggle.jsx
export default function MoodToggle({ mode, setMode }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <label className="text-lg font-medium">Detection Mode:</label>
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        className="border px-3 py-2 rounded-md shadow focus:outline-none"
      >
        <option value="manual">🖐️ Manual</option>
        <option value="ai">🤖 AI (Webcam)</option>
      </select>
    </div>
  );
}
