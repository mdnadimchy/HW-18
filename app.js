// //JS LOOP
// const cars = ["BMW", "Volvo", "Saad", "Ford", "Fiat", "Audi"]

// let text = "";
// for(let i =0; i < cars.length; i++){
//     console.log(cars[i]) + "<br>";
// }

let name = prompt("Enter your Name:");
let pass = prompt("Enter your password:");

if (name === "NadimChy") {
    if (pass === "12345") {
        console.log("You are loged in");   
    } else {
        console.log("Incorrect Password");  
    }
} else {
    console.log("Your information is not valid");
}

let on = document.querySelector('.on');
let img = document.querySelector('.img');
let off = document.querySelector('.off');


on.addEventListener('click', function(){
    img.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
});

off.addEventListener('click', function(){
    img.src = 'https://www.w3schools.com/js/pic_bulboff.gif'
})