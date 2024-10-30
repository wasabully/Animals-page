const audio = document.querySelector('.player__audio');
const playButton = document.getElementById('play-button');

function playPauseTrack() {
	if (audio.paused) {
		audio.play();
		playButton.innerHTML = '&#10074;&#10074;';
	} else {
		audio.pause();
		playButton.innerHTML = '&#9654;';
	}
}

playButton.addEventListener('click', playPauseTrack);
