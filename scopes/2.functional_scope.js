//function scope ==in a function the visibility of this variable /function is just inside the outer function
function fun(){
    var x=100;

} 
console.log(x);    //Reference error
//this x can accessed inside the function fun