const imagesList = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const tnList = imagesList

const imageListDom = document.querySelector('.image-list');
const thumbnailListDom = document.querySelector('.thumbnails')

let frameContainer = "";
let thumbnailContainer = "";

imagesList.forEach((element) =>{


    let createdWrapper = `<div class="image-wrapper">
    <img class="image" src="${element.image}" alt="${element.title}">
    <h1>${element.title}</h1>
    <h5>${element.text}</h5>
    </div>`;

    
    frameContainer += createdWrapper;
    console.log(frameContainer);
    
    let createdThumbnailContainer = `<div class="tn-wrap">
    <img class="tn-image" src="${element.image}" alt="${element.title}">
    </div>`
    
    thumbnailContainer += createdThumbnailContainer;

});

imageListDom.innerHTML = frameContainer;
thumbnailListDom.innerHTML = thumbnailContainer;

const imageWrapperDom = document.getElementsByClassName('image-wrapper');
const thumbnailWrapperDom = document.getElementsByClassName('tn-wrap');

let selectedImage = 0;

imageWrapperDom[selectedImage].classList.add('d-inBlock');
console.log(imageWrapperDom);

thumbnailWrapperDom[selectedImage].classList.add('opacity');

const upDom = document.querySelector('#bt-up');

const downDom = document.querySelector('#bt-down');



upDom.addEventListener('click', 
    function() {

        if (selectedImage < imageWrapperDom.length - 1) {

            thumbnailWrapperDom[selectedImage].classList.remove('opacity');

            imageWrapperDom[selectedImage].classList.remove('d-inBlock');

            selectedImage++;

            imageWrapperDom[selectedImage].classList.add('d-inBlock');

            thumbnailWrapperDom[selectedImage].classList.add('opacity');

            downDom.classList.remove('d-none');

        }else if(selectedImage == (imageWrapperDom.length - 1)){

            thumbnailWrapperDom[selectedImage].classList.remove('opacity');

            imageWrapperDom[selectedImage].classList.remove('d-inBlock');
            
            selectedImage = 0;

            thumbnailWrapperDom[selectedImage].classList.add('opacity');

            imageWrapperDom[selectedImage].classList.add('d-inBlock');
        }
    }
);

downDom.addEventListener('click', 
    function() {

        if (selectedImage > 0) {

            thumbnailWrapperDom[selectedImage].classList.remove('opacity');

            imageWrapperDom[selectedImage].classList.remove('d-inBlock');

            selectedImage--;

            imageWrapperDom[selectedImage].classList.add('d-inBlock');

            thumbnailWrapperDom[selectedImage].classList.add('opacity');

            upDom.classList.remove('d-none');

        }else if (selectedImage == 0){
            
            thumbnailWrapperDom[selectedImage].classList.remove('opacity');

            imageWrapperDom[selectedImage].classList.remove('d-inBlock');

            selectedImage = (imageWrapperDom.length - 1);

            imageWrapperDom[selectedImage].classList.add('d-inBlock');

            thumbnailWrapperDom[selectedImage].classList.add('opacity');

        }
    }
);

