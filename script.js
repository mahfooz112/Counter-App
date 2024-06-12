
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtncrease = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;


increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;

}

decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count;

}

resetBtnBtn.onclick = function(){
  count= 0;
  countLabel.textContent = count;
}
