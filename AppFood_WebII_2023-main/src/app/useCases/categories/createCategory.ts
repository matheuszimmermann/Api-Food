import { Request, Response } from 'express';
import { Category } from '../../models/Category';

//cria a funcao da categoria, tendo o icone e nome, guardando em categoria
export async function createCategory(req: Request, res: Response) {
	try {
		//res.send('Ok post category');
		const {icon, name} = req.body;
		const category = await Category.create({icon, name});
		res.status(201).json(category);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}