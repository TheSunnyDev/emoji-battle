let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁", "🦆"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * fighters.length)
    let randomIndexTwo = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = (fighters[randomIndex] + " vs " + fighters[randomIndexTwo])
    
})


