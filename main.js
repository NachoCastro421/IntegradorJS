import { renderCategories } from "./src/services/services/categories";
import { handleGetProductsToStore } from "./src/services/views/store";
import './style.css';
import { openModal } from "./src/services/views/modal";
import { handleSearchProductByName } from "./src/services/services/searchBar";

//Aplicacion
export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
};

handleGetProductsToStore();
renderCategories();

//HEADER
const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener('click', () => {
    openModal();
});

//buttonSearch
const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener('click', () => {
    handleSearchProductByName();
});






