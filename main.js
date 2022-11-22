// Take an array and remove every second element from the array. 
// Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    return arr.filter((_, i) => i % 2 === 0)
}
alert(removeEveryOther(['keep', 'remove', 'remove', 'keno', 'recall', 'reign', 'kilom', 'remain', 'clean']))