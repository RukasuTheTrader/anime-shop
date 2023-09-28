document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const productId = e.target.dataset.productId;
            alert('Produkt ' + productId + ' wurde zum Warenkorb hinzugefügt!');
        });
    });
});
