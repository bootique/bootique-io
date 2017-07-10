export function applyGithub() {
  function callbackFuncWithData(ghData: GithubResponse) {
    const forkCounter = $(".fork-counter");
    if (forkCounter.length) {
      forkCounter.text(": " + ghData.forks_count);
    }

    const starsCounter = $(".star-counter");
    if (starsCounter.length) {
      starsCounter.text(ghData.stargazers_count);
    }
  }

  const ghButtons = $(".gh-btns");
  if (ghButtons.length) {
    const ghOwner = ghButtons.attr("data-gh-owner");
    const ghRepo = ghButtons.attr("data-gh-repo");
    const ghUrl = "https://api.github.com/repos/" + ghOwner + "/" + ghRepo;

    $.getJSON(ghUrl, callbackFuncWithData);
  }
}

interface GithubResponse {
  forks_count: number;
  stargazers_count: number;
}
