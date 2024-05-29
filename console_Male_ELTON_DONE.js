//allow pasting


let event = new Event('input', {
    'bubbles': true,
    'cancelable': true
});

document.getElementsByTagName('button')[2].click();

document.getElementsByTagName("form")[0].querySelectorAll('input')[0].value='ELTON JOHN'
document.getElementsByTagName("form")[0].querySelectorAll('input')[0].dispatchEvent(event)


document.getElementsByTagName("form")[0].querySelectorAll('input')[1].value='VIEIRA MONTEIRO'
document.getElementsByTagName("form")[0].querySelectorAll('input')[1].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('mat-select')[0].click();
let option2 = Array.from(document.querySelectorAll('.mat-option')).find(opt => opt.innerText === "macho" || opt.innerText === "masculino" || opt.innerText === "male" || opt.innerText === "Macho" || opt.innerText === "Masculino" || opt.innerText === "Male");
option2.click();

document.getElementsByTagName("form")[0].querySelectorAll('input')[2].value='05/02/1991'
document.getElementsByTagName("form")[0].querySelectorAll('input')[2].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('mat-select')[1].click();
let option = Array.from(document.querySelectorAll('.mat-option')).find(opt => opt.innerText === "CAPE VERDE");
option.click();

document.getElementsByTagName("form")[0].querySelectorAll('input')[3].value='PA304862'
document.getElementsByTagName("form")[0].querySelectorAll('input')[3].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('input')[4].value='14/12/2027'
document.getElementsByTagName("form")[0].querySelectorAll('input')[4].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('input')[5].value='238'
document.getElementsByTagName("form")[0].querySelectorAll('input')[5].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('input')[6].value='5853464'
document.getElementsByTagName("form")[0].querySelectorAll('input')[6].dispatchEvent(event)

document.getElementsByTagName("form")[0].querySelectorAll('input')[7].value='hb87293220@outlook.pt'
document.getElementsByTagName("form")[0].querySelectorAll('input')[7].dispatchEvent(event)

setTimeout(function() {
    const botao = document.getElementsByTagName('button')[2];
    
    if (botao) {
        botao.click();
    } else {
        console.error('Botão não encontrado.');
    }
}, 27000);