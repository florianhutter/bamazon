DROP DATABASE IF EXISTS products_db;

CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT,
	product_name VARCHAR(30) NULL,
    department_name VARCHAR(30) NULL,
    price DECIMAL (10,2) NULL,
    stock_quantity INT(10) NULL,
	PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity, item_id) VALUES ('iPhone', 'Electronics', '999', '32', 1);
INSERT INTO products (product_name, department_name, price, stock_quantity, item_id) VALUES ('DJI Spark', 'Electronics', '499', '42', 2);
INSERT INTO products (product_name, department_name, price, stock_quantity, item_id) VALUES ('Superdry T-shirt', 'Clothes', '43', '73', 3);
INSERT INTO products (product_name, department_name, price, stock_quantity, item_id) VALUES ('Miracle Bamboo Bra', 'Clothes', '19.99', '72', 4);
INSERT INTO products (product_name, department_name, price, stock_quantity, item_id) VALUES ('Dining Table', 'Furniture', '934', '15', 5);
INSERT INTO products (product_name, department_name, price, stock_quantity, item_id) VALUES ('Dining Chairs', 'Furniture', '199', '35', 6);
INSERT INTO products (product_name, department_name, price, stock_quantity, item_id) VALUES ('Toothpaste', 'Beauty', '2.99', '124', 7);
INSERT INTO products (product_name, department_name, price, stock_quantity, item_id) VALUES ('Anti Aging Cream', 'Beauty', '32', '73', 8);
INSERT INTO products (product_name, department_name, price, stock_quantity, item_id) VALUES ('Teddy Bear', 'Toys', '16', '25', 9);


SELECT * FROM products; 
