const array = [12, 23, 34, 45, 56, 67, 78, 89, 90]

// task1
// function maketask1(arr, callback) {
//     let ortalama = 0
//     for (let i = 0; i < arr.length; i++) {
//         ortalama += arr[i]


//     }

//     ortalama /= arr.length
//     callback(ortalama)

// }
// maketask1(array, (ortalama) => console.log(ortalama))



// task2
// function maketask2(arr, callback) {
//     cutlerinsum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             cutlerinsum += arr[i]
//         }

//     }
//     callback(cutlerinsum)
// } maketask2(array, cutlerinsum => console.log(cutlerinsum))



// task3
// function maketask3(arr, callback) {
//     teklerinsum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             teklerinsum += arr[i]


//         }
//     }
//     callback(teklerinsum)

// }maketask3(array,teklerinsum => console.log(teklerinsum))




// task4
// function maketask4(arr, callback) {
//     let cutlerinsum = 0
//     let teklerinsum = 0
//     let hasilleri = 1
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             cutlerinsum += arr[i]

//         }
//         else if (arr[i] % 2 == 1) {
//             teklerinsum += arr[i]
//         }
//     }

//     hasilleri *= cutlerinsum
//     hasilleri *= teklerinsum
//     callback(cutlerinsum, teklerinsum, hasilleri)
// } maketask4(array, (cutlerinsum, teklerinsum, hasilleri) => console.log("teklerin cemi: " + teklerinsum, "cutlerin cemi: " + cutlerinsum, "hasilleri: " + hasilleri))