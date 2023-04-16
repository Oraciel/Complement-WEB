$(document).ready(function() {
    const maxProducts = 100;
    const generatedProducts = [];
    const productTemplate = $('.product-template');

    function generateRandomId() {
        return Math.floor(Math.random() * maxProducts) + 1;
    }

    function generateProduct(productId) {
        if (generatedProducts.includes(productId)) {
            return;
        }

        $.ajax({
            url: `https://dummyjson.com/products/${productId}`,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                const newProduct = productTemplate.clone();
                newProduct.removeClass('product-template');
                newProduct.addClass(`product-${productId}`);
                newProduct.find('.img').attr('src', response.img);
                newProduct.find('.img').attr('alt', response.title);
                newProduct.find('.title').html(response.title);
                newProduct.find('.brand').html(`(${response.brand})`);
                newProduct.find('.price').html(`${response.price} €`);
                newProduct.find('.old-price').html(`${response.oldPrice} €`);
                newProduct.find('.stock').html(`${response.stock} disponibles`);
                $('body').append(newProduct);
                generatedProducts.push(productId);
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error('Une erreur s\'est produite lors de la requête AJAX : ' + errorThrown);
            }
        });
    }

    for (let i = 1; i <= 3; i++) {
        generateProduct(i);
    }

    $('#product-generation').on('click', function() {
        if (generatedProducts.length >= maxProducts) {
            $(this).prop('disabled', true);
            return;
        }

        let newProductId = generateRandomId();
        while (generatedProducts.includes(newProductId)) {
            newProductId = generateRandomId();
        }

        generateProduct(newProductId);
    });
});
