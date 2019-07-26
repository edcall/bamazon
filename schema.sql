DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("computer", "electronics", 220.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("radio", "electronics", 30.10, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tv", "electronics", 500.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("nike", "shoes", 100.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("playstation", "electronics", 400.10, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("reebok", "shoes", 100.25, 75);

INSERT INTO products (product_name, department_name,  price, stock_quantity)
VALUES ("controller", "electronics", 29.50, 100);

INSERT INTO products (product_name, department_name,  price, stock_quantity)
VALUES ("necklace", "jewelry", 420.10, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ring", "jewelry", 200.25, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("watch", "jewelry", 299.25, 75);