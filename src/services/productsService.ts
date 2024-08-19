import { Request } from "express";
import { pool } from "../../config/database";

// GET ALL PRODUCTS
export async function getProducts() {
  const products = await pool.query("SELECT * FROM products");

  return products.rows;
}

// GET A PRODUCT
export async function getProduct(identifier: string) {
  const products = await pool.query("SELECT * FROM products WHERE id = $1", [
    identifier,
  ]);

  return products.rows[0];
}

// CREATE A PRODUCT
export async function createProduct(productData: object) {
  const newProduct = await pool.query(
    "INSERT INTO products (productName) VALUES($1) RETURNING *",
    [productData]
  );

  return newProduct.rows[0];
}

// UPDATE A PRODUCT
export async function updateProduct(identifier: string, data: object) {
  const products = await pool.query(
    "UPDATE product SET productData = $1 WHEREid = $2",
    [data, identifier]
  );

  return { message: "Product updated successfully" };
}

// DELETE A PRODUCT
export async function deleteProduct(identifier: string) {
  const products = await pool.query("SELECT FROM products WHERE id = $1", [
    identifier,
  ]);

  return { message: "Product deleted successfully" };
}
