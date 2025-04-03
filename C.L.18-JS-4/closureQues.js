function outerFun(){
    let money = 150;
    function innerFun(){
        money++;
        let a = 10;
        function innerMostFun(){
            money++;
            a++;
            console.log('money: ', money, 'a: ', a);
        }
        return innerMostFun;
    }
    return innerFun;
}

let fun = outerFun();   //returns inerfun
let fun1 = fun();  // returns innermostfun
let fun2 = fun();  // returns innermostfun

fun1();
fun1();
fun2();
fun2();
fun2();
fun1();