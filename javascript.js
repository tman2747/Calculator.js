let calculatorButtons = document.querySelectorAll(".defaultButton")
let calculatorText = document.querySelector("#number")

let currentValue = ""
let previousValue = 0
let total = 0
let operator = ""

function operate(number1, number2, operator)
{
    switch (operator) {
        case "+":
            total = add(number1,number2)
            previousValue = total
            operator = ""
            break;
        case "-":
            total = subtract(number1,number2)
            previousValue = total
            operator = ""
            break;
        case "×":
            total = mulitply(number1,number2)
            previousValue = total
            operator = ""
            break;
        case "÷":
            total = divide(number1,number2)
            previousValue = total
            operator = ""
            break;
    
        default:
            console.log("This opperation has not been added.");
            break;
    }
}


function add(number1, number2)
{
    // doing this to help handle fractions
    number1 *= 100
    number2 *= 100
    return (Number(number1) + Number(number2)) / 100
}

function subtract(number1, number2)
{
    return Number(number1) - Number(number2)
}

function mulitply(number1, number2)
{
    number1 *= 100
    number2 *= 100
    return (Number(number1) * Number(number2)) / 10000
}

function divide(number1, number2)
{
    if (number2 == 0)
    {
        console.log("Imagine that you have zero cookies and you split them evenly among zero friends. How many cookies does each person get?")
        return "Error"

    }
    return (number1 / number2)
}

function clear() 
{
    currentValue = ""
    previousValue = 0
    total = 0
    operator = ""
}

function showTotal()
{
    calculatorText.innerHTML = total
}


calculatorButtons.forEach(element => {
    element.addEventListener("click", (e) =>{
        if (e.target.classList.contains("buttonNumber"))
        {
            currentValue += e.target.textContent
            calculatorText.innerHTML = currentValue
        }
         switch (e.target.textContent) 
         {
             case "C":
                 clear()
                 calculatorText.innerHTML = "0"
                 break;
            case "+":
                operator = "+"
                if (currentValue != "")
                    operate(previousValue,currentValue,operator)
                if (previousValue == 0)
                {
                    previousValue = currentValue
                }
                currentValue = ""
                showTotal()
                break;
            case "-":
                operator = "-"
                if (currentValue != "")
                {
                    operate(currentValue,previousValue,operator) // had to switch this to get minus to work check order!
                }
                if (previousValue == 0)
                {
                    previousValue = currentValue
                }
                currentValue = ""
                showTotal()
                break;
            case "×":
                operator = "×"
                if (currentValue != "")
                {
                    operate(currentValue,previousValue,operator) // had to switch this to get minus to work check order!
                   }
                    if (previousValue == 0)
                {
                     previousValue = currentValue
                }
                currentValue = ""
                showTotal()
                break;
            case "÷":
                operator = "÷"
                if (previousValue != "")
                {
                    operate(currentValue,previousValue,operator) // had to switch this to get minus to work check order!
                   }
                    if (previousValue == 0)
                {
                     previousValue = currentValue
                }
                currentValue = ""
                showTotal()
                break;
            case "+/-":
                if (Number(currentValue)>0)
                {
                    currentValue -= (currentValue * 2)
                    calculatorText.innerHTML = currentValue
                }
                else if (Number(currentValue) < 0)
                {
                    currentValue = (currentValue * -1)
                    calculatorText.innerHTML = currentValue
                }
                else
                {
                    total = (total * -1)
                    previousValue = total
                    calculatorText.innerHTML = total
                }
                break;
            case "=":
                operate(previousValue,currentValue,operator)
                showTotal()
                currentValue = ""
                break;
            default:
                break;
         }
         console.log(`previousValue = ${previousValue}`)
         console.log(`currentValue = ${currentValue}`)
         console.log(`total = ${total}`)
        
    })
})