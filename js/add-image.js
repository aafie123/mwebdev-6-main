import ipadpro from '../images/ipad_pro.png';

function addImage() {
    const body = document.querySelector('body');
    const img = document.createElement('img');
    img.alt = 'iPad Pro';
    img.width = 185;
    img.height = 212;
    img.src = ipadpro;
    body.appendChild(img);
}
export default addImage; // add-image.js