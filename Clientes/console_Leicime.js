//allow pasting

let event = new Event('input', {
    'bubbles': true,
    'cancelable': true
});

// Clica no botao desejado (presumivelmente para abrir o formulario)
document.getElementsByTagName('button')[2].click();

// Preenche o nome
document.getElementsByTagName("form")[0].querySelectorAll('input')[0].value='LEICIME'
document.getElementsByTagName("form")[0].querySelectorAll('input')[0].dispatchEvent(event)

// Preenche o sobrenome
document.getElementsByTagName("form")[0].querySelectorAll('input')[1].value='MENDES TAVARES'
document.getElementsByTagName("form")[0].querySelectorAll('input')[1].dispatchEvent(event)

// Seleciona o genero
document.getElementsByTagName("form")[0].querySelectorAll('mat-select')[0].click();
let option2 = Array.from(document.querySelectorAll('.mat-option')).find(opt => opt.innerText === "fêmea" || opt.innerText === "feminino" || opt.innerText === "female" || opt.innerText === "Fêmea" || opt.innerText === "Feminino" || opt.innerText === "Female");
option2.click();

// Preenche a data de nascimento
document.getElementsByTagName("form")[0].querySelectorAll('input')[2].value='06/02/1987'
document.getElementsByTagName("form")[0].querySelectorAll('input')[2].dispatchEvent(event)

// Seleciona a nacionalidade
document.getElementsByTagName("form")[0].querySelectorAll('mat-select')[1].click();
let option = Array.from(document.querySelectorAll('.mat-option')).find(opt => opt.innerText === "CAPE VERDE");
option.click();

// Preenche o numero do passaporte
document.getElementsByTagName("form")[0].querySelectorAll('input')[3].value='PA265831'
document.getElementsByTagName("form")[0].querySelectorAll('input')[3].dispatchEvent(event)

// Preenche a data de expiracao
document.getElementsByTagName("form")[0].querySelectorAll('input')[4].value='11/05/2027'
document.getElementsByTagName("form")[0].querySelectorAll('input')[4].dispatchEvent(event)

// Preenche o codigo do pais
document.getElementsByTagName("form")[0].querySelectorAll('input')[5].value='238'
document.getElementsByTagName("form")[0].querySelectorAll('input')[5].dispatchEvent(event)

// Preenche o numero de telefone
document.getElementsByTagName("form")[0].querySelectorAll('input')[6].value='58030XX'
document.getElementsByTagName("form")[0].querySelectorAll('input')[6].dispatchEvent(event)

// Preenche o email
document.getElementsByTagName("form")[0].querySelectorAll('input')[7].value='AJ5803055XX@outlook.com'
document.getElementsByTagName("form")[0].querySelectorAll('input')[7].dispatchEvent(event)

// Clica no botao para submeter o formulario apos 27 segundos
setTimeout(function() {
    const botao = document.getElementsByTagName('button')[2];
    
    if (botao) {
        botao.click();
    } else {
        console.error('Botao nao encontrado.');
    }
}, 27000);
