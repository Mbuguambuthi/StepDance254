/* SERVICE.JD */

//VIDEO PLAYTOGGLE

const ratio = document.querySelector(".my-video-container");
const video = document.querySelector("#myVideo");
ratio.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});