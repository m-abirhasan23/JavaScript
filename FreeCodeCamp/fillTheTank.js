function costToFill(tankSize, fuelLevel, pricePerGallon) {

    const totalSizeToFill=tankSize-fuelLevel;

    const totalPrice=(totalSizeToFill*pricePerGallon).toFixed(2)
    return `$${totalPrice}`
    
}

costToFill(20, 0, 4.00)