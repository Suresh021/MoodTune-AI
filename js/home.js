const musicDB = {
    Happy: {
        English: [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        ],
        Hindi: [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        ],
        Spanish: [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        ]
    },
    Sad: {
        English: [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
        ],
        Hindi: [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
        ],
        Spanish: [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
        ]
    },
    Neutral: {
        English: [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        ],
        Hindi: [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        ],
        Spanish: [
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
        ]
    }
};

let currentTrackList = [];
let currentTrackIndex = 0;
const audioPlayer = document.getElementById("audioPlayer");

function detectMood(input) {
    input = input.toLowerCase();
    if (input.includes("happy") || input.includes("excited")) return "Happy";
    if (input.includes("sad") || input.includes("down")) return "Sad";
    return "Neutral";
}

function generateMusic() {
    const moodInput = document.getElementById("moodInput").value;
    const language = document.getElementById("languageSelect").value;
    const output = document.getElementById("output");
    const playerSection = document.getElementById("playerSection");

    if (!moodInput || !language) {
        output.innerText = "Please enter your mood and select a language.";
        playerSection.style.display = "none";
        return;
    }

    const mood = detectMood(moodInput);
    currentTrackList = musicDB[mood][language];

    if (!currentTrackList || currentTrackList.length === 0) {
        output.innerText = `No songs found for mood: ${mood}, language: ${language}`;
        playerSection.style.display = "none";
        return;
    }

    output.innerText = `Detected Mood: ${mood} 🎧 Playing now...`;
    currentTrackIndex = 0;
    playCurrentTrack();
    playerSection.style.display = "block";
}

function playCurrentTrack() {
    audioPlayer.src = currentTrackList[currentTrackIndex];
    audioPlayer.load();
    audioPlayer.play();
}

function nextSong() {
    currentTrackIndex = (currentTrackIndex + 1) % currentTrackList.length;
    playCurrentTrack();
}

function prevSong() {
    currentTrackIndex = (currentTrackIndex - 1 + currentTrackList.length) % currentTrackList.length;
    playCurrentTrack();
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function forwardSong() {
    audioPlayer.currentTime += 10; // skip ahead 10 seconds
}