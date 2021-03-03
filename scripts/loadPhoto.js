import getExif from './getExif.js'

const loadPhoto = () =>{
    let photo = JSON.stringify(localStorage.getItem('recent-image'))
    if (localStorage.getItem("recent-image") !== null){
        document.querySelector('.uploaded-img').innerHTML = `<img src=${photo} class="uploaded-data__img" alt="image">`
        getExif()
    }
}

export default loadPhoto
 