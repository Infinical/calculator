const calculator = document.querySelector(".calculator");
const key = document.querySelector(".calculator_key");
const display = document.querySelector(".calculator_display")

key.addEventListener("click", event => {
    if (event.target.matches("button")) {
        const keys = event.target
        const action = keys.dataset.action
        const keysContent = keys.textContent
        const displayedNum = display.textContent


        const previousKeyType = calculator.dataset.previousKeyType

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator'){
            display.textContent = keysContent
            } else {
            display.textContent = displayedNum + keysContent
            }
            calculator.dataset.previousKey = 'number'
        }

        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
            } else if (previousKeyType === 'operator'){
                display.textContent = '0'
            }
            calculator.dataset.previousKey = 'number'
        }

        if (action === "add" || action === "brackets" || action === "cancel" || action === "percentage" || action === "divide" || action === "multiply" || action === "subtract" || action === "negative/positive" || action === "calculate"){
            
            key.classList.add('is-depressed')

            calculator.dataset.previousKeyType = 'operator'
        }

        if (action === "add" || action === "brackets" || action === "cancel" || action === "percentage" || action === "divide" || action === "multiply" || action === "subtract" || action === "negative/positive" || action === "calculate"){
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }

        const calculate = (n1, operator, n2) => {
            let result = ''


            if (operator === "brackets") {
                result = parseFloat(n1) * parseFloat(n2)
            }

            if (operator === "percentage") {
                result = parseFloat(n1) / parseFloat(n2) * 100
            }

            if (operator === "divide") {
                result = parseFloat(n1) / parseFloat(n2)
            }

            if (operator === "multiply") {
                result = parseFloat(n1) * parseFloat(n2)
            }

            if (operator === "subtract") {
                result = parseFloat(n1) - parseFloat(n2)
            }

            if (operator === "add") {
                result = parseFloat(n1) + parseFloat(n2)
            }

            if (operator === "negative/positive") {
                result = parseFloat(n1) + parseFloat(n2) || parseFloat(n1) - parseFloat(n2)
            }

            console.log (result)
        }

        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            
            display.textContent = calculate(firstValue, operator, secondValue)
        }
        
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
    };
});




