const select = document.getElementById('select');
const num1= document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnResult = document.getElementById('send');
const resultValuePage = document.getElementById('result');

class Calc {
    constructor(option) {
        this.select = option.select.value;
        this.num1 = option.num1.value;
        this.num2 = option.num2.value;
        this.send = option.send.value;
        this.result = option.result.value;
    }

    static sum(num1, num2) {
        return resultValuePage.innerHTML = num1 + num2
    };

    static min(num1, num2) {
        return resultValuePage.innerHTML = num1 - num2
    };

    static divide(num1, num2) {
        return resultValuePage.innerHTML = num1 * num2
    };

    static multiply(num1, num2) {
        return resultValuePage.innerHTML = num1 / num2
    };
}

btnResult.addEventListener('click',()=>{
    Calc.sum(10,15)
})