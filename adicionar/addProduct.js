export const addProduct = (formElements) => {
    console.log('Form is good', formElements);

    const id = 0;
    const category = 'Diversos';
    const description = formElements.description.value;
    const name = formElements.name.value;
    const price = formElements.price.value;

    const imgFile = formElements.addimg.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onloadend = () => {
        const image = reader.result;
        const newProduct = {
            id,
            name,
            price,
            category,
            description,
            image,
        };
        setStorage(newProduct);
    };

}

const setStorage = (newProduct) => {
    const prodList = JSON.parse(localStorage.getItem('products'));
    const newProdList = [newProduct, ...prodList];
    localStorage.setItem('products', JSON.stringify(newProdList));
}