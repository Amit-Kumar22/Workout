function updateDateTime() {
    let now = new Date();
    let currentDateTime = now.getHours() + ":" + now.getMinutes();
    document.querySelector('#datetime').textContent = currentDateTime;
  }
  setInterval(updateDateTime, 1000);

  let create = document.getElementById("create-btn")
let userData = JSON.parse(localStorage.getItem('userData')) || [];

let email = document.getElementById('email')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let password = document.getElementById('password')

function saveData() {
  
}


  create.addEventListener("click", ()=>{
      if(fname.value == "" || lname.value == "" || email.value == "" || password.value == ""){
          alert("please fill the All input")
      }
      else{
        let email1 = email.value;
        let fname1 = fname.value;
        let lname1 = lname.value;
        let password1 = password.value;
        let user = {
            email: email1,
            fname: fname1,
            lname: lname1,
            password: password1
        };
        console.log(user)

        userData.push(user);
    
        localStorage.setItem('userData', JSON.stringify(userData));
        fname = ""
        lname = ""
        email = ""
        password = ""
        alert('Data saved successfully!');
        window.location.href = "../signup/signup.html"
      }
  })

