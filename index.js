function distanceFromHqInBlocks(street){
    const hq = 42
    if (street >= 42){
        return street - hq
    } else {
        return hq  - street
    }
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(street1, street2){
    return street2 > street1 ? ((street2 - street1) * 264) : ((street1 - street2)
 *264)
}

function calculatesFarePrice(start, destination){
   const length = distanceTravelledInFeet(start, destination)
    if (length <= 400){
        return 0;
   } else if (length > 400 && length < 2000){
        return (length - 400) * 0.02;
   }else if (length> 2000 && length < 2500) {
        return 25;
   } else {
       return "cannot travel that far"
   }
}


