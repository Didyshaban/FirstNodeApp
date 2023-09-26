


// const greet = (name)=>{
//     console.log(`Hello, ${name}`);
// }
// greet('Divin');

setTimeout(() => {
    console.log('time out')
    clearInterval(int)
}, 3000);

const int = setInterval(()=>{
    console.log('in the interval')
},1000);
