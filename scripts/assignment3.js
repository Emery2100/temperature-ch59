 function convertTemperature() {
   
            const temp = parseFloat(document.getElementById("temperature").value);
            const scale = document.getElementById("scale").value;
            
            let convertedTemp;
            let resultText;

            if (scale == "C") {
                convertedTemp = (temp * 9/5) + 32;
                resultText = `${temp} Celsius is equal to ${convertedTemp.toFixed(2)} Fahrenheit.`;
            } else if (scale == "F") {
                convertedTemp = (temp - 32) * 5/9;
                resultText = `${temp} Fahrenheit is equal to ${convertedTemp.toFixed(2)} Celsius.`;
            }

            const resultElement = document.getElementById("result");
            resultElement.textContent = resultText;

            if (convertedTemp <= 0) {
                resultElement.style.color = "blue"; 
            } else if (convertedTemp >= 32) {
                resultElement.style.color = "red"; 
            }
        }
                 