let calculatorButtons = document.querySelectorAll(".defaultButton")
let calculatorText = document.querySelector("#number")

let textNumber = ""
let previousValue = ""

calculatorButtons.forEach(element => {
    element.addEventListener("click", (e)=>{
        if (e.target.classList.contains("buttonNumber"))
            {
                textNumber += e.target.textContent
                updateText()
            }
        else
        {
            switch (e.target.textContent) {
                case "C":
                    fullClear()
                    break;
                case "+":
                    previousValue = textNumber
                    clear()
                    break;
                case "=":
                    calculatorText.innerHTML = Number(textNumber) + Number(previousValue)
                    console.log(previousValue)
                    previousValue = (Number(textNumber) + Number(previousValue))
                    console.log(previousValue)
                    break;
                default:
                    break;
            }
        }
    })
});

function updateText()
{
    calculatorText.innerHTML = textNumber
}

function fullClear()
{
    calculatorText.innerHTML = "0"
    textNumber = ""
    previousValue = ""
}

function clear()
{
    calculatorText.innerHTML = "0"
    textNumber = ""
}
