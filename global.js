console.log(global)

//creating a global function with global

global.setTimeout(() => {
    console.log('the global functionality is working fine')
    clearInterval(programaticallyClearingInterval);
}, 3000);

const programaticallyClearingInterval =  global.setInterval(() => {
    console.log('I Run without stopping')
}, 1000);

console.log(__dirname);
console.log(__filename);