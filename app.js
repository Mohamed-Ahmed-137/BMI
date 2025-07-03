let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  let result = document.getElementById("result");
  let suggest = document.getElementById("suggest");
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
  suggest.innerHTML = `${output.suggestion}`;
});

function clacBMI(w, h) {
  h = h / 100;
  let bmiValue = w / (h * h);
  let bmi = bmiValue.toFixed(2);
  let msg = "";
  let suggestion = "";

  let idealBMI = 22;
  let idealWeight = idealBMI * (h * h);
  let diff = (w - idealWeight).toFixed(1);

  if (bmiValue < 18.5) {
    msg = "Underweight";
    suggestion = `You need to gain about ${Math.abs(
      diff
    )} Kg to reach a healthy weight.`;
  } else if (bmiValue >= 18.5 && bmiValue <= 24.99) {
    msg = "Healthy";
    suggestion = "Your weight is already in the healthy range.";
  } else if (bmiValue >= 25.0 && bmiValue <= 29.99) {
    msg = "Overweight";
    suggestion = `You need to lose about ${Math.abs(
      diff
    )} Kg to reach a healthy weight.`;
  } else if (bmiValue >= 30.0) {
    msg = "Obesity";
    suggestion = `You need to lose about ${Math.abs(
      diff
    )} Kg to reach a healthy weight.`;
  }

  return {
    bmi: bmi,
    msg: msg,
    suggestion: suggestion,
  };
}
