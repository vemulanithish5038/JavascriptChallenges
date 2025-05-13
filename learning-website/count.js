let count = 0;

const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const countDisplay = document.getElementById("countDisplay");
updateCounterMinusButtonStatus()

function updateCountDisplay() {
  countDisplay.textContent = count;
  updateCounterMinusButtonStatus()
}

function updateCounterMinusButtonStatus() {
  if (count === 0) {
    subtractButton.disabled = true;
  } else {
    subtractButton.disabled = false;
  }
}

addButton.addEventListener("click", function () {
  count++;
  updateCountDisplay();
});

subtractButton.addEventListener("click", function () {
  count--;
  updateCountDisplay();
});
