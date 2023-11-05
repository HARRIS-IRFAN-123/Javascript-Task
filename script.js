const stringsArray = ["My Name is Harris","I Have Done My Intermediate","My Friend Is Mohsin"];
const secondWordsArray = stringsArray.map(str => {
    const words = str.split(' '); 
    return words[1]; 
});
console.log(secondWordsArray);