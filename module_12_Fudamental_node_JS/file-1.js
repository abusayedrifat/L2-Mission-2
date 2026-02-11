const a = 10;

const mul = (a,b) =>{
    const result = a*b;
   console.log(result);
 
}
mul(2,3)

let z = [2,5,7,8,22,8,5,77]
const evenNumbers = []

const filtering = (z)=>{
    for(i=0; i<z.length ; i++){
        if (z % 2 == 0) {
            evenNumbers.push(z)
        }
    }
    return z
}
filtering(z)
console.log(evenNumbers);





module.exports = {a,mul,filtering}