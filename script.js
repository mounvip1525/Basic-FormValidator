const form=document.getElementById('form');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
const messageContainer=document.querySelector('.message-container');
const message=document.getElementById('message');

let isValid=false;
let passwordMatch=false;

function validateForm(){
    //Using the constraint API for validating the form
    isValid=form.checkValidity();
    // console.log(isValid);
    if(!isValid){
        message.textContent='Please fill all the fields!';
        message.style.color='red';
        messageContainer.style.borderColor='red'; 
        return;
    }
    if(password1.value===password2.value){
        passwordMatch=true;
        password1.style.borderColor='green';
        password2.style.borderColor='green';
    }
    else{
        passwordMatch=false;
        message.textContent="Your passwords don't match:(";
        message.style.color='red';
        messageContainer.style.borderColor='red';
        password1.style.borderColor='red';
        password2.style.borderColor='red';
        return;
    }
    //if the form is valid and passwords match
    if(isValid && passwordMatch){
        message.textContent="Successfully Registered:)";
        message.style.color='green';
        messageContainer.style.borderColor='green';
    }
}

function storeFormData(){
    // note that the const user is an object and not an array(to improve performance)
    const user={
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value
    };
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    // console.log(e);
    validateForm();
    if(isValid&&passwordMatch){
        storeFormData();
    }
}
//Event Listeners
form.addEventListener('submit',processFormData);