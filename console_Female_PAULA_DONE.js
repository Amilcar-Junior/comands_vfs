//allow pasting


let event = new Event('input', {
    'bubbles': true,
    'cancelable': true
});

document.getElementsByTagName('button')[2].click();

document.getElementsByTagName("form")[0].querySelectorAll('input')[0].value='PAULA CRISTINA'
document.getElementsByTagName("form")[0].querySelectorAll('input')[0].dispatchEvent(event)


document.getElementsByTagName("form")[0].querySelectorAll('input')[1].value='VIEIRA MORENO'
document.getElementsByTagName("form")[0].querySelectorAll('input')[1].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('mat-select')[0].click();
let option2 = Array.from(document.querySelectorAll('.mat-option')).find(opt => opt.innerText === "fêmea" || opt.innerText === "feminino" || opt.innerText === "female" || opt.innerText === "Fêmea" || opt.innerText === "Feminino" || opt.innerText === "Female");
option2.click();

document.getElementsByTagName("form")[0].querySelectorAll('input')[2].value='26/12/1998'
document.getElementsByTagName("form")[0].querySelectorAll('input')[2].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('mat-select')[1].click();
let option = Array.from(document.querySelectorAll('.mat-option')).find(opt => opt.innerText === "CAPE VERDE");
option.click();

document.getElementsByTagName("form")[0].querySelectorAll('input')[3].value='PA344732'
document.getElementsByTagName("form")[0].querySelectorAll('input')[3].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('input')[4].value='09/04/2028'
document.getElementsByTagName("form")[0].querySelectorAll('input')[4].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('input')[5].value='238'
document.getElementsByTagName("form")[0].querySelectorAll('input')[5].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('input')[6].value='9284435'
document.getElementsByTagName("form")[0].querySelectorAll('input')[6].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('input')[7].value='hb87293211@outlook.com'
document.getElementsByTagName("form")[0].querySelectorAll('input')[7].dispatchEvent(event)

setTimeout(function() {
    const botao = document.getElementsByTagName('button')[2];
    
    if (botao) {
        botao.click();
    } else {
        console.error('Botão não encontrado.');
    }
}, 27000);