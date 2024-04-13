function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.getHours() + ":" + now.getMinutes();
    document.querySelector('#datetime').textContent = currentDateTime;
  }
  setInterval(updateDateTime, 1000);

  let checked = document.getElementsByTagName("input")
  let button = document.getElementById("create-btn")

  button.addEventListener("click", ()=>{
    
    for(let i=0;i<checked.length;i++){
      if(checked[i].checked){
        console.log("yes")
        window.location.href = "../workout/workout.html"
      }
    }
  })


  console.log(checked)