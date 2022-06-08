let myName = document.querySelector("#myName")
let deneme = document.querySelector("#deneme")
let names = prompt("Adınız Nedir?")

myName.innerHTML = ` ${names}`

if (names.length > 0) {
    myName.innerHTML = names;
  } else {
    deneme.innerHTML = "!Lütfen Adınızı Girin!"
    deneme.classList.add("text-danger")

    
  }




















let myClock = document.querySelector("#myClock")
function showTime() {
    const d = new Date();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    let day = d.getDay();
  
    if (day === 1) {
      day = "Pazartesi";
    } else if (day === 2) {
      day = "Salı";
    } else if (day === 3) {
      day = "Çarşamba";
    } else if (day === 4) {
      day = "Perşembe";
    } else if (day === 5) {
      day = "Cuma";
    } else if (day === 6) {
      day = "Cumartesi";
    } else if (day === 7) {
      day = "Pazar";
    }
    setTimeout(showTime, 1000);
  
    myClock.innerHTML = `${hour}:${minutes}:${seconds} ${day}`;
  }
  
  showTime();