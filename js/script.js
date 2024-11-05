const audio = document.getElementById('player');
const playButton = document.getElementById('play-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const albumCover = document.getElementById('album-cover');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const progressBar = document.querySelector('.progress-bar');
const progressTimeStart = document.querySelector('.start-time');
const progressTimeEnd = document.querySelector('.end-time');

const tracks = [
	{
		title: 'Beautiful Day',
		artist: 'Akon',
		src: './music/AkonBeautiful-Day.mp3',
		img: './img/img-Akon.jpeg',
	},
	{
		title: 'Love The Way You Lie',
		artist: 'Eminem - Rihanna',
		src: './music/Love-The-Way-You-Lie.mp3',
		img: './img/img-LoveTheWayYouLie.jpeg',
	},
	{
		title: 'Get Lucky',
		artist: 'Daft Punk',
		src: './music/Get-Lucky.mp3',
		img: './img/img-Get-Lucky.jpg',
	},
	{
		title: "Gangsta's Paradise",
		artist: 'Coolio (feat. L.V.)',
		src: './music/CoolioGangsta-Paradise.mp3',
		img: './img/img-Paradise.jpg',
	},
];

let currentTrackIndex = 0;

const loadTrack = () => {
	const { title, artist, src, img } = tracks[currentTrackIndex];
	trackTitle.textContent = title;
	trackArtist.textContent = artist;
	albumCover.src = img;
	audio.querySelector('source').src = src;

	const background = document.getElementById('background');
	background.style.backgroundImage = `url(${img})`;

	audio.load();
	progressBar.value = 0;
};

const formatTime = (time) => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);
	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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

audio.addEventListener('loadedmetadata', () => {
	progressTimeEnd.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
	if (audio.duration) {
		progressBar.value = (audio.currentTime / audio.duration) * 100;
		progressTimeStart.textContent = formatTime(audio.currentTime);
	}
});

progressBar.addEventListener('input', () => {
	const newTime = (progressBar.value / 100) * audio.duration;
	audio.currentTime = newTime;
});

playButton.addEventListener('click', playPauseTrack);
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);

audio.addEventListener('error', () => {
	console.error('Ошибка при загрузке аудиофайла: ', audio.error);
});

audio.addEventListener('ended', () => {
	nextTrack();
});

loadTrack();
