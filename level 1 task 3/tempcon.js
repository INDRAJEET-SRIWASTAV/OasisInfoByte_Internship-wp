function convert() {
    let input = document.getElementById("input").value;
    let unit = document.getElementById("unit").value;
    let output = document.getElementById("output");

    if (unit === "Celsius") {
        let fahrenheit = (input * 9 / 5) + 32;
        output.innerHTML = input + "°C = " + fahrenheit + "°F";
    } else if (unit === "Fahrenheit") {
        let celsius = (input - 32) * 5 / 9;
        output.innerHTML = input + "°F = " + celsius + "°C";
    }
}
