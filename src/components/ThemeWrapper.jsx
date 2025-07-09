import { moodThemes } from "../moods/themes";

export default function ThemeWrapper({ mood, children }) {
  const theme = moodThemes[mood] || moodThemes.neutral;

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-all duration-500`}>
      {children}
    </div>
  );
}
