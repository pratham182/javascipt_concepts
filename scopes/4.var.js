//var keyword === 1 whenever you use var inside function it will get function scope 
//2. Whenever you use it outside the function ,no matter if it's in a block or not it will get global scope

//eg
function fun(){
    var x=100;
    console.log(x);  //100
}
fun();
//console.log(x);   //refernce error


if(true){
    a=1000;
}

console.log(a);
//this a will get global scope