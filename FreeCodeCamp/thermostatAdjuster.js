
function adjustThermostat(temp, target) {

    if (temp<target) {
        return "heat"
    }else if(temp>target){
        return "cool"
    }
    else if (temp==target) {
        return "hold"
    }
    else{
        return "not correct value"
    }

}