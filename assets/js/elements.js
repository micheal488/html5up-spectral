const SignUp=document.querySelector('form')
const UserName=document.getElementById('Text')
const PassWord=document.getElementById('Password')
// console.log(Pass_Word);
const Signup={
    Username: UserName.value,
    Password: PassWord.value
}
console.log(Signup);
function Signin(event){
    event.preventDefault()
    const verify={
        username: Signup.Username.value,
        password: Signup.Password.value
    }
    sessionStorage.setItem('string', JSON.stringify(verify))
    location.href='../index.html'
}
SignUp.addEventListener('submit',Signin)