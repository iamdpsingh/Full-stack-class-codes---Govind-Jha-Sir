var x=10;
x++;
function inner(){
    // var x=32;
    console.log(x);
    // var x=32;
    function innermost(){
        console.log(p);
        console.log(x);
        var x=32;
        
    }
    innermost()
    var p=50;
}

inner();