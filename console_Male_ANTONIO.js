//allow pasting

let event = new Event('input', {
    'bubbles': true,
    'cancelable': true
});

// Clica no botão desejado (presumivelmente para abrir o formulário)
document.getElementsByTagName('button')[2].click();

// Preenche o nome
document.getElementsByTagName("form")[0].querySelectorAll('input')[0].value='ANTONIO CARLOS'
document.getElementsByTagName("form")[0].querySelectorAll('input')[0].dispatchEvent(event)

// Preenche o sobrenome
document.getElementsByTagName("form")[0].querySelectorAll('input')[1].value='CORREIA GONCALVES'
document.getElementsByTagName("form")[0].querySelectorAll('input')[1].dispatchEvent(event)

// Seleciona o gênero
document.getElementsByTagName("form")[0].querySelectorAll('mat-select')[0].click();
let option2 = Array.from(document.querySelectorAll('.mat-option')).find(opt => opt.innerText === "macho" || opt.innerText === "masculino" || opt.innerText === "male" || opt.innerText === "Macho" || opt.innerText === "Masculino" || opt.innerText === "Male");
option2.click();

// Preenche a data de nascimento
document.getElementsByTagName("form")[0].querySelectorAll('input')[2].value='03/04/1976'
document.getElementsByTagName("form")[0].querySelectorAll('input')[2].dispatchEvent(event)

// Seleciona a nacionalidade
document.getElementsByTagName("form")[0].querySelectorAll('mat-select')[1].click();
let option = Array.from(document.querySelectorAll('.mat-option')).find(opt => opt.innerText === "CAPE VERDE");
option.click();

// Preenche o número do passaporte
document.getElementsByTagName("form")[0].querySelectorAll('input')[3].value='PA392685'
document.getElementsByTagName("form")[0].querySelectorAll('input')[3].dispatchEvent(event)

// Preenche a data de expiração
document.getElementsByTagName("form")[0].querySelectorAll('input')[4].value='15/10/2028'
document.getElementsByTagName("form")[0].querySelectorAll('input')[4].dispatchEvent(event)

// Preenche o código do país
document.getElementsByTagName("form")[0].querySelectorAll('input')[5].value='238'
document.getElementsByTagName("form")[0].querySelectorAll('input')[5].dispatchEvent(event)

// Preenche o número de telefone
document.getElementsByTagName("form")[0].querySelectorAll('input')[6].value='58030XX'
document.getElementsByTagName("form")[0].querySelectorAll('input')[6].dispatchEvent(event)

// Preenche o email
document.getElementsByTagName("form")[0].querySelectorAll('input')[7].value='AJ5803055XX@outlook.com'
document.getElementsByTagName("form")[0].querySelectorAll('input')[7].dispatchEvent(event)

// Clica no botão para submeter o formulário após 27 segundos
setTimeout(function() {
    const botao = document.getElementsByTagName('button')[2];
    
    if (botao) {
        botao.click();
    } else {
        console.error('Botão não encontrado.');
    }
}, 27000);
