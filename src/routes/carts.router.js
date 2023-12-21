import { Router } from "express";
import { CartManager } from "../dao/managerFileS/cartManager.js";
import { CartManagerDB } from "../dao/managerDB/cartsManagerDB.js";

const routerCart = Router();
const cartManager = new CartManager();

const cartManagerBD= new CartManagerDB();


routerCart.get("/", async (req, res) => {
  try {
   const carts= await cartManagerBD.findAllCart()
   res.status(200).json({ message: "Carts", carts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routerCart.get("/:idCart", async (req, res) => {
  const {idCart} = req.params;
  try {
   const cart= await cartManagerBD.findCartById(idCart);
  res.status(200).json({ message: "Cart by id:", cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routerCart.post("/", async (req, res) => { 
   try {
   const createCart= await cartManagerBD.createOneCart();
   res.status(200).json({ message: "Cart created", cart:createCart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routerCart.post("/:idCart/products/:idProduct", async (req, res) => { 
  const {idCar, idProduct} = req.params;
  try {
   const productAdded= await cartManagerBD.addProductToCart(idCar, idProduct);
   res.status(200).json({ message: "PRODUCTO AGREGADO", product:productAdded });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { routerCart };