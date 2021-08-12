// IMC = PESO / ALTURA²
// const peso = Number(73);
// const altura = parseFloat(1.72);

//     let imc = peso / (altura ** 2);
//     console.log(imc);

const form = document.querySelector(".form");
const result = document.querySelector(".result");

let peso = form.querySelector("#peso");
let altura = form.querySelector("#altura");

function calculate(event) {
    event.preventDefault();

    let imc = Number(peso.value / altura.value ** 2);

    if (imc < 18.5) {
        result.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> (Abaixo do Peso)</p>`;
    } else if (imc < 25 && imc >= 18.5) {
        result.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> (Peso Normal)</p>`
    } else if (imc < 30 && imc >= 25) {
        result.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> (Sobrepeso)</p>`
    } else if (imc < 35 && imc >= 30) {
        result.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> (Obesidade grau 1)</p>`
    } else if (imc < 40 && imc >= 35) {
        result.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> (Obesidade grau 2)</p>`
    } else if (imc > 40) {
        result.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> (Obesidade grau 3)</p>`
    } else if (imc !== Number) {
        result.innerHTML = `<p class="error"><strong>Erro!</strong> Verifique se digitou o número corretamente.</p>`
    }

    // form.reset();
}

form.addEventListener("submit", calculate);



