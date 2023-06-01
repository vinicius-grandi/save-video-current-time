alert("cuzin")
const video = document.querySelector("video");
const filename = window.location.pathname.split('/').slice(-1);

if (localStorage.getItem(filename)) {
  video.currentTime = Number(localStorage.getItem(filename));
}

video.addEventListener("pause", () => {
  const currentTime = video.currentTime;
  localStorage.setItem(filename, currentTime);
});
