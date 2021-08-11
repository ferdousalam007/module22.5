// let sum = 0;
// for(let i=1;i<=10;i++){
//     sum = sum+i;
// }

// console.log(sum);


function sum(i){
    if(i==1){
        return 1;
    }
    let total = sum(i-1)+i;
     return total;

}
console.log(sum(10)); 