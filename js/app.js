let numbers = [
    154,
    2345,
    89,
    6598,
    934,
    8,
    9,
    345,
]

console.log("This is array of numbers before sorting: ", numbers)

let findSmallest = arr => {
    smallest = arr[0]
    smallestIndex = 0

    for (let i = 0; i != arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallest
}

let selectionSort = arr => {
    newArr = []

    for (let i = 0; i != arr.length; i++) {
        smallest = findSmallest(arr)
        newArr.push(smallest)
    }

    return newArr
}

selectionSort(numbers)

console.log("This is array of numbers after sorting: ", newArr)