import { Response } from "express";

// REGISTER A USER
export async function register(response: Response) {
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

  