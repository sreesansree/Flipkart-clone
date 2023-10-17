

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function skipEle(arr) {
    let index = 0
    let len = arr.length-1;
   
    while (index < len) {
        console.log(arr[index]);
        console.log(arr[index] + 1);
        index += 5
    }
}

skipEle(arr);
