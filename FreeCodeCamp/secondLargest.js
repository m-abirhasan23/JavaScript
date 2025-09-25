function secondLargest(arr) {
    const largeNum = Math.max(...arr)

    let secondLarge = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < largeNum && arr[i] > secondLarge) {

             secondLarge = arr[i];

        }
        return secondLarge

    }

}

console.logsecondLargest([10, -17, 55.5, 44, 91, 0])

