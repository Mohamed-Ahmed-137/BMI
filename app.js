let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  let result = document.getElementById("result");
  let input1 = document.getElementById("w");
  let input2 = document.getElementById("h");

  let weight = parseFloat(input1.value);
  let height = parseFloat(input2.value);
  if (!weight || !height || weight <= 0 || height <= 0) {
    result.innerHTML = "Please enter valid weight and height";
    result.style.color = "red";
    return;
  }

  let output = clacBMI(weight, height);

  if (output.msg === "Healthy") {
    result.style.color = "green";
  } else if (output.msg === "Underweight") {
    result.style.color = "orange";
  } else {
    result.style.color = "red";
  }
  result.innerHTML = `Your BMI is: ${output.bmi} (${output.msg})`;
});

function clacBMI(w, h) {
  h = h / 100;
  let bmi = (w / (h * h)).toFixed(2);
  // console.log(bmi);
  let msg = "";
  if (bmi < 18.5) {
    msg = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.99) {
    msg = "Healthy";
  } else if (bmi >= 25.0 && bmi <= 29.99) {
    msg = "Overweight";
  } else if (bmi >= 30.0) {
    msg = "Obesity";
  }
  //console.log(msg);
  return {
    bmi: bmi,
    msg: msg,
  };
}
