let pathname=window.location.hostname
        console.log("fdgfgc", pathname)
function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.getHours() + ":" + now.getMinutes();
    document.querySelector('#datetime').textContent = currentDateTime;
  }
  setInterval(updateDateTime, 1000);

document.getElementById('signup-btn').addEventListener('click', ()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = JSON.parse(localStorage.getItem('userData'));

    if(userData) {
        const user = userData.find(user => user.email === email);

        if(user && user.password === password) {
            alert('Sign in successful!');
            window.location.href = "../goals/goals.html"
        } else {
            alert('Incorrect email or password. Please try again.');
        }
    } else {
        alert('No user data found. Please sign up.');
    }
});
