let $ = document

const inputElem = $.querySelector('#input')
const buttonElem = $.querySelector('#button')
const beforeWrapper = $.querySelector('.Before')
const afterWrapper = $.querySelector('.After')

let numbers = []

inputElem.addEventListener('keypress', event => {

    if (event.key === 'Enter') {
        numbers.push(input.value)
        input.value = ''
        beforeWrapper.innerHTML = ''
        for (let item of numbers) {
            beforeWrapper.insertAdjacentHTML('beforeend', `<li>${item}</li>`)
        }
    }
})




let findSmallest = arr => {
    console.log(arr);
    let smallest = arr[0]
    let smallestIndex = 0

    for (let i = 0; i != arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }

    return smallestIndex
}

let selectionSort = arr => {

    arrLength = numbers.length

    let newArr = []
    let smallest

    for (let i = 0; i != arrLength; i++) {
        smallest = findSmallest(arr)
        newArr.push(arr[smallest])
        arr.splice(smallest, 1)
    }

    afterGenerator(newArr)
    return newArr
}

const afterGenerator = newArr => {

    console.log(newArr);
    afterWrapper.innerHTML = ''
    for (let number of newArr) {
        afterWrapper.insertAdjacentHTML("beforeend", `<li>${number}</li>`)
    }
}

buttonElem.addEventListener("click", () => selectionSort(numbers))