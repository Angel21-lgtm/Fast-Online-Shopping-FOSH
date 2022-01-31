const products = [
    {
        producto_name: "Frambuesas",
        description: "Paquete de frambuesas de 500gr",
        image: "https://picsum.photos/id/102/600/400",
        price: "100"
    },
    {
        producto_name: "Cobertor",
        description: "Cobertor calientito y uy suave para protegerse del frío",
        image: "https://picsum.photos/id/1025/600/400",
        price: "600"
    },
    {
        producto_name: "Cafetera",
        description: "Práctica cafetera para preparar un buen café Veracruzano",
        image: "https://picsum.photos/id/1060/600/400",
        price: "300"
    },
    {
        producto_name: "Fresas",
        description: "500gr de fresas frescas",
        image: "https://picsum.photos/id/1080/600/400",
        price: "150"
    },
    {
        producto_name: "Bicicleta",
        description: "Bonita bicicleta para salir a hacer ejercicio",
        image: "https://picsum.photos/id/146/600/400",
        price: "1200"
    },
    {
        producto_name: "Zapatos",
        description: "Lindos zapatos, para la novia, para la esposa...",
        image: "https://picsum.photos/id/21/600/400",
        price: "800"
    },
    {
        producto_name: "Miel de abeja natural",
        description: "1lt de miel natural",
        image: "https://picsum.photos/id/312/600/400",
        price: "120"
    },
    {
        producto_name: "Atrapasueños",
        description: "Atrapasueños para la decoración de la habitación del hogar",
        image: "https://picsum.photos/id/104/600/400",
        price: "50"
    }

];

const nodoLista = document.getElementById("lista-productos");
let productosSeleccionadosCarrito = [];

// DOMContentLoaded

document.addEventListener("DOMContentLoaded", (e) => {
    traerListaDeProductos(e)
});

nodoLista.addEventListener("click", (e) => agregarCarrito(e));


function traerListaDeProductos(event){

    let htmlFragment = "";

    products.forEach(item => {
        htmlFragment += `
        <article class="product-card">
            <img src=${item.image} alt="">
            <div class="producto-info">
                <h2>${item.producto_name}</h2>
                <p>${item.description}</p>
                <b>PRECIO:</b> $ <span>${item.price}</span>
                <button class="btn-agregar">Agregar al carrito</button>
            </div>
        </article>
        `;
    });

    nodoLista.innerHTML = htmlFragment;

}

function agregarCarrito(event){

    if(event.target.classList.contains("btn-agregar")){
        const nodoCard = event.target.parentElement;
        console.log(event.target.parentElement);

        const productoSeleccionado = {
            name : nodoCard.querySelector("h2").textContent,
            precio: nodoCard.querySelector("span").textContent,
        }

        productosSeleccionadosCarrito.push(productoSeleccionado);

        console.log(productosSeleccionadosCarrito);

        document.getElementById("compras-carrito").textContent = productosSeleccionadosCarrito.length;
    }
}