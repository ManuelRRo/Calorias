const foodButtons = document.querySelectorAll(".btnFood");
const darkModeBtn = document.getElementById('btn-darkMode');
const caloriesCounter = document.getElementById('count');
const counterContainerElement = document.querySelectorAll('.cnt-text');
const darkControlElement = document.querySelectorAll('.darkElement');
const main = document.querySelector('.main-container');

let meat_balls = {
  calories: 1000,
  id: "1"
};
let fried_rice = {
  calories: 500,
  id: "2"
};
let pork_ribs = {
  calories: 1200,
  id: "3"
};
let wings = {
  calories: 700,
  id: "4"
}
let food = [meat_balls, fried_rice, pork_ribs, wings];
let totalCalories = 0;

foodButtons.forEach(btn => {
  btn.addEventListener("click", function() {
    if (darkModeBtn.classList.contains('darkColor')) {
      changeBackgroundColor(btn, "darkColor");
    } else {
      changeBackgroundColor(btn, "lightColor");
    }
  });
});

darkModeBtn.addEventListener("click", function() {
  changeBackgroundColor(darkModeBtn, "darkColor");
  foodButtons.forEach(btn => {
    if (btn.classList.contains('lightColor')) {
      btn.classList.remove('lightColor');
      btn.classList.add("darkColor");
    } else if (btn.classList.contains('darkColor')) {
      btn.classList.remove('darkColor');
      btn.classList.add("lightColor");
    }
  });

  counterContainerElement.forEach(element => {
    if (darkModeBtn.classList.contains('darkColor')) {
      element.classList.add('darkmode');
    } else element.classList.remove('darkmode');
  });

  darkControlElement.forEach(element => {
    if (darkModeBtn.classList.contains('darkColor')) {
      element.classList.add('darkTittleBackground');
    } else element.classList.remove('darkTittleBackground');
  });

  if (darkModeBtn.classList.contains('darkColor')) {
    main.classList.add('darkBackground');
  } else main.classList.remove('darkBackground');

});

function changeBackgroundColor(btn_, color_) {
  let containColor = btn_.classList.contains(color_);
  if (containColor) {
    btn_.classList.remove(color_);
    addOrRemoveCalories(btn_, food, containColor)
  } else {
    btn_.classList.add(color_);
    addOrRemoveCalories(btn_, food, containColor);
  }
}

function addOrRemoveCalories(_btn, food_, remove) {
  food.forEach(fo => {
    if (_btn.id === fo.id) {
      if (remove) totalCalories -= fo.calories;
      else totalCalories += fo.calories;
    }
  });
  caloriesCounter.innerText = totalCalories;
}
