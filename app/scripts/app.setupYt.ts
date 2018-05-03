/**
 * https://developers.google.com/youtube/iframe_api_reference
 */
export function setupYt() {

  window["onYouTubePlayerAPIReady"] = onYouTubePlayerAPIReady;

  let player;
  const ytEmbedded = $(".yt-video");
  const playPauseBtn = $(".yt-play-btn");
  const stopCloseBtn = $(".yt-close-stop-btn");

  function onYouTubePlayerAPIReady() {
    player = new YT.Player("yt-video", {
      events: {
        "onReady": onPlayerReady,
        "onStateChange": onPlayerStateChange
      }
    });
  }

  function onPlayerReady() {
    playPauseBtn.on("click", (event: JQueryEventObject) => {
      event.preventDefault();

      const playerState = player.getPlayerState();
      if (playerState !== 1) {
        player.playVideo();
        ytEmbedded.addClass("active")
      } else {
        player.pauseVideo();
      }
    });

    stopCloseBtn.on("click", (event: JQueryEventObject) => {
      event.preventDefault();
      player.stopVideo();
      ytEmbedded.removeClass("active");
    });
  }

  function onPlayerStateChange() {
    const playerState = player.getPlayerState();
    if (playerState === 0) {
      ytEmbedded.removeClass("active");
    }
  }
}
