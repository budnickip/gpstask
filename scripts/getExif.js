import convertDMSToDD from './convertDMSToDD.js'

function getExif() {
    const img = document.querySelector('.uploaded-data__img')
    let divMap = document.createElement('div')
    divMap.className = 'map'
    divMap.id = 'mapid'
    document.querySelector('.uploaded-data').appendChild(divMap)
    EXIF.getData(img, () => {
        // Calculate latitude decimal
        if(img.exifdata.GPSLatitude  && img.exifdata.GPSLongitude){
            let latDegree = img.exifdata.GPSLatitude[0].numerator;
            let latMinute = img.exifdata.GPSLatitude[1].numerator;
            let latSecond = img.exifdata.GPSLatitude[2].numerator;
            let latDirection = img.exifdata.GPSLatitudeRef;
                
            let latFinal = convertDMSToDD(latDegree, latMinute, latSecond, latDirection);
                
            // Calculate longitude decimal
            let lonDegree = img.exifdata.GPSLongitude[0].numerator;
            let lonMinute = img.exifdata.GPSLongitude[1].numerator;
            let lonSecond = img.exifdata.GPSLongitude[2].numerator;
            let lonDirection = img.exifdata.GPSLongitudeRef;
                
            let lonFinal = convertDMSToDD(lonDegree, lonMinute, lonSecond, lonDirection);
    
                
            let mymap = L.map('mapid').setView([latFinal, lonFinal], 10);
                
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoiYnVkeW45NSIsImEiOiJja2xzNWpzb3gwdm05MnZsbHJiYmFpYXp4In0.ll8NGCRsayEEhLowbI8f8A'
            }).addTo(mymap);
    
            let marker = L.marker([latFinal, lonFinal]).addTo(mymap);
        }else{
            document.querySelector('.map').innerHTML = `<p class="error">Przykro mi, to zdjęcie nie ma dostępnych danych GPS</p>`
        }
    });
   
}

export default getExif