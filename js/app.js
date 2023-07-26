let $ = document

const inputElem = $.querySelector('#input')
const addNumberBtn = $.querySelector('#button1')
const startSortingBtn = $.querySelector('#button2')
const errorElem = $.querySelector('#error')
const beforeWrapper = $.querySelector('.Before')
const afterWrapper = $.querySelector('.After')
const resetBtn = $.querySelector('#reset')

let numbers = []

errorElem.style.opacity = '0'
resetBtn.style.opacity = '0'

addNumberBtn.addEventListener('click', () => {
    pushNumberToDom()
})

inputElem.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        pushNumberToDom()
    }
})

resetBtn.addEventListener('click', () => location.reload())

// functions
const pushNumberToDom = () => {
    if (inputElem.value === '') {
        errorElem.style.opacity = '1'
    } else {
        errorElem.style.opacity = '0'
        numbers.push(Number(input.value))
        input.value = ''
        beforeWrapper.innerHTML = ''
        for (let item of numbers) {
            beforeWrapper.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
        }
    }
}

const findSmallest = arr => {
    smallest = arr[0]
    smallestIndex = 0

    for (let i = 0; i != arr.length; i++) {
        if (arr[i] <= smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallest
}

const selectionSort = arr => {
    newArr = []

    for (let i = 0; arr.length != 0; i++) {
        smallest = findSmallest(arr)
        newArr.push(smallest)
        smallestIndex = arr.findIndex(num => { return num === smallest })
        arr.splice(smallestIndex, 1)
    }
    afterGenerator(newArr)
    errorElem.style.opacity = '0'
}

const afterGenerator = newArr => {

    afterWrapper.innerHTML = ''
    for (let number of newArr) {
        afterWrapper.insertAdjacentHTML("beforeend", `<li>${number}</li>`)
    }
    resetBtn.style.opacity = '1'
}

startSortingBtn.addEventListener("click", () => selectionSort(numbers))