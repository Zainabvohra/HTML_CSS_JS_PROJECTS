const button = document.getElementById("btn")
const input = document.getElementById("birthday")
const result = document.getElementById("result")



function calculateage(){
  const birthdayvalue = input.value;
  if (birthdayvalue==="") {
    alert("please enter your birthdate")
  }else{
    const age=getage(birthdayvalue)
    result.innerText=`yoour age is ${age} ${age > 1 ? "years" : "year"}"old"`
  }
  
    
}

function getage(birthdayvalue){
    const currdate=new Date();
    const birthdate=new Date(birthdayvalue)
    let age = currdate.getFullYear()-birthdate.getFullYear();
    const months=currdate.getMonth()-birthdate.getMonth();

    if (months<0 || (months===0  && currdate.getDate()<birthdate.getDate())) {
        age--;
    }

    return age;
}

button.addEventListener("click",calculateage)