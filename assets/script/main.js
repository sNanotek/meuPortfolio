const adicionaDisplay = document.querySelector('.cont3')

document.addEventListener('click', (e) => {
    const textoBotao = e.target.innerText;

    if(textoBotao == "Enviar Email"){
        e.preventDefault();

        adicionaDisplay.classList.add('adicionaDisplay')
    }

    if(textoBotao == "Enviar"){
        alert("Formulário Enviado")
        adicionaDisplay.classList.remove('adicionaDisplay')
    }

})