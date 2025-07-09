


function MoodSeleter({ setMood }) {

    const moods = [
        { label: "😊Happy", value: "happy" },
        { label: "😩Sad", value: "sad" },
        { label: "😤Angry", value: "angry" },
        { label: "😐Neutral", value: "neutral" },
        { label: "💝Love", value: "love" },
    ];



    return (
        <div className="flex gap-3 flex-wrap justify-center">
            {moods.map((m) => (
                <button className="px-4 py-2 bg-white rounded-xl shadow hover:bg-gray-200 transition" key={m.value}
                    onClick={() => setMood(m.value)}

                >{m.label}</button>
            ))}
        </div>
    );
}

export default MoodSeleter;