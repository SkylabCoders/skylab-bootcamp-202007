function fn(title, promo) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <h1>${promo}</h1>
</body>
</html>`;
}
module.exports = fn;

//La exportamos sin invocar porque la invocaremos en el otro archivo donde lo requeriremos, en el requireTemplateGenerator
