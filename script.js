document.getElementById('add-product').addEventListener('click', () => {
    const data = {
        id: '1',
        name: 'Celular',
        price: 20
    };

    fetch('http://localhost:/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Produto adicionado com sucesso!');
        } else {
            console.error('Erro ao adicionar produto');
        }
    })
    .catch(error => {
        console.error('Erro ao adicionar produto:', error);
    });
});
