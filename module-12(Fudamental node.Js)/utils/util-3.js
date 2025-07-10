const z = [2,5,7,8,22,8,5,6,77]

const filtering = ()=>{
    for(i=1 ; i<10 ; i++){
        if (z % 2 == 0) {
            return z
        }
        console.log([z]);
    }
}
filtering()
console.log(z);

module.exports = {filtering}