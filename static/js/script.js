let imgcontainer = Array.from(document.getElementsByClassName('imgcontainer'));
let modal = document.getElementById('modal-plain');
let modalImg = document.getElementById('modal-img');
let closeButton = document.getElementById('cls-button');

// console.log(modal);
// click each image 
imgcontainer.forEach(element => {
    element.onclick = (e) => {
        modal.style.display = 'block';
        modalImg.src = e.target.src;
    };
});
//  click close button
closeButton.onclick = () => {
    modal.style.display = 'none';
}
// click out side
modal.onclick = (e) => {
    if (e.target === modalImg) {
        return;
    }
    modal.style.display = 'none';
}