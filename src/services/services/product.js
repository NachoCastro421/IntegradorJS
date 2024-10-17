/*-- product --*/
import Swal from "sweetalert2";
import { productoActivo } from "../../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";






//guardar

//Funcion de guardar
export const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("nombre").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categories = document.getElementById("categoria").value;
    let object = null;

    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,

        };
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
        };
    }
    Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Producto guardado correctamente",
        showConfirmButton: false,
        timer: 1500
    });


    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
};


//Eliminar elemento
export const handelDeleteProduct = () => {

    Swal.fire({
        title: "Estas seguro de eliminar?",
        text: "Una vez borrado no podras volver atras",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si,eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            const product = handleGetProductLocalStorage();
            const result = product.filter((el) => el.id !== productoActivo.id);
            localStorage.setItem("products", JSON.stringify(result));

            const newProduct = handleGetProductLocalStorage();
            handleRenderList(newProduct);
            closeModal();
            Swal.fire({
                icon: "success",
                title: "Eliminado",
                text: "Producto borrado con exito",
                showConfirmButton: false,
                timer: 1500
            });

        } else {
            closeModal();
        }
    });


};