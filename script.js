let video
let playButton
let audioSlider
let skipButtons

function setup() {
    video = document.querySelector("#player > video")
    playButton = document.getElementById("play")
    audioSlider = document.getElementById("volume")
    skipButtons = document.querySelectorAll(".skip")

    window.addEventListener("keypress", handleKeypress)
    playButton.addEventListener("click", handlePlayClick)
    audioSlider.addEventListener("change", handleAudioChange)
    for (let skip of skipButtons) {
        skip.addEventListener("click", handleSkipButton)
    }
}

function handleSkipButton(event) {
    if (event.target.id == "backward-30") {
        video.currentTime -= 30
    } else if (event.target.id == "backward-10") {
        video.currentTime -= 10
    } else if (event.target.id == "forward-10") {
        video.currentTime += 10
    } else if (event.target.id == "forward-30") {
        video.currentTime += 30
    }
}

function pauseVideo() {
    video.pause()
}

function playVideo() {
    video.play()
}

function handleAudioChange(event) {
    let newVolume = event.target.valueAsNumber / 100
    video.volume = newVolume
}

function handleKeypress(event) {
    if (event.code == "Space") {
        handleSpacebar()
    }
}

function handleSpacebar() {
    if (video.paused == false) {
        pauseVideo()
    } else {
        playVideo()
    }
}

function handlePlayClick(event) {
    if (video.paused == false) {
        pauseVideo()
    } else {
        playVideo()
    }
}

window.addEventListener("load", setup)
