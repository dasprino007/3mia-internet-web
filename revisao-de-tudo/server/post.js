export default function TransformNameToIndex(name = ""){
    const arrayName = name.split(" ")
    let index = "";

    for(let i = 0; i < arrayName.length; i++){
        const words = arrayName[i].split('')
        if(i == 0){
            words[0] = words[0].toLowerCase()
        }
        else{
            words[0] = words[0].toUpperCase()
        }

        index = index + words.join('')
    }
    return index
}