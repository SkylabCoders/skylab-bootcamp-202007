function get() {
	const put = ((req, res) => {
		// Necesitamos:
		// Obtener el héroe
		const { hero } = req;
		if (hero) {
			// Si el heroe existe modificamos la propiedad nombre con el que nos viene por el body
			// eslint-disable-next-line no-param-reassign
			hero.name = req.body.name;
			hero.save((err) => {
				if (err) {
					res.send(err);
				}
				res.json(hero);
			});
		}
		// Obtener los nuevos valores
		// Guardar los valores actualizados
		// req trae el hero, hay una propiedad .hero
	})
		// el put actualiza un elemento ya existente en la db, el patch hace lo mismo pero creando uno nuevo, borra uno y crea otro, el _id canviaria
		.patch((req, res) => {
			const { hero } = req;
			if (hero) {
				Object.entries(req.body).forEach((item) => {
					// Object.entries nos da el key de la pos 0 el obj y el 1 el valor
					const key = item[0];
					const value = item[1];
					hero[key] = value;
				});
				hero.save((err) => {
					if (err) {
						res.send(err);
					}
					res.json(hero);
				});
			}
			// si viene _id lo elimino del objeto
			/* Buscamos el objeto
        si viene el _id, lo elimino del objeto
        por cada propiedad del body, actualizo el modelo
        guardo el modelo
        respondo con un json */
		})
		.delete((req, res) => {
			const { hero } = req;
			if (hero) {
				hero.remove((err) => {
					if (err) {
						res.send(err);
					}
					res.sendStatus(204);
				});
			}
		})
		.get((req, res) => {
			return res.json(req.hero);
		});
	return heroRouter;
}

module.exports = controller();
