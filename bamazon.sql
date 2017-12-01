DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;
CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
    product_name VARCHAR
    (100),
    department_name VARCHAR
    (100),
    price DECIMAL
    (10, 4),
    stock_quantity INT
    (10),
    PRIMARY KEY
    (item_id)
);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Amazon Fire Stick", "Amazon Devices", 39.99, 50),
        ("Bose Headphones", "Electronics", 199.99, 8),
        ("Sensodyne Toothpaste 2 Pack", "Health & Personal Care", 16.43, 83),
        ("Science Diet Dry Chicken Cat Food 7lb bag", "Pet Supplies", 18.03, 25),
        ("Gilette Fusion ProShield Chill Razor 8 Count Refill", "Beauty", 30.43, 10823),
        ("Old Spice Pure Sport Deodorant Twin Pack", "Health & Personal Care", 3.97, 4920),
        ("Playstation 4 Pro 1TB", "Video Games", 399.00, 82644),
        ("Suavecito Pomade Firme Hold 32 oz", "Beauty", 69.95, 492),
        ("Samsung Electronics 65-Inch 4K Ultra HD Smart QLED TV", "Electronics", 2497.99, 33),
        ("Samsung SSD 960 PRO NVMe M.2 1TB", "Electronics", 793.88, 729);
    SELECT *
    FROM products;