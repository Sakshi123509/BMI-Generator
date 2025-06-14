const content = document.querySelector(".container");
// console.log(content);

content.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#Height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const guide = document.querySelector("#guide");

  if (height == " " || height < 0 || isNaN(height)) {
    result.innerHTML = `please enter valid height ${height}`;
  } else if (weight == " " || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please enter valid weight ${weight}`;
  } else {
    const bmi = ((weight * 10000) / (height * height)).toFixed(2);
    result.innerHTML = `<span>BMI: ${bmi}</span>`;
    guide.innerHTML = `<b>BMI guide: </b> `;
    if (bmi < 18.6) {
      guide.innerHTML = `You are under weight`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      guide.innerHTML = `you are in normal range`;
    } else {
      guide.innerHTML = `you are overweight`;
    }
  }
});

gsap.from("nav h1", {
  y: -150,
  duration: 0.9,
  delay: 0.1,
  opacity: 0,
  stagger: 0.2,
});
gsap.from(".heading", {
  duration: 0.7,
  opacity: 0,
  scale: 0.5,
  y: 0,
});
//isNaN =converteable into number or not

// 1foot=30.48
// 1inch =2.54
// BMI formula= height(m) weight (kg)
// weight/height^2

// height(cm) weight(kg)
// weight*10000/height^2
