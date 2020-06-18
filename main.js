const ourLoops = document.querySelector('.Our-Loops')
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
]
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function createHTML(title, array){
    const kataHeading = document.createElement('h2')
    const kataArray = document.createElement('h3')
    
    ourLoops.append(kataHeading)
    kataHeading.append(title)
    ourLoops.append(kataArray)
 kataArray.append(array) 
}
//Thanks Shane for the create html function

// Kata 1
let kataArray1 = []
for (let counter = 1; counter <= 20; counter += 1) {
    kataArray1.push(counter)
}
createHTML('Kata1', kataArray1)

// const kata1Heading = document.createElement('h3')
// parentElement.append(kata1Heading)
// kata1Heading.append('KATA 1') thanks DMG

//Kata 2
let kataArray2 = []
for (let counter = 1; counter <= 20; counter +=1) {
    if (!(counter%2)) {
        kataArray2.push(counter)
    }
}
createHTML('Kata2', kataArray2)

//Kata 3
let kataArray3 = []
for (let counter = 1; counter <= 20; counter += 1) {
    if ((counter%2) === 1 ) {kataArray3.push(counter)}
}
createHTML('Kata3', kataArray3)

//Kata 4
let kataArray4 = []
for (let counter = 0; counter <= 100; counter += 5) {
    kataArray4.push(counter)
}
createHTML('Kata4', kataArray4)

//Kata 5
let kataArray5 = []
for (let counter = 1; counter <= 10; counter += 1) {
    kataArray5.push(counter * counter)
}
createHTML('Kata5', kataArray5)

//Kata 6
let kataArray6 = []
for (let counter = 20; counter >= 1; counter -= 1) {
    kataArray6.push(counter)
}
createHTML('Kata6', kataArray6)

//Kata 7
let kataArray7 = []
for (let counter = 20; counter >= 1; counter -= 1) {
    if (!(counter%2)) {
        kataArray7.push(counter)
    }
}
createHTML('Kata7', kataArray7)

// Kata 8
let kataArray8 = []
for (let counter = 20; counter >= 1; counter -= 1) {
    if ((counter%2) === 1) {
        kataArray8.push(counter)
    }
}
createHTML('Kata8', kataArray8)

//Kata 9
let kataArray9 = []
for (let counter = 100; counter >= 1; counter -= 5) {
    kataArray9.push(counter)
}
createHTML('Kata9', kataArray9)

//Kata 10
let kataArray10 = []
for (let counter = 10; counter >= 1; counter -= 1) {
    kataArray10.push(counter * counter)
}
createHTML('Kata10', kataArray10)

//Kata 11
let kataArray11 = []
for (let counter = 19; counter < sampleArray.length; counter += 1) {
    kataArray11.push(sampleArray)
}
createHTML('Kata11', kataArray11)

//Kata 12
let kataArray12 = []
for (let counter = 0; counter <= sampleArray.length; counter += 1) {
    if (!(sampleArray[counter]%2)) {
        kataArray12.push(sampleArray[counter])
    }
}
createHTML('Kata12', kataArray12)

//Kata 13
let kataArray13 = []
for (let counter = 0; counter <= sampleArray.length; counter += 1) {
    if ((sampleArray[counter]%2)) {
        kataArray13.push(sampleArray[counter])
    }
}
createHTML('Kata13', kataArray13)

//Kata 14
let kataArray14 = []
for (let counter = 0; counter <= sampleArray.length; counter += 1) {
    kataArray14.push(sampleArray[counter] * sampleArray[counter])
}
createHTML('Kata14', kataArray14)

//Kata 15
let kataArray15 = []
let arraySum = myArray.reduce(function (a, b) {
    return a + b
})
kataArray15.push(arraySum)
createHTML('Kata15', kataArray15)

// Kata 16
let kataArray16 = []
let arraySum16 = sampleArray.reduce(function (a, b) {
    return a + b
})
kataArray16.push(arraySum16)
createHTML('Kata16', kataArray16)

//Kata 17
let kataArray17 = []
const smallestElement = Math.min.apply(null, sampleArray)
kataArray17.push(smallestElement)
createHTML('Kata17', kataArray17)

//Kata 18
let kataArray18 = []
let largestElement = Math.max.apply(null, sampleArray)
kataArray18.push(largestElement)
createHTML('Kata18', kataArray18)
// I used https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621 to help me determine the best way to go about the last 2 katas
//Worked in a group with Tiara and Shane