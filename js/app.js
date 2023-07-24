let $ = document

const inputElem = $.querySelector('#input')
const buttonElem = $.querySelector('#button')
const beforeWrapper = $.querySelector('.Before')
const afterWrapper = $.querySelector('.After')

let numbers = []

let smallestNum = numbers[0]
    , smallestIndex = 0
    , findSmallestNumber = null

inputElem.addEventListener('keypress', event => {

    if (event.key === 'Enter') {
        numbers.push(Number(input.value))
        input.value = ''
        beforeWrapper.innerHTML = ''
        for (let item of numbers) {
            beforeWrapper.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
        }
    }
})

const selectionSort = arr => {

    let smallestNum = arr[0]
    let smallestIndex = 0

    for (let i = 0; i != arr.length; i++) {
        findSmallestNumber = findSmallest(arr, smallestNum, smallestIndex)
    }
}

const findSmallest = arr => {

    for (let i = 0; i != arr.length; i++) {
        if (arr[i] <= smallestNum) {
            smallestNum = arr[i]
            smallestIndex = i
            console.log('this is smallest number', smallestNum);
            console.log('this is smallest number index', smallestIndex);
        }
    }
}

const afterGenerator = newArr => {

    afterWrapper.innerHTML = ''
    for (let number of newArr) {
        afterWrapper.insertAdjacentHTML("beforeend", `<li>${number}</li>`)
    }
}

buttonElem.addEventListener("click", () => selectionSort(numbers))


/*
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

    for (let i = 0; i != arr.length; i++) {
        smallest = findSmallest(arr)
        newArr.push(arr[smallest])
        arr.splice(smallest, 1)
    }
    afterGenerator(newArr)
}

*/