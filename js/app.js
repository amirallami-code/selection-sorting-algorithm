let numbers = [
    2,
    6,
    15,
    3,
    8,
    21,
    32,
    9,
]

console.log("This is array of numbers before sorting: ", numbers)

arrLength = numbers.length

let findSmallest = arr => {
    smallest = arr[0]
    smallestIndex = 0

    for (let i = 0; i != arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}

let selectionSort = arr => {
    newArr = []

    for (let i = 0; i != arrLength; i++) {
        smallest = findSmallest(arr)
        newArr.push(arr[smallest])
        arr.splice(smallest, 1)
    }

    return newArr
}

selectionSort(numbers)

console.log("This is array of numbers after sorting: ", newArr)