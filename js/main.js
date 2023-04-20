const egg = document.getElementById("easter-egg");
const newEggText = document.getElementById("egg-text-box")

egg.addEventListener("click", function(){
  egg.style.display = "none"
  alert("you found me!")
})

