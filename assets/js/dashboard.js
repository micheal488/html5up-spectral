const verify = JSON.parse (sessionStorage.getItem('loggedinuser'))
const Username = document.getElementById('Username')
const Name = document.getElementById('Name')
const PassWord = document.getElementById('PassWord')
const logOut = document.getElementById('button')
// console.log(verify);
// console.log(verify);
if (!verify) {
    alert('please log in')
    location.href='../index.html'
} else {
    // console.log('logged in');
    Username.innerHTML=verify.username
    // let pass=verify.password.length
    // console.log(pass*"*");
    Name.innerHTML=verify.username
    PassWord.innerHTML=verify.password
}
function logout(){
 sessionStorage.removeItem('loggedinuser')   
 location.href='../index.html'
}
logOut.addEventListener('click',logout)