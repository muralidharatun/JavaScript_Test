let i;

for(i = 1; i <= 5; i++){
    console.log ('value of i is : '+i);
}

let fruits = ['Apple', 'Banana', 'Grapes'];
let x;
for (x in fruits){
    console.log (fruits[x])
}
let y;
for(y in fruits){
console.log(fruits[y]);
}

for(x of fruits){
    console.log (x);
}

var i=10;


let count = 11;

while(count <= 10){
    console.log ('Count '+count)
    count=count+1;
}

count = 11;
do{
    console.log ('Count... '+count)
    count=count+1;
}while(count <= 10)