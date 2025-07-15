/* MAIN CONTAINER VIDEOS LOOP */

const videos = [
  "/videos/VID1.mp4", "/videos/VID2.mp4", "/videos/VID1.mp4", "/videos/VID2.mp4",
  "/videos/VID1.mp4", "/videos/VID2.mp4", "/videos/VID1.mp4", "/videos/VID2.mp4",
  "/videos/VIDC1.mp4", "/videos/VIDC2.mp4", "/videos/VIDC3.mp4", "/videos/VIDC4.mp4",
];

function pileArray(arr, size) {
  const piles = [];

  // LOOP

  for (let i = 0; i < arr.length; i += size) {
    piles.push(arr.slice(i, i + size));
  }
  return piles;
}




const container = document.querySelector("#video-gallery");
const rowTitles = [
  "Introduction to Steps Dance",
  "Beginner Friendly Steps",
  "Challenge Phase: Let's Dance"
];
const piles = pileArray(videos, 4);

piles.forEach((group, index) => {

  const headings = document.createElement('h2');
  headings.textContent = rowTitles[index] || `${index + 1}`;
  headings.setAttribute("class", "gy-2 text-center text-dark mb-5");


  const row = document.createElement("div");
  row.setAttribute('class', "row gx-2 gy-4 mb-4 bg-dark");
  row.setAttribute('id', `row-${index}`);
  row.style.borderRadius = '10px';



  group.forEach(src => {


    const col = document.createElement("div");
    col.setAttribute('class', "col-lg-3 col-md-6 col-sm-12 p-2");
    col.style.borderRadius = '10px';

    const ratio = document.createElement("div");
    ratio.setAttribute('class', "ratio ratio-1x1 rounded-circle ");

    const video = document.createElement("video");
    video.setAttribute('class', 'my-custom-video');
    video.setAttribute("poster", "images/logo-min.jpg");
    video.setAttribute('loading', 'lazy');
    video.setAttribute('controls', '');
    video.style.objectFit = 'cover';
    video.style.borderRadius = '10px';

    // video.setAttribute();
    // video.setAttribute();

    const source = document.createElement('source');
    source.setAttribute('src', src);
    source.setAttribute('type', 'video/mp4');

    video.appendChild(source);
    ratio.appendChild(video);
    col.appendChild(ratio);
    row.appendChild(col);


  });

  container.appendChild(headings);
  container.appendChild(row);

});
