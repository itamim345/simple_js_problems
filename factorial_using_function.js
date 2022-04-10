 var factorial=1;
 function getMyFactorial(num){
    for(i=1; i<=num; i++){
        factorial=factorial*i;
    }
    return factorial;
}

var output = getMyFactorial(10);
console.log(output);