// YouTube
// https://developers.google.com/youtube/iframe_api_reference

export function setupYT() {

	window["onYouTubePlayerAPIReady"] = onYouTubePlayerAPIReady;
	
	let player;
	const ytEmbeded = $('.yt-video');
	const playPauseBtn = $(".yt-play-btn");
	const stopCloseBtn = $(".yt-close-stop-btn");

	 function onYouTubePlayerAPIReady() {
		player = new YT.Player('yt-video', {
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}

	function onPlayerReady(event) {
		playPauseBtn.on('click', function(e) {
			e.preventDefault();
			
			var playerState = player.getPlayerState();
			if (playerState !== 1 ) {
				player.playVideo();
				ytEmbeded.addClass('active')
			} else {
				player.pauseVideo();
			}
		});

		stopCloseBtn.on('click', function(e) {
			e.preventDefault();
			player.stopVideo();
			ytEmbeded.removeClass('active');
		});
	}

	function onPlayerStateChange(event) {
		var playerState = player.getPlayerState();
		if (playerState === 0) {
			ytEmbeded.removeClass('active');
		}
	}

}