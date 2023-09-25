// importa os modulos
import path from 'node:path'; 
import express from 'express'; 
import mongoose from 'mongoose'; 

import { router } from './router'; 

// Conecta no mongo pelo localhost
mongoose.connect('mongodb://localhost:27017')
	.then(() => {

		// Cria uma constante no expres
		const app = express();

		// Define a porta
		const port = 3000;

		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

		app.use(express.json());

		app.use(router);

		// inicia o servidor mna porta do localhost
		app.listen(port, () => {
			console.log(`🚗Server is running on http://localhost:${port}`);
		});
	})
	.catch(() => console.log('Erro ao conectar no MongoDB')); // IMprime a mensagem se der erro no mongo
