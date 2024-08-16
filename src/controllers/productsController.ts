import { Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../services/productsService";

// GET ALL PRODUCTS
export async function index(response: Response) {
  try {
    const results = await getProducts();

    response.json({ data: results });
    // response.send("welcome")
  } catch (error: any) {
    console.log(`Error querying database: ${error}`);

    response
      .status(error.statusCode ?? 500)
      .json({ data: { error: `${error.message}` } });
  }
}

// GET A PRODUCT
export async function show(request: Request, response: Response) {
  try {
    const results = await getProduct(request.params.id);

    response.json({ data: results });
  } catch (error: any) {
    console.log(`Error querying database: ${error}`);

    response
      .status(error.statusCode ?? 500)
      .json({ data: { error: `${error.message}` } });
  }
}

// SAVE A PRODUCT
export async function store(request: Request, response: Response) {
  try {
    const results = await createProduct(request.body);

    response.json({ data: results });
  } catch (error: any) {
    console.log(`Error querying database: ${error}`);

    response
      .status(error.statusCode ?? 500)
      .json({ data: { error: `${error.message}` } });
  }
}

// UPDATE A PRODUCT
export async function update(request: Request, response: Response) {
  try {
    const results = await updateProduct(request.params.id, request.body);

    response.json({ data: results });
  } catch (error: any) {
    console.log(`Error querying database: ${error}`);

    response
      .status(error.statusCode ?? 500)
      .json({ data: { error: `${error.message}` } });
  }
}

// REMOVE A PRODUCT
export async function remove(request: Request, response: Response) {
  try {
    const results = await deleteProduct(request.params.id);

    response.json({ data: results });
  } catch (error: any) {
    console.log(`Error querying database: ${error}`);

    response
      .status(error.statusCode ?? 500)
      .json({ data: { error: `${error.message}` } });
  }
}
