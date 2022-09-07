const body = document.querySelector('body')

let tagMain  = document.createElement('main')
let ProductDetails = document.createElement('ul')
let divItem = document.createElement('div')
let tagParagrafoItem = document.createElement('p')
tagParagrafoItem.innerText = `Item`
let tagParagrafoPreco = document.createElement('p')
tagParagrafoPreco.innerText = `Valor`
divItem.append(tagParagrafoItem, tagParagrafoPreco)
tagMain.append(divItem)

function renderizarCar(produtos){
    for (let i=0; i < produtos.length; i++){ 
        let tagLi    = document.createElement('li')
        let tagPItem = document.createElement('p')
        let tagPrice = document.createElement('p')

        tagPItem.innerText = `${produtos[i].name}`
        tagPrice.innerText = `R$ ${produtos[i].price}`

        tagLi.append(tagPItem, tagPrice)
        ProductDetails.append(tagLi)
        tagMain.append(ProductDetails)
        body.appendChild(tagMain)   
    }
}

renderizarCar(products)
let somaTotal       = 0;
let tagSection      = document.createElement('section')
let ButtonEnd       = document.createElement('button')

ButtonEnd.innerText = `Finalizar pedido`

tagSection.append(ButtonEnd) 
body.appendChild(tagSection)

let divSomaTotal       = document.createElement('div')
let tagParagrafo       = document.createElement('p')
tagParagrafo.innerText = `Total`
let precoTotal         = document.createElement('p')
divSomaTotal.append(tagParagrafo, precoTotal)
tagMain.append(divSomaTotal)

function soma(){
    for (let i = 0; i < products.length; i++) {
        somaTotal += products[i].price  
    }
    precoTotal.innerText = `${somaTotal}`
}
soma();
