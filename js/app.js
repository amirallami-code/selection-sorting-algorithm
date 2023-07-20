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



arrLength = numbers.length

let findSmallest = arr => {
    let smallest = arr[0]
    let smallestIndex = 0

    for (let i = 0; i != arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    console.log("respons findSmallest: ", smallestIndex);
    return smallestIndex
}

let selectionSort = arr => {

    console.log(arr);
    let newArr = []

    let smallest

    for (let i = 0; i != arrLength; i++) {
        smallest = findSmallest(arr)
        newArr.push(arr[smallest])
        arr.splice(smallest, 1)
    }
    console.log(smallest);

    return newArr
}

const afterGenerator = newArr => {

    console.log(newArr);
    for (let number of newArr) {
        afterWrapper.insertAdjacentHTML("beforeend", `<li>${number}</li>`)
    }
}

buttonElem.addEventListener("click", () => selectionSort(numbers))