SELECT users.email FROM purchases
LEFT JOIN products ON products.id = purchases.product
LEFT JOIN users ON users.id = purchases.buyer
WHERE products.title = 'iPhone 14'
AND count >= 1
GROUP BY users.email;
