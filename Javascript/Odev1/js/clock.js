const today = new Date();
document.getElementById("myClock").innerHTML = today.toDateString()+" tarihinde";

let person = prompt("Lütfen adınızı giriniz.", "John Doe");
if (person != null) {
    myName.innerHTML=person;
}
