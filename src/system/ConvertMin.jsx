function ConvertMin(data) {
    // provavel quebrei 5 regras do oop
    let time = {
        "hours": 0,
        "min": 0
    }
    time.hours = Math.floor(data/60)
    time.min = ((data/60).slice(data.lastIndexOf('.') + 1))/0.6
    return (`${time.hours}h : ${time.min}m`);
}

export default ConvertMin;