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

function outer(){
    let count =0;
    return {
        increment:function (){
            count++
            console.log(count)
        },
        decrement:function (){
            count--
            console.log(count)
        }
    }
}

let Counter = outer()
Counter.increment()
Counter.increment()
Counter.decrement()