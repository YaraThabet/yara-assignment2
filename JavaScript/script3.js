let array =["html","css","css", "javascript"];

function notRepeat(array){
    return [new Set(array)];
}
console.log(notRepeat(array));
