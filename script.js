const textField = document.querySelector(`.text-field`)
const btn = document.querySelector(`.btn`)
const texts = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0"
]
let prevNum = -1
let randomNumber

btn.addEventListener(`click`, function(){
    randomNumber = Math.floor(Math.random() * texts.length)
    if(randomNumber == prevNum) randomNumber = Math.floor(Math.random() * texts.length)
    textField.textContent = texts[randomNumber]
    prevNum = randomNumber
})

const userText = document.querySelector(`.user-text`)
const addBtn = document.querySelector(`.add-btn`)

addBtn.addEventListener(`click`, function(){
    if(userText.value != ``){
        for(let i = 0; i < texts.length; i++){
            if(userText.value == texts[i]){
                console.log(`Już istnieje!`)
                return false
            }
        }
        texts.push(userText.value)
        userText.value = ``
        console.log(texts)
    }else console.log(`Pole jest puste!`)
})