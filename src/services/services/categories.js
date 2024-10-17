//Categoria

import { categoriaActiva } from "../../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoryIn) => {
    const product = handleGetProductLocalStorage();
    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(product);
            break;
        case "Todo":
            handleRenderList(product);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = product.filter((el) => el.categories == categoryIn);
            handleRenderList(result);
        default:
            break;
        case "MenorPrecio":
            const resultPrecioMenor = product.sort((a, b) => a.precio - b.precio)
            handleRenderList(resultPrecioMenor);
            break;
        case "MayorPrecio":
            const resultPrecioMayor = product.sort((a, b) => b.precio - a.precio)
            handleRenderList(resultPrecioMayor);
            break;
    }
}



//Render de la vista categoria

export const renderCategories = () => {
    //Tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");
    //Creamos esos elementos dentro de la lista
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="MayorPrecio">MayorPrecio</li>
    <li id="MenorPrecio">MenorPrecio</li>
    `;
    //Añadimos dinamicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElements) => {
        liElements.addEventListener('click', () => {
            handleClick(liElements);
        });
    });
    //Verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el) => {
            if (el.classList.contains('liActive')) {
                el.classList.remove('liActive');
            } else {
                if (elemento === el) {
                    el.classList.add('liActive');
                }
            }
        });
    };
};