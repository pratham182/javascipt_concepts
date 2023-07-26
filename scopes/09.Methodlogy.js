//working
//Js == hydrid language (compiler + interpreter)
// parsing then execute 

//let's discuss how parsing happen ??
//in this phase the scope is get assign to variable /functions . One done it will read and execute the code 

//parsing (scope resolution) + after reading code and execute 
//lexical scope === inside the function it maintain the scope of that function and outside that it maintain global scope 
//formal decalration === let ,var and const (engine that read only that)

//eg 1
//parsing phase 
var teacher="Radha";  // teacher will get a global scope 
function fun(){   // global scope 
    var teacher="Nishita";  //scope of function fun   
    console.log(teacher);  //XXX not parsing this 
}
fun();    //XXX not parsing this 



//execution phase
var teacher="Radha";  //teacher is global scope assign Radha to it
function fun(){   
    var teacher="Nishita";  //teacher is in scope of function fun assign Nishita to it   
    console.log(teacher);  //Nishita (check  inside the function scope if it's not found then move outside to it)
}
fun();    //function fun called (stack) 




