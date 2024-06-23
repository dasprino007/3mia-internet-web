function ClassRate(data) {
        if(data > 7){
            return('bg-GoodRate-color')
        }
        else if(data > 4){
            return('bg-MediumRate-color')
        }
        else
        return('bg-BadRate-color')
}

export default ClassRate;