let count = 0;

const counter = document.getElementById("counter");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const badge = document.getElementById("badge");
const progressBar = document.getElementById("progressBar");
const targetSelect = document.getElementById("targetSelect");

let target = parseInt(targetSelect.value);

/* UPDATE UI */
function updateUI(){

counter.textContent = count;

/* progress */
let progress = (count / target) * 100;
progressBar.style.width = progress + "%";

/* badge */
if(count >= target){
badge.style.display = "block";
}else{
badge.style.display = "none";
}

}

/* ADD */
addBtn.addEventListener("click", () => {
count++;
updateUI();
});

/* RESET */
resetBtn.addEventListener("click", () => {
count = 0;
updateUI();
});

/* CHANGE TARGET */
targetSelect.addEventListener("change", () => {
target = parseInt(targetSelect.value);
updateUI();
});