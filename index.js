// var
// -- var is like function scope in javascript
// let
// --let is block scope
// const
// --const is also a bloce scope in javascript

// var a= 10;
// var a=20;

// let b=30
// b=40

// const c=30;

// if(true){
//     var a=10;
//     let b=20;
//     const c=30
// }
// console.log(a)






// var a =10;
// function fun(){
//     var a=20
//     console.log(a)
// }
// console.log(a)
// fun()
// // console.log(fun())

// Closures

// function outer(){
//     let count =0;
//     return {
//         increment:function (){
//             count++
//             console.log(count)
//         },
//         decrement:function (){
//             count--
//             console.log(count)
//         }
//     }
// }

// let Counter = outer()
// Counter.increment()
// Counter.increment()
// Counter.decrement()


//  Promises

// Promise a function based call, we are using fetching the using promises and also there one more setTimeout and SetInterval

// In promises, there are three states promise pending, fullfilled and also reject

// let fetchData = new Promise((resolve,reject)=>{
//     let isValid = false
//     setTimeout(()=>{
//         if(isValid){
//             resolve("Completed")
//         }
//         else{
//             reject("Not completed")
//         }
//     },1000)
// })

// fetchData.then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// })

// First, the javaScript single-threaded it means it maintains the asynchronous operations
// asynchrounous operations are doing that it doesn't break the operation it skips that operation and continues to excute 

// async function fetchData(){
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         let result = await response.json()
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData()

// Spreading and Destructing
// Spreading is the copying the data from one to another
// Destructing is the extracting the data from one object or array 

// const first = [1,2,3]

// const [a,b,c] = first
// console.log(a,b,c)


// const first = [1,2,3]
// const second = [...first,4]
// const third = [...first,...second]
// console.log(third)

