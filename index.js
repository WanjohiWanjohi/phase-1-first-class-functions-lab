const returnFirstTwoDrivers = (drivers)=>{
    return drivers.slice(0,2);
} 
const returnLastTwoDrivers = (drivers)=>{
    return drivers.slice(-2);
}
const selectingDrivers  = [returnFirstTwoDrivers , returnLastTwoDrivers]

function createFareMultiplier(multplicand , fare=5){
    return function (){ return fare *multplicand};
}
const fareDoubler = createFareMultiplier(3 ,fare= 2);
const fareTripler = createFareMultiplier(3 , fare =3);
function selectDifferentDrivers(drivers , opt_func=returnFirstTwoDrivers){
    return opt_func(drivers);
}