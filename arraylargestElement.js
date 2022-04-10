function getLargest(numbers){
    var largest= 0;
    for(var i= 0; i<numbers.length; i++){
        if(numbers[i] > largest){
            var largest = numbers[i];
        }
    }
    return largest;
}
var result = getLargest([56,78,67,45,89,41]);
console.log(result);

