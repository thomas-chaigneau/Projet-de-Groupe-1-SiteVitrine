$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
    setInterval(increaseNbKm, 7000);
    setInterval(increaseNbPhoto, 3000);
});

// fonction scroll ancre
$('.animate_link').click(function(){
    let id_ancre = $(this).attr("href");
    let offset_ancre = $(id_ancre).offset().top;
    $('html, body').animate({scrollTop: offset_ancre}, 'slow');
});


// Variables

let nbPhotosInfoBar = 13265;
let nbKmInfoBar = 6827;
let source ="";

// Increase items info barre
const increaseNbPhoto = () => {
    nbPhotosInfoBar+=1;
    document.getElementById('infobar_nbPhoto').textContent = nbPhotosInfoBar;
}

const increaseNbKm = () => {
    nbKmInfoBar+=1;
    document.getElementById('infobar_nbKm').textContent = nbKmInfoBar;
}

// Show - Hide Monuments map

const showMapMonument = (source) => {
    document.getElementById('mapParisBase').src = "images/Paris-map-"+source+".png";
    document.getElementById("link"+source).style.color="#e99468";
}

const hideMapMonument = (source) => {
    document.getElementById("link"+source).style.color="#2e3131";
    document.getElementById('mapParisBase').src = "images/MapParis.png";
}



//ajout d'un écouteur d'évènement
// const el = document.getElementById("testEvent");
// el.addEventListener("mouseenter", showMapMonument("mapParisArcTriomphe"));
// el.addEventListener("mouseleave", hideMapMonument("mapParisArcTriomphe"));

