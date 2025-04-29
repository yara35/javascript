function toPascalCase(name) {
    let words = name.toLowerCase().split(" ");
     return words.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}

function longest_word(sentence){
    let words = sentence.split(" ")
    maxword=""
    for(i=0; i<words.length; i++){
        if(words[i].length> maxword.length){
            maxword = words[i]
        }
    }
    return maxword
}

function alphabeticalOrder(word){
    return word.split('').sort().join('');
}


function commonelement(arr1,arr2){
    return arr1.filter(item => arr2.includes(item))
}

function removeDupl(arr) {
    
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

