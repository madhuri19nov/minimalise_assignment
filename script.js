// script.js

function showQuickView(productId) {
    const products = {
        'header-product': {
            title: 'Header Product',
            image: 'https://res.cloudinary.com/dvi2paahl/image/upload/v1719119327/Frame_7_gwk0lw.png',
            description: 'Description of the header product goes here.',
            button: "Quick View"

        },
        'product1': {
            title: 'Raju Rassibomb',
            image: 'https://res.cloudinary.com/dvi2paahl/image/upload/v1719119327/Frame_7_gwk0lw.png',
            description: 'This product packs an extra punch, thanks to the literal blood, sweate, tears of young boy.',
            content:"Product Contents: ",
            button:'Choose Now'
        },
        'product2': {
            title: 'Ladiyon ki Rani Chani',
            image: 'https://res.cloudinary.com/dvi2paahl/image/upload/v1719119327/Frame_7_gwk0lw.png',
            description: 'This is the description for Ladiyon ki Rani Chani.',
            content: "Product Contents:",
            button:'Choose Now'        }
    };

    const product = products[productId];
    if (product) {
        document.getElementById('modal-title').textContent = product.title;
        document.getElementById('modal-image').src = product.image;
        document.getElementById('modal-description').textContent = product.description;
        document.getElementById('modal-content').textContent = product.content;
        document.getElementById('modal-button').textContent = product.button
        document.getElementById('quick-view-modal').style.display = 'block';
    }
}

function closeQuickView() {
    document.getElementById('quick-view-modal').style.display = 'none';
}
