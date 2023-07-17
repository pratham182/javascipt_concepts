//in other language if we access variable before declaring it ,it will throw an error but in js will give undefined (due to lexial scopping)
function fun(){
    console.log(x);  //undefined
    var x=1000;
    console.log(x); //1000
}
fun();

console.log(q); //undefined
var q=100;

console.log(oo);  //undefined
{
    var oo=10;
}
//this is due to lexial scopping
