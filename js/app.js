
//preloader

let mainBody = document.getElementById(`main-body`);
let preLoader = document.getElementById(`preloader`);


    /* mainBody.style.display = `none`;
    preLoader.style.display = `grid`; */

function display(){
    preLoader.style.display = `none`;
    mainBody.style.display = `block`;
}

setTimeout(display, 3000);




//background themes
let themeTomato = document.querySelector(`.theme-btn-tomato`);
let themePink = document.querySelector(`.theme-btn-pink`);
let themeOrange = document.querySelector(`.theme-btn-orange`);
let themeGrey = document.querySelector(`.theme-btn-grey`);


themeTomato.addEventListener(`click`,() => {
    document.body.style.backgroundColor = `tomato`;
})


themePink.addEventListener(`click`,() => {
    document.body.style.backgroundColor = `#fd79a8`;
})


themeOrange.addEventListener(`click`,() => {
    document.body.style.backgroundColor = `#fdcb6e`;
})


themeGrey.addEventListener(`click`,() => {
    document.body.style.backgroundColor = `#CAD3C8`;
})


