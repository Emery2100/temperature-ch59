function convertTemperatureRange() {
  let startValue = parseInt(document.getElementById("startTemp").value);
  let endValue = parseInt(document.getElementById("endTemp").value);
  let scale = document.getElementById("scale").value.toUpperCase();
  let output = document.getElementById("output");
  output.innerHTML = ""; 

  for(let temp = startValue; temp <= endValue; temp++) {
    let converted;
    let display = "";

    if(scale === "C") {
      converted = (temp * 9/5) + 32;
      display = temp + "C = " + converted.toFixed(1) + "F";
    }else if (scale === "F") {
      converted = (temp - 32) * 5/9;
      display = temp + "F = " + converted.toFixed(1) + "C";
    }else {
      output.innerHTML = "Invalid scale. Use 'C' or 'F'.";
      return;
    }

    //Thermometer attempt

    let barLength = (temp % 10) + 1;
    let thermometer = "";
    for(let i = 0; i < barLength; i++) {
      thermometer += "0";
    }

    let colorClass = "medium";
    if((scale === "C" && temp <= 10) || (scale === "F" && temp <= 50)) {
    colorClass = "cold";
    }else if ((scale === "C" && temp >= 25) || (scale === "F" && temp >= 77)) {
    colorClass = "hot";
    }

    output.innerHTML += `<div class="thermometer ${colorClass}">${display} | ${thermometer}</div>`;
  }
}