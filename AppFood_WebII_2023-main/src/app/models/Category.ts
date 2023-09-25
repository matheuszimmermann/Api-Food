// Importe os modulos do Mongoose
import { model, Schema } from 'mongoose';


export const Category = model('Category', new Schema({

	// Define os campos como String
	name: {
		type: String,
		required: true,
	},
	
	icon: {
		type: String,
		required: true,
	}
}));
