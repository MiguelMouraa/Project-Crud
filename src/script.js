document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const productForm = document.getElementById('product-form');

    function displayProducts() {
        productList.innerHTML = '';
        const products = JSON.parse(localStorage.getItem('products')) || [];

        if (products.length > 0) {
            document.querySelector('.ProdAdd').style.display = 'block';
        } else {
            document.querySelector('.ProdAdd').style.display = 'none';
        }

        products.forEach((product, index) => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - R$ ${product.price}   `;

            const deleteImage = document.createElement('img');
            deleteImage.src = './assets/image/Lixeira.png';
            deleteImage.alt = 'Excluir';
            deleteImage.classList.add('delete-image');
            deleteImage.addEventListener('click', () => {
                products.splice(index, 1);
                localStorage.setItem('products', JSON.stringify(products));
                displayProducts();
            });

            li.appendChild(deleteImage);
            productList.appendChild(li);
        });
    }

    productForm.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;

        if (!name || !price) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const product = { name, price };
        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));

        productForm.reset();
        displayProducts();
    });

    displayProducts();
});
