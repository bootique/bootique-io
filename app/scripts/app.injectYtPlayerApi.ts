// Inject YouTube API
export function injectYtPlayerApi() {
  // Inject YouTube API script
  const tag = document.createElement("script");
  tag.src = "//www.youtube.com/player_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
