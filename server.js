import app from './src/app.js';

const port = process.env.PORT || 3000; //Essa varivael simplesmente grava um nomero, não faz diferença alguma.


app.listen(port, () => {                                    //Aqui estamos usando o recurso listen do expressa
    console.log(`Servidor escutando na porta ${port}`);
})


//A unica função deste arquivo é criar o nosso servidor local
//Tudo aquilo que ele faz é importado do app.jj