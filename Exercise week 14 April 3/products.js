fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const product = products[0];
        console.log("ID:", product.id);
        console.log("Title:", product.title);
        console.log("Description:", product.description);
        console.log("Price:", product.price);
        console.log("Discount Percentage:", product.discountPercentage);
        console.log("Rating:", product.rating);
        console.log("Stock:", product.stock);
        console.log("Brand:", product.brand);
        console.log("Category:", product.category);
        console.log("Thumbnail:", product.thumbnail);
        console.log("Images:", product.images);
    })
    .catch(error => {
        console.error('Lỗi khi đọc file JSON:', error);
    });
