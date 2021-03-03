function convertDMSToDD(degrees, minutes, seconds, direction) {
    
    let dd = degrees + (minutes/60) + (seconds/360000);
    
    if(direction == "S" || direction == "W") {
        dd = dd * -1; 
    }
    
    return dd;
}

export default convertDMSToDD