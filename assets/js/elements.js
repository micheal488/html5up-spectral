const SignUp=document.querySelector('form')
const UserName=document.getElementById('Text')
const Pass_Word=document.getElementById('Password')
console.log(Pass_Word);
const Signup={
    USERname: UserName.value,
    PASSword: Pass_Word.value
}
console.log(Signup);
function Signin(event){
    event.preventDefault()
    sessionStorage.setItem('Signup',JSON.stringify(SignUp))
    location.href='../index.html'
}
SignUp.addEventListener('submit',Signin)