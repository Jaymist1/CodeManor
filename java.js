let tablink =document.getElementsByClassName("tab");
let tabcontents =document.getElementsByClassName("tabcontents");

function opentab(tabclick){
    for(click of tablink){
        click.classList.remove("active");
    }
    for(clickcontent of tabcontents){
        clickcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("active");
document.getElementById(tabclick).classList.add("activetab")
}
const menuBar = document.getElementById("menubar");

function openMenu(){
    menuBar.style.right = "0";
}
function closeMenu(){
    menuBar.style.right = "-150px";
}

/* Contact submit to google Sheet */
const scriptURL = 'https://script.google.com/macros/s/AKfycbzzkLFl3XtvVtFL3xQIs7Y5Q3Pt_RygFvnFkfvTnkX7P9JGqp8u3oR4ZlXQhGalQxbPlA/exec'
  const form = document.forms['submit-to-google-sheet']
  const alert = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {alert.innerHTML = "Message sent succesfully"
      setTimeout( () => alert.innerHTML = "", 5000)
      form.reset()
    })
      .catch(error => {alert.innerHTML = "sorry. Message not sent"
      setTimeout( () => alert.innerHTML = "", 5000)
      form.reset()})
  })