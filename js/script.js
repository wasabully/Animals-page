const audio = document.querySelector('.player__audio');
const playButton = document.getElementById('play-button');

const tracks = [
	{
		title: 'Love The Way You Lie',
		artist: 'Eminem - Rihanna',
		src: '/music/Eminem, Rihanna – Love The Way You Lie.mp3',
		img: '/img/img-LoveTheWayYouLie.jpeg',
	},
	{
		title: "Gangsta's Paradise",
		artist: 'Coolio (feat. L.V.)',
		src: "/music/Coolio feat LV - Gangsta's Paradise.mp3",
		img: '/img/img-Paradise.jpg',
	},
];

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
