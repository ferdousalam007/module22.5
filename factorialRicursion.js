// let fact = 1;
// for (let i= 1; i<=5;i++){
//     fact = fact *i;

// }console.log(fact);


function fact(i){
    if(i==1){
        return 1;
    }
  return fact(i -1)*i;

}
console.log(fact(5));