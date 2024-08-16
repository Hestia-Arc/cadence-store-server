import { Response } from "express";

// GET ALL PRODUCTS IN CART
export async function index(response: Response) {
    try {
    //   const results = await service.registerUser(request.body);
  
    //   response.json({ data: results });
    response.send("welcome")
    } catch (error) {
      console.log(`Error querying database: ${error}`);
  
    //   response
    //     .status(error.statusCode ?? 500)
    //     .json({ data: { error: `${error.message}` } });
    }
  }