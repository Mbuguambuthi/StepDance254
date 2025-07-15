/* VIDEO PLAY */

const videos = document.querySelectorAll('video');

for (video of videos) {
    console.log('video');
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

/* CONTACT.JS */

// SCHEDULE SECTION SCRIPT

const serviceRadios = document.querySelectorAll('input[name="service"]');
const sessionOptions = document.getElementById('sessionOptions');

serviceRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        sessionOptions.classList.remove('d-none');
    });
});

/* SERVICE.JD */

//VIDEO PLAYTOGGLE

/* const ratio = document.querySelector(".my-video-container");
const video = document.querySelector("#myVideo");
ratio.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
 */

