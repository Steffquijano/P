document.addEventListener('DOMContentLoaded', function () {
    // Obtiene los parámetros de búsqueda de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    // Función para realizar la búsqueda (simulada)
    function searchProducts(query) {
        // Simula una lista de productos con descripciones, precios, imágenes y botón de compra
        const products = [
            {
                name: 'Plywood Pino Hondureño',
                description: 'Grosores de: 3/16 1/4 3/8 1/2 3/4',
                price: '$20.00',
                image: '../img/1construccion.jpg',
                link: '../html/productosconstrucción.html',
            },
            {
                name: 'Plywood Banack Chapin',
                description: 'Grosores de: 3/16 1/4',
                price: '$15.00',
                image: '../img/2construccion.jpg',
                link: '../html/productosconstrucción.html',
            },
            {
                name: 'Tablero Aglomerado (Durapanel)',
                description: 'Grosores: 9mm, 12mm, 15mm',
                price: '$16.85',
                image: '../img/3construccion.jpg',
                link: '../html/productosconstrucción.html',
                
            },

            {
                name: 'Plywood Pino chileno',
                description: 'Madera sólida',
                price: '$25.00',
                image: '../img/4construccion.jpg',
                link: '../html/productosconstrucción.html',
            },
            {
                name: 'Slatwall',
                description: 'Fibran ranurado con dimenciones 2x8 Pies',
                price: '$17.00',
                image: '../img/5construccion.jpg',
                link: '../html/productosconstrucción.html',
                
            },
            {
                name: 'MDF (fibran)',
                description: 'Grosores de: 3mm, 6mm, 9mm, 12mm, 15mm, 18mm y de 25mm',
                price: '$23.25',
                image: '../img/6construccion.jpg',
                link: '../html/productosconstrucción.html',
            },
            {
                name: 'Laminados',
                description: 'Variedad de colores sólidos y colores maderas',
                price: '$27.00',
                image: '../img/7construccion.jpg',
                link: '../html/productosconstrucción.html',
                
            },     {
                name: 'Metal deploye',
                description: 'Dimensiones: 2x8 Pies Grosores de: 2mm, 4mm, 6mm',
                price: '$15.00',
                image: '../img/8construccion.jpg',
                link: '../html/productosconstrucción.html',
            },
            {
                name: 'Madera pino guatemalteco',
                description: '',
                price: '$24.00',
                image: '../img/maderas rusticas.1.1.jpg',
                link: '../html/maderasrusticas.html',
                
            },     {
                name: 'Madera pino hondureño',
                description: '',
                price: '$15.00',
                image: '../img/maderas rusticas1.2.jpg',
                link: '../html/maderasrusticas.html',
            },
            {
                name: 'Madera de Pino secado al horno',
                description: '',
                price: '$19.70',
                image: '../img/maderas rusticas.1.3.jpg',
                link: '../html/maderasrusticas.html',
                
            },     {
                name: 'Chapa Bird P/ gaveta',
                description: '',
                price: '$20.00',
                image: '../img/carpinteria2.jpg',
                link: '../html/productoscarpinteria.html',
            },
            {
                name: 'Bisagras latonadas 3x3',
                description: '',
                price: '$19.00',
                image: '../img/carpinteria2.1.jpg',
                link: '../html/productoscarpinteria.html',
                
            },     {
                name: 'Chapa para gaveta soprano',
                description: '',
                price: '$21.40',
                image: '../img/carpinteria2.2.jpg',
                link: '../html/productoscarpinteria.html',
            },
            {
                name: 'Chapa push P/puerta corrediza',
                description: '',
                price: '$13.00',
                image: '../img/carpinteria2.3.jpg',
                link: '../html/productoscarpinteria.html',
                
            },     {
                name: 'Jaladeras de barra',
                description: '',
                price: '$12.00',
                image: '../img/carpinteria2.4.jpg',
                link: '../html/productoscarpinteria.html',
            },
            {
                name: 'Resbalón blanco',
                description: '',
                price: '$16.25',
                image: '../img/carpinteria2.5.jpg',
                link: '../html/productoscarpinteria.html',
                
            },     {
                name: 'Riel de extensión',
                description: '',
                price: '$20.00',
                image: '../img/carpinteria2.6.jpg',
                link: '../html/productoscarpinteria.html',
            },
            {
                name: 'Tornillos para tabla',
                description: '',
                price: '$15.00',
                image: '../img/carpinteria2.7.jpg',
                link: '../html/productoscarpinteria.html',
                
            },    
             {
                name: 'Masillas Gris',
                description: '',
                price: '$14.00',
                image: '../img2/recubrimientos3.1.jpg',
                link: '../html/recubrimientos.html',
            },
            {
                name: 'Masilla Roj',
                description: '',
                price: '$13.50',
                image: '../img2/recubrimientos3.2.jpg',
                link: '../html/recubrimientos.html',
                
            },
            {
                name: 'Base Gris',
                description: '',
                price: '$11.00',
                image: '../img2/recubrimientos3.3.jpg',
                link: '../html/recubrimientos.html',
            },
            {
                name: 'Nitrolac Marrón',
                description: '',
                price: '$9.75',
                image: '../img2/recubrimientos3.4.jpg',
                link: '../html/recubrimientos.html',
                
            },
            {
                name: 'Base Automotriz Blanca',
                description: '',
                price: '$10.70',
                image: '../img2/recubrimientos3.5.jpg',
                link: '../html/recubrimientos.html',
            },
            {
                name: 'Nitrolac Rojo Permanente',
                description: '',
                price: '$8.90',
                image: '../img2/recubrimientos3.6.jpg',
                link: '../html/recubrimientos.html',
                
            },
            {
                name: 'Pegamento de contacto',
                description: '',
                price: '$12.00',
                image: '../img2/pegamentos4.1.jpg',
                link: '../html/pegamentos.html',
            },
            {
                name: 'Galon Speed cola blanco',
                description: '',
                price: '$14.75',
                image: '../img2/pegamentos4.2.jpg',
                link: '../html/pegamentos.html',
                
            },
            {
                name: '950 Pegamento blanco',
                description: '',
                price: '$10.85',
                image: '../img2/pegamentos4.3.jpg',
                link: '../html/pegamentos.html',
            },
            {
                name: 'Preservante para madera',
                description: '',
                price: '$16.00',
                image: '../img2/pegamentos4.4.jpg',
                link: '../html/pegamentos.html',
                
            },
            {
                name: 'Clavos de acero',
                description: '',
                price: '$8.00',
                image: '../img/clavos5.1.jpg',
                link: '../html/clavos.html',
            },
            {
                name: 'Clavos con cabeza',
                description: '',
                price: '$6.85',
                image: '../img/clavos5.2.jpg',
                link: '../html/clavos.html',
                
            },
            {
                name: 'Clavos para lámina',
                description: '',
                price: '$5.25',
                image: '../img/clavos5.3.jpg',
                link: '../html/clavos.html',
            },
            {
                name: 'Clavos punta paris',
                description: '',
                price: '$5.00',
                image: '../img/clavos5.4.jpg',
                link: '../html/clavos.html',
                
            },
           
            
           
        ];

        // Filtra los productos que coinciden con la búsqueda
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );

        // Limpia los resultados anteriores
        const searchResults = document.getElementById('search-results');
        searchResults.innerHTML = '';

        // Muestra los resultados
        filteredProducts.forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('product-item');

            // Crea un enlace para redirigir a la página de compra
            const productLink = document.createElement('a');
            productLink.href = product.link;

            // Crea elementos para mostrar la información del producto
            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;

            const productPrice = document.createElement('p');
            productPrice.textContent = product.price;

            const buyButton = document.createElement('button');
            buyButton.textContent = 'Comprar';

            // Agrega elementos al enlace
            productLink.appendChild(productImage);
            productLink.appendChild(productName);
            productLink.appendChild(productDescription);
            productLink.appendChild(productPrice);
            productLink.appendChild(buyButton);

            // Agrega el enlace al resultado
            resultItem.appendChild(productLink);

            searchResults.appendChild(resultItem);
        });
    }

    // Llama a la función de búsqueda con el parámetro de consulta
    searchProducts(query);
});
