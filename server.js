import app from './src/app.js';

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
})


//A unica função deste arquivo é criar o nosso servidor local
//Tudo aquilo que ele faz é importado do app.js 