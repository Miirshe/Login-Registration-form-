let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm");
let form = document.querySelector("#forms");

const showError = (element,message)=>{
    let parentElement = element.parentElement;
    parentElement.classList = "form-control error";
    let icon_success = parentElement.querySelectorAll("i")[0];
    let icon_error = parentElement.querySelectorAll("i")[1];
    icon_success.style.visibility = 'hidden';
    icon_error.style.visibility = 'visible';
    let small = parentElement.querySelector('small');
    small.style.visibility = 'visible';
    small.innerText = message;
}
const showSuccess = (element , message )=>{
    let parentElement = element.parentElement;
    parentElement.classList = "form-control error";
    let icon_success = parentElement.querySelectorAll("i")[0];
    let icon_error = parentElement.querySelectorAll("i")[1];
    icon_success.style.visibility = 'visible';
    icon_error.style.visibility = 'hidden';
    let small = parentElement.querySelector('small');
    small.style.visibility = 'hidden';
    small.innerText = message;
    
}


const CheckEmpty = (elements)=>{
    elements.forEach(element => {
        if(element.value===""){
            showError(element , 'Input Field Rquired ! ');
        }
        else{
            
            showSuccess(element ,'Input Field Rquired ! ' );

        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    CheckEmpty([username,email,password,confirm]);
    check_paasword(password, 6 , 10 )
    check_email(email);

});


function check_paasword(inputing, min , max ) {
    if(inputing.value.length<min)
    {
        showError(inputing, 'Password must be at least '+min+' characters');
    }
    else if(inputing.value.length>max)
    {
        showError(inputing, 'Password must be less than '+max+' characters');
    }
    else{
        showSuccess(inputing);
    }
}
const check_email=(email)=>{
    let reg = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"; 
    if(reg.includes(email.value)){
        showError(email, 'Invalid Email');
    }
    else{
        showSuccess(email);
        
    }
}
