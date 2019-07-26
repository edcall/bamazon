DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT (4) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("2021", "computer", "electronics", 220.50, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("2030", "radio", "electronics", 30.10, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3040", "tv", "electronics", 500.25, 75);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("4567", "nike", "shoes", 100.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("5876", "playstation", "electronics", 400.10, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("2134", "reebok", "shoes", 100.25, 75);

INSERT INTO products (item_id, product_name, department_name,  price, stock_quantity)
VALUES ("8989", "controller", "electronics", 29.50, 100);

INSERT INTO products (item_id, product_name, department_name,  price, stock_quantity)
VALUES ("9876", "necklace", "jewelry", 420.10, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("5467", "ring", "jewelry", 200.25, 75);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("2345", "watch", "jewelry", 299.25, 75);