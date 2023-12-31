import { Request, Response } from 'express';
import { Order } from '../../models/Order';

//cria a funcao createOrder
export async function createOrder(req: Request, res: Response) {
	try {
		const {table, products} = req.body;

		const order = await Order.create({ table, products }); //tem a tabela e os produtos
		res.status(201).json(order);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}