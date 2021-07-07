let modalOpen = document.getElementById("rules-btn")
let modal = document.getElementById("modal")
let modalText = document.getElementById("modal-text")


 modalOpen.onclick = function(){
 modal.style.display = ("block");
 modalText.innerHTML = ("Quiz-E is a retro video game based quiz. Answer as many questions correct as possible and test your knowledge of our favourite video game oldies.....<br><br><br> Click on the New Game button to begin the quiz. <br><br><br> If at any point you need to restart the quiz just hit the restart button to be taken back to the beginning. <br><br><br> Click the dice at the top of the screen at any time to be taken back to the homescreen<br><br><br> Press the X at the top of the screen to remove this message")
}
let modalClose = document.getElementById("modal-close") 
 
modalClose.onclick = function(){
modal.style.display = ("none");
}