//Local Storage

export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else {
        return [];
    }

};
//Guardar en Local Storage

//recibir un producto
export const setInLocalStorage = (productIn) => {
    if (productIn) {
        //traer los elementos
        let productInLocal = handleGetProductLocalStorage();

        const existingIndex = productInLocal.findIndex((productInLocal) =>
            productInLocal.id === productIn.id
        );
        //verificar si el elemento existe
        if (existingIndex !== -1) {
            //si existe se reemplaza
            productInLocal[existingIndex] = productIn;
        } else {
            //sino se agrega
            productInLocal.push(productIn);
        }
        //Setear nuevo array
        localStorage.setItem("products", JSON.stringify(productInLocal));

    };


};