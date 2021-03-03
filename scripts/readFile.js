import getExif from './getExif.js'

const readFile = () =>{
    const dropArea = document.querySelector('.drag-area')
    dropArea.addEventListener('dragover', (event) =>{
        event.preventDefault()
        dropArea.classList.add('active')
    })
    dropArea.addEventListener('dragleave', () =>{
        dropArea.classList.remove('active')
    })
    dropArea.addEventListener('drop', (event) =>{
        const reader = new FileReader()
        document.querySelector('.map')?.remove()
        reader.readAsDataURL(event.dataTransfer.files[0])
        reader.addEventListener("load", ()=>{
            localStorage.setItem("recent-image", reader.result)
            document.querySelector('.uploaded-img').innerHTML = `<img src=${reader.result} class="uploaded-data__img" alt="image">`
        })
        reader.addEventListener("loadend", getExif)
        event.preventDefault()
    })
    document.querySelector('#myFileInput').addEventListener('change', function(){
        const reader = new FileReader()
        document.querySelector('.map')?.remove()
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