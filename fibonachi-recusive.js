// let fibo =[0,1];
// for (let i=2; i<=6;i++){
//     fibo[i]= fibo[i-1]+fibo[i-2];
// }
// console.log(fibo);

function fibo(nuber){
    if(nuber == 0){
        return 0;
    }
    if(nuber == 1){
        return 1;
    }
    let fiboResult = fibo(nuber-1)+fibo(nuber-2);
    return fiboResult;
}
console.log(fibo(6));