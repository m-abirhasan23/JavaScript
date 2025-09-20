// var compose = function(functions) {
    
//     return function(x) {
//       for (const fn of functions.reverse()) {
//         x=fn(x)
//       }
//       return x
//     }
// };



var compose = function(functions) {
    const fn=(acc,f)=>f(acc)
    
    return function(x) {
    return  functions.reduceRight(fn,x)
    }
    

};