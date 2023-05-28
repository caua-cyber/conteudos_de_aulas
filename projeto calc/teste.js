//declarando todas as minhas variaveis usadas durante o desenvolvimento//

const teclas = document.querySelectorAll('.v') //selecionando todos de uma vez//
const input = document.getElementById('input')
const igual = document.getElementById('iqual')
const b = document.getElementById('backs')
const result = document.getElementById('result')
const main = document.querySelector('main')
const theme_switch = document.getElementById('swiththeme')
const cop = document.getElementById('copy')
const root = document.querySelector(':root') //pegando uma classe do css//


/*acessando cada item com a class .v e em cada um, estou recolhendo o seu valor
caso o usuario clique e lembre-se, para trabalhar com o valor de cada um, ou seja
trabalhar com cada item, se deve usar um parametro para trabalhar com esses itens
*/
teclas.forEach((keys) => {
    
    keys.addEventListener('click',() => {
        const valor = keys.dataset.value
        input.value += valor
    })
})

//selecionando as teclas que serão permitidas//
const teclas_verificadas = ["1","2","3","4","5","6","7","8","9","  +  ","  *  ","  /  ","  -  ","."]

/*keydown: evento que dispara quando o usuario preciona alguma tecla
usando esse evento no input de entradas, estamos verificando se a tecla que o 
usuario digitou(item) é valido com nosso array, usando o .key para informar que é uma tecla
e por fim acrescentando no valor do input a entrada da sua tecla e a returnando */
input.addEventListener('keydown',(entrada) => {
    entrada.preventDefault() //evitando o padrão//
    if(teclas_verificadas.includes(entrada.key)){
        input.value += entrada.key
        retun
    }

    //verificando se é um backspace usando a entrada da sua tecla e caso seja
    //estamos atribuindo ao valor do input, um corte no penoltimo digido digitado usando o slice no valor//
    if(entrada.key === 'Backspace'){
        input.value = input.value.slice(0,-1)
    }

    // se for enter, deve proseguir com o calculo//
    if(entrada.key === 'Enter'){
        calculate()
    }

    //c limpando//
    if(entrada.key === 'c'){
        input.value = input.value.slice(0,-1)
    }
})

//evento do sinal de igual//
igual.addEventListener('click',calculate)

//limpando o input//
b.addEventListener('click' , () => {
    input.value = input.value.slice(0,-1)
})

// calculando e gerando o erro//
function calculate(){
    result.value = "ERROR"
    result.classList.add('erro')
    result.value = eval(input.value)
    result.classList.remove('erro')
}




theme_switch.addEventListener('click' , () => {
    if(main.dataset.theme === "lith"){
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--font-color' , '#f1f5f9')
        root.style.setProperty('--start-color' , '#26834a')
        main.dataset.theme = "dark"
    }
    else{
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--font-color' , '#212529')
        main.dataset.theme = 'lith'
    }
})

cop.addEventListener('click', (ev) => {
    const button = ev.currentTarget
    if (button.innerText === "copy"){
        button.innerText = "copied!"
        button.classList.add('sucess')
        navigator.clipboard.writeText(result.value)
    } else{
        button.innerText = "copy"
        button.classList.remove("sucess")
    }
})

