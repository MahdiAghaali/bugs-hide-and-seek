const input = document.getElementById('input')

function calcSqrt() {
    let value = input.value
    const numberSpan = document.getElementById('numberSpan')
    const sqrt = document.getElementById('sqrt')
    numberSpan.innerHTML = value
    sqrt.innerHTML = Math.sqrt(numberSpan)
}

input.addEventListener('input', calcSqrt);