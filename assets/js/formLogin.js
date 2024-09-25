const verify=JSON.parse(sessionStorage.getItem('SignUP'))
const form_post = document.querySelector('form')
console.log(form_post);
// const userDetails = {
//     username: SignUp.USERname.value,
//     password: SignUp.PASSword.value
// }
// console.log(userDetails);
// console.log(form_post);
const Verify={
    USERname: verify.USERname.value
}
console.log(verify);
function login (event){
    event.preventDefault()
    // const username = form_post.username.value
    // // console.log(username);
    // const password = form_post.password.value
    const loggedDetails={
       username: form_post.username.value,
       password: form_post.password.value
    }
    if (loggedDetails.username==verify.USERname && loggedDetails.password==verify.PASSword) {
        // console.log('successful');
        sessionStorage.setItem('loggedinuser',JSON.stringify(loggedDetails))
        location.href='../dashboard.html'
    } else {
        // console.log('wrong details');
        alert('wrong details')
    }
}
form_post.addEventListener('submit',login)