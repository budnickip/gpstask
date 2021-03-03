import getExif from './getExif.js'

const readFile = () =>{
    document.querySelector('#myFileInput').addEventListener('change', function(){
        const reader = new FileReader()
        document.querySelector('.map').remove()
        reader.readAsDataURL(this.files[0])
        reader.addEventListener("load", ()=>{
            localStorage.setItem("recent-image", reader.result)
            document.querySelector('.uploaded-img').innerHTML = `<img src=${reader.result} class="uploaded-data__img" alt="image">`
        //  getExif()
        })
        reader.addEventListener("loadend", getExif)
    })
}

export default readFile