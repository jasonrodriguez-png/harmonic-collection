const images = [
    './images/W1.JPG', 
    './images/W2.JPG', 
    './images/W3.JPG', 
    './images/W4.JPG', 
    './images/W5.JPG', 
    './images/W6.JPG', 
    './images/W7.JPG', 
    './images/W8.JPG',  
    './images/W10.JPG',
    './images/W11.JPG',
    './images/W12.JPG',
    './images/W13.JPG',
    './images/W14.JPG',
    './images/W15.JPG',
    './images/W16.JPG',
    './images/W17.JPG',
    './images/W18.JPG',
    './images/W19.JPG',
    './images/W20.JPG',
    './images/W21.JPG'
];

let imgElement = document.getElementById('bouncingImage');
let container = document.querySelector('.container');

let xPos = 150, yPos = 150;
let xSpeed = 3, ySpeed = 3;
let imgWidth = imgElement.width;
let imgHeight = imgElement.height;

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    imgElement.src = images[randomIndex];
}

function update() {
    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos <= 0 || xPos + imgWidth >= container.clientWidth) {
        xSpeed = -xSpeed; 
        changeImage();
    }

    if (yPos <= 0 || yPos + imgHeight >= container.clientHeight) {
        ySpeed = -ySpeed; 
        changeImage();
    }

    imgElement.style.left = `${xPos}px`;
    imgElement.style.top = `${yPos}px`;

    requestAnimationFrame(update);
}

update();
