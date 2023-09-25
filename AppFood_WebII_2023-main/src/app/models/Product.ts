//importa os modulos do mongoose

import {model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({

	//define os campos das infomacoes do produto

	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imagePath: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	ingredients: {
		required: true,
		type:[{
			name: {
				type: String,
				required: true,
			},
			icon: {
				type: String,
				required: true,
			},
		}],
	},
	category: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Category',
	},
}));