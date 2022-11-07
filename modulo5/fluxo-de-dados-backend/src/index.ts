import express, { Request, Response } from "express"
import cors from 'cors'
import { products } from "./data";
import { v4 as uuidv4 } from 'uuid';

const { randomUUID } = require('crypto');

const app = express()

app.use(express.json())

app.use(cors())

app.put('/products', (req: Request, res: Response) => {
    const { name, price } = req.body
    try {

        if (!price) {
            const error = new Error("Enter the price of the product.")
            error.name = 'priceNotFound';
            throw error;
        }

        if (!name) {
            const error = new Error("Enter the name of the product.")
            error.name = 'nameNotFound';
            throw error;
        }

        products.forEach((product) => {
            if (product.name === name) {
                const error = new Error("Product already in the list.")
                error.name = 'productInTheList';
                throw error;
            }
        })

        products.push({
            id: randomUUID(),
            name: name,
            price: price

        })

        res.status(201).send(products)

    } catch (error: any) {
        switch (error.name) {
            case "priceNotFound":
                res.status(422).send(error.message);
                break;
            case "nameNotFound":
                res.status(422).send(error.message);
                break;
            case "productInTheList":
                res.status(409).send(error.message);
                break;
            default:
                res.status(500).send(error.message);

        }

    }

})

app.get('/products', (req: Request, res: Response) => {
    res.status(200).send(products)
})

app.put('/products/:name', (req: Request, res: Response) => {
    const name = req.params.name
    const price = req.body.price
    try {

        if (!price) {
            const error = new Error("Enter the price of the product.")
            error.name = 'priceNotFound';
            throw error;
        }

        if (!name) {
            const error = new Error("Enter the name of the product.")
            error.name = 'nameNotFound';
            throw error;
        }

        const found = products.findIndex(product =>  product.name.toLowerCase() == name.toLowerCase() )

        if (found === -1) {
            const error = new Error("Product not found.")
            error.name = 'producNotFound';
            throw error;
        }

        products[found].price = price

        res.status(201).send(products)

    } catch (error: any) {
        switch (error.name) {
            case "priceNotFound":
                res.status(422).send(error.message);
                break;
            case "nameNotFound":
                res.status(422).send(error.message);
                break;
            case "productNotFound":
                res.status(404).send(error.message);
                break;
            default:
                res.status(500).send(error.message);

        }

    }

})

app.delete('/products/:name', (req: Request, res: Response) => {
    const name = req.params.name
    try {

        if (!name) {
            const error = new Error("Enter the name of the product.")
            error.name = 'nameNotFound';
            throw error;
        }
        
        const found = products.findIndex(product =>  product.name.toLowerCase() == name.toLowerCase() )

        if (found === -1) {
            const error = new Error("Product not found.")
            error.name = 'producNotFound';
            throw error;
        }

        products.splice(found, 1)

        res.status(201).send(products)

    } catch (error: any) {
        switch (error.name) {
            case "nameNotFound":
                res.status(422).send(error.message);
                break;
            case "productNotFound":
                res.status(404).send(error.message);
                break;
            default:
                res.status(500).send(error.message);

        }

    }

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});