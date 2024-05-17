

async function trocarMensagem2(){
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function mudarId(){
    const slip_id = await trocarMensagem2()
    return await slip_id.slip.id
}

async function mudarAdvice(){
    const advice = await trocarMensagem2()
    return await advice.slip.advice
}



async function trocarMensagem(){
    const id = await mudarId();
    const advice = await mudarAdvice();
    console.log(id)
    console.log(advice)
    document.querySelector("b").textContent=id;
    document.querySelector("h2").textContent=advice;
    
}
