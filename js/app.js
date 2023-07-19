let $ = document

const beforeWrapper = $.querySelector('.Before')
const afterWrapper = $.querySelector('.After')

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

const beforeGenerator = () => {
    for (let number of numbers) {
        beforeWrapper.insertAdjacentHTML("beforeend", `<li>${number}</li>`)
    }
}

beforeGenerator()

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

const afterGenerator = () => {
    for (let number of newArr) {
        afterWrapper.insertAdjacentHTML("beforeend", `<li>${number}</li>`)
    }
}

afterGenerator()