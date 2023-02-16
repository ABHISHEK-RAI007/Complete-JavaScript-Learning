// and(&&), or() operator 

let firstName = "Harshit";
let age = 22;

if (firstName[0] === "H"){
    console.log("Your name starts with H"); // Your name starts with H 
}
if(age > 18){
    console.log("You are above 18"); //You are above 18 ​​​​​at 
}

// But you can check both condtion with and(&&) operator 

if(firstName[0] === "H" && age > 18){
    console.log("Your name start with H and above 18"); //Name starts with H and above 18
}else{
    console.log("inside else");
}

// or ()

let Name ="Harshit"
let Age = 16;

if(Name[0] === "H" || Age > 18 ){
    console.log("inside if"); // inside if
}else{
    console.log("inside else");
}

if(Name[0] === "h" || Age > 18 ){
    console.log("inside if"); 
}else{
    console.log("inside else"); //inside else
}




