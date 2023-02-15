// truthy and falsy values 

// falsy values = false, "", null, undefined, 0

// false
// ""
// null 
// undefined
// 0

let firstName  = "";
if(firstName){
    console.log(firstName);
}else{
    console.log("firstName kinda empty"); //first kinda empty
}

firstName;
if(firstName){
    console.log(firstName);
}else{
    console.log("firstName kinda empty"); //first kinda empty
}

firstName = null;
if(firstName){
    console.log(firstName);
}else{
    console.log("firstName kinda empty"); //first kinda empty
}

firstName = undefined;
if(firstName){
    console.log(firstName);
}else{
    console.log("firstName kinda empty"); //first kinda empty
}

firstName = 0;
if(firstName){
    console.log(firstName);
}else{
    console.log("firstName kinda empty"); //first kinda empty
}

firstName = false;
if(firstName){
    console.log(firstName);
}else{
    console.log("firstName kinda empty"); //first kinda empty
}

// truthy  Values = Character in String 
// "abc"
// 1,0,-1

firstName = "Harshit";
if(firstName){
    console.log(firstName); //Harshit
}else{
    console.log("firstName kinda empty");
}
