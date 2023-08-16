function calculate() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height)) {
        document.getElementById("result").textContent = "Masukkan angka valid";
    } else {
        const area = 0.5 * base * height;
        const calculationSteps = `
        <p>L= 1/2 x a x t </p>
        <p>L= 1/2 x ${base} x ${height}</p>
        <p>Hasil: ${area}</p>`;
        document.getElementById("result").innerHTML = calculationSteps;
    }
}



function calculatePerimeter() {
    const side1 = parseFloat(document.getElementById("side1").value);
    const side2 = parseFloat(document.getElementById("side2").value);
    const side3 = parseFloat(document.getElementById("side3").value);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        document.getElementById("result").textContent = "Masukkan angka valid";
    } else {
        const perimeter = side1 + side2 + side3;
        const calculationSteps = `
        <p>L= S1 +S2 +S3 </p>
        <p>L= ${side1} + ${side2} + ${side3}</p>
        <p>Hasil: ${perimeter}</p>`;
        document.getElementById("result").innerHTML=calculationSteps;
    }
}

function kalkulator() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height)) {
        document.getElementById("result").textContent = "Masukkan angka valid";
    } else {
        const area = base * height;
        const calculationSteps = `
        <p>L= a x t </p>
        <p>L=  ${base} x ${height}</p>
        <p>Hasil: ${area}</p>`;
        document.getElementById("result").innerHTML=calculationSteps;
    }
}

function KalkulatorKeliling() {
    const side1 = parseFloat(document.getElementById("side1").value);
    const side2 = parseFloat(document.getElementById("side2").value);

    if (isNaN(side1) || isNaN(side2)) {
        document.getElementById("result").textContent = "Masukkan angka valid";
    } else {
        const perimeter = 2 * (side1 + side2);
        const calculationSteps = `
        <p>L= 2 x (S1 + S2) </p>
        <p>L= 2 x (${side1} + ${side2})</p>
        <p>Hasil: ${perimeter}</p>`;
        document.getElementById("result").innerHTML=calculationSteps;
    }
}

function resetLuasSegitiga() {
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").textContent = "Hasil: ";
}

function resetKelilingSegitiga() {
    document.getElementById("side1").value = "";
    document.getElementById("side2").value = "";
    document.getElementById("side3").value = "";
    document.getElementById("result").textContent = "Hasil: ";
}

function resetKelilingJajarGenjang() {
    document.getElementById("side1").value = "";
    document.getElementById("side2").value = "";
    document.getElementById("result").textContent = "Hasil: ";
}
function resetLuasJajarGenjang() {
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").textContent = "Hasil: ";
}
