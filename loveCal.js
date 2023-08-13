
function Lov(){
    alert("are you sure you enter both birthdate then Result is on display or on console");
}

function Calculate(){
    

    let x=Math.ceil(Math.random() * 100);
    document.getElementById('Result').innerHTML=x +" % Successfully love ";

let male=document.getElementById('Male').value;
let female=document.getElementById('Female').value;
if(male=="" || female==""){
    console.log("Invalid Input make sure both birth-date enter");
}
else{
console.log("According to Male And Female Birth Day "+ male +"  and  "+female);
console.log("your love story success chances is");
console.log(x+"%");
}
}
let button1=document.querySelector('button');
button1.addEventListener('click',Lov);


