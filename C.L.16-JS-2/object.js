var obj = {
    name:'Dhruv(Gauram)',
    age: 20,
    city: 'Tundla',
    "full name":'Dhruv Pratap Singh'
    // i:'kuch'
};   // key always string.

// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);


// for(var i in obj){
//     console.log(i);
// };  //retuns key value

// for(var i in obj){
//     console.log(i);
//     console.log(obj.i);
// };

// for(var i in obj){
//     console.log(i);
//     console.log(obj[i]);
// };

for(var i in obj){
    console.log(i);
    console.log(obj['full name']);
};
