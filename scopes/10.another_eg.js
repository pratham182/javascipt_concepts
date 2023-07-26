//eg 2
var teacher="Radha";  // teacher will get a global scope 
function fun(){   // global scope 
    var teacher="Nishita";  //scope of function fun   
    console.log(teacher);  //XXX not parsing this 
}
console.log(teacher);
fun();    //XXX not parsing this 
