var numbers = [3,7,5,10,5,10];
function getSum(numbers){
    var sum = 0;
    for(var i=0; i<numbers.length; i++){
        sum=sum+numbers[i];
    }
    return sum;
}
// output = getSum([10,20,30,40,250,50]); // OR
output = getSum(numbers);
console.log(output);