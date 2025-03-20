let subheading = document.getElementById("subheading");
let timmyPic = document.getElementById("timmy");

let openRelatedVideo = () => {
    window.location.replace("https://youtu.be/dQw4w9WgXcQ?feature=shared");
}

let changeImage = () => {
    timmyPic.src = "img/rick.png";
    subheading.innerHTML = "do NOT click on this";
}

subheading.addEventListener('click', openRelatedVideo);
timmyPic.addEventListener('click',changeImage);