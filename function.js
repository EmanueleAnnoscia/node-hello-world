// contatore di vocali

function countVocals(word){
    let vocals = 0
    for (let i = 0; i<word.length; i++ ){
         if ("aeiouAEIOU".includes(word[i])) {
        vocals++;
    }
    return vocals;
}

// trovare il numero maggiore
function highNum (arrayNum){
    let maxNum = 0;
    for (let i = 0; i< arrayNum.length; i++){
        if (maxNum < arrayNum[i]){
            maxNum = arrayNum[i];
        }
    }

    return maxNum;
}

// esporto le funzioni
export {highNum, countVocals}
