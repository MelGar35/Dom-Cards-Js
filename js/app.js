
//ejemplo practico

class Producto {
    constructor(id, producto, imgSrc, descripcion, precio) {
        this.id = id
        this.producto = producto
        this.imgSrc = imgSrc
        this.descripcion = descripcion
        this.precio = precio
    }
}

    const producto1 = new Producto (355, 'Porta Sahumerio Hanuman', 'linkimg','De ceramica, pintado a mano', 600)
    const producto2 = new Producto (356, 'El Tarot como Llave','linkImg','Autor: Dalia Walker', 4800)
    const producto3 = new Producto (357, 'Mazo Tarot Viceversa','linkimg', 'Autora:Lunaea Weatherstone', 2500)
    const producto4 = new Producto (358, 'Oraculo del Gato','linkImg', 'Autora: La Watson', 1200)
    const producto5 = new Producto (359, 'Sahumo Akasha','linkImg','Romero, Lavanda, Canela y palo santo', 600)

const productos = [producto1, producto2, producto3, producto4, producto5]

const cardContainerQuery = document.querySelector("#cardContainer")

productos.forEach ((producto)=> {
    const nuevoDiv = document.createElement("div")
    nuevoDiv.innerHTML= `
    <h3 class="cardTitle">${producto.producto}</h3>
    <img src="${producto.imgSrc}" class="cardImg">
    <p class="cardDesc">${producto.descripcion}</p>
    <span class="cardPrice">$${producto.precio}</span>
    <button class="butonCTA">Agregar al carrito</button>`
    nuevoDiv.className = "card"
    console.log(nuevoDiv)
    cardContainerQuery.append(nuevoDiv)
})

