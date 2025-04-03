// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives a function access to its outer scope. 
// In JavaScript, closures are created every time a function is created, at function creation time.

var a=20;
var x=50;

function outer(){
    var x=40;
    function inner(){
        var a=30;
        console.log(a);
        x++;
        console.log(x);
    }
    return inner;
}

var p=outer();
p()