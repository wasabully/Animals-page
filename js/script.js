const audio = document.getElementById('player');
const playButton = document.getElementById('play-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const albumCover = document.getElementById('album-cover');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');

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

let currentTrackIndex = 0;

const loadTrack = () => {
	const track = tracks[currentTrackIndex];
	trackTitle.textContent = track.title;
	trackArtist.textContent = track.artist;
	albumCover.src = track.img;
	audio.querySelector('source').src = track.src;
	audio.load();
};

const playPauseTrack = () => {
	if (audio.paused) {
		audio.play();
		playButton.innerHTML = '&#10074;&#10074;';
	} else {
		audio.pause();
		playButton.innerHTML = '&#9654;';
	}
};

const nextTrack = () => {
	currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
	loadTrack();
	audio.play();
	playButton.innerHTML = '&#10074;&#10074;';
};

const prevTrack = () => {
	currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
	loadTrack();
	audio.play();
	playButton.innerHTML = '&#10074;&#10074;';
};

playButton.addEventListener('click', playPauseTrack);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);

loadTrack();
