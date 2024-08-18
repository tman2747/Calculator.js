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
            console.log(total)
            break;
        case "-":
            subtract(number1,number2)    
            break;
            case test:
            
            break;
            case test:
            
            break;
    
        default:
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
                if (previousValue > 0)
                    operate(previousValue,currentValue,operator)
                if (previousValue == 0)
                {
                    previousValue = currentValue
                }
                currentValue = ""
                showTotal()
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

        // calculatorButtons.forEach(element => {
        //     element.addEventListener("click", (e) =>{
        //         if (e.target.classList.contains("buttonNumber"))
        //         {
        //             currentValue += e.target.textContent
        //             calculatorText.innerHTML = currentValue
        //         }
        //         switch (e.target.textContent) {
        //             case "C":
        //                 clear()
        //                 calculatorText.innerHTML = "0"
        //                 break;
        //             case "+":
        //                 if (operator == "+")
        //                     {
        //                         total = add(previousValue, Number(currentValue))
        //                         previousValue = Number(total)
        //                         currentValue = ""
        //                         showTotal()
        //                     }
        //                     else
        //                     {
        //                         operator = "+"
        //                         previousValue = Number(currentValue)
        //                         currentValue = ""
        //                     }
        //                 break;
        //             default:
        //                 break;
        //         }
        //         if (e.target.textContent == "=")
        //             {
        //                 switch (operator) {
        //                     case "+":
        //                         total = add(previousValue, Number(currentValue))
        //                         showTotal()
        //                         break;
                        
        //                     default:
        //                         break;
        //                 }
        //             }
        //     })
        // })



// calculatorButtons.forEach(element => {
//     element.addEventListener("click", (e)=>{
//         if (e.target.classList.contains("buttonNumber"))
//             {
//                 currentValue += e.target.textContent
//                 updateText()
//             }
//         else
//         {
//             switch (e.target.textContent) {
//                 case "C":
//                     fullClear()
//                     plusEnabled = false;
//                     break;
//                 case "+":
//                     if (plusEnabled)
//                     {
//                         total = previousValue + Number(currentValue)
//                         previousValue = total
//                         clear()
//                         showTotal()
//                         currentValue = ""
//                     }
//                     else
//                     {
//                     previousValue = Number(currentValue) 
//                     currentValue = ""
//                     plusEnabled = true;
//                     e.target.style.backgroundColor = " rgb(255, 255, 255)"
//                     e.target.style.color = "rgb(0, 0, 0)"
//                     }
//                     break;
//                 case "=":
//                     total = previousValue + Number(currentValue)
//                     currentValue = total
//                     plusEnabled = false;
//                     showTotal()
//                     break;
//                 default:
//                     console.log("ERROR!")
//                     break;
//             }
//         }
//         console.log(`previousValue = ${previousValue}`)
//         console.log(`currentValue = ${currentValue}`)
//         console.log(`total = ${total}`)
//     })
// });

// function updateText()
// {
//     calculatorText.innerHTML = currentValue
// }

// function showTotal()
// {
//     calculatorText.innerHTML = total
// }

// function fullClear()
// {
//     calculatorText.innerHTML = 0
//     currentValue = ""
//     previousValue = 0
//     total = 0
// }

// function clear()
// {
//     calculatorText.innerHTML = 0
//     currentValue = 0
// }
// I think the problem may lie here or in the the above plus. I might need to add a seperate registar to hold the total whats being inputted and the previous value
// i just changed the name of firstNumber to total and I think I should refactor that back and then add a seperate new total to actually track logic
//might be smart to add functions for add sub divide ect to make sure everything works correctly and all the buttons do is edit the number and then call the relavent function
// maybe by checking if the prev number isnt blank or something and if it isnt then call the function else just do the norm