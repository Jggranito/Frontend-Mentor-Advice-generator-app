document.getElementById("advice_update").addEventListener("click", async () => {
    const conselhoGerado = await gerarConselho()

    const adviceTittle = document.getElementsByClassName("advice-id")
    adviceTittle[0].textContent = `advice #${conselhoGerado.slip.id}`

    const advice = document.getElementsByClassName("advice-description")
    advice[0].textContent = `"${conselhoGerado.slip.advice}"`
})

async function gerarConselho() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}