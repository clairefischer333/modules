
//getTimeOfDay - function 1
const getTimeOfDay = (time) => {
    if (time >= 4 && time < 12) {
        return 'Morning'
    } else if (time >= 12 && time < 17) {
        return 'Afternoon'
    } else {
        return 'Evening'
    }
}

//isMorning - function 2
const isMorning = (time) => {
   if (time >= 4 && time < 12) {
       return true
   }
   else {
       return false
   }
}

//isAfternoon - function 3
const isAfternoon = (time) => {
    if (time >= 12 && time < 17) {
        return true
    }
    else {
        return false
    }
}

//isEvening - function 4
const isEvening = (time) => {
    if (time >= 17 || time < 4) {
        return true
    }
    else {
        return false
    }
}
module.exports = { getTimeOfDay, isMorning, isAfternoon, isEvening }

