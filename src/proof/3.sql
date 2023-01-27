SELECT purchases.id purchase_id, products.title product_name, SUM(count) count, users.email buyer_email FROM purchases
LEFT JOIN products ON products.id = purchases.product
LEFT JOIN users ON users.id = purchases.buyer
WHERE users.star = true
GROUP BY purchases.id, products.title, users.email;
