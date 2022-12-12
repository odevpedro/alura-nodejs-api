import express from "express";

const app = express();

const livros = [
  {
    "name": "The Catcher in the Rye",
    "value": 12.99
  },
  {
    "name": "To Kill a Mockingbird",
    "value": 15.99
  },
  {
    "name": "The Great Gatsby",
    "value": 14.99
  },
  {
    "name": "One Hundred Years of Solitude",
    "value": 13.99
  },
  {
    "name": "Moby-Dick",
    "value": 11.99
  },
  {
    "name": "Pride and Prejudice",
    "value": 10.99
  },
  {
    "name": "The Brothers Karamazov",
    "value": 16.99
  },
  {
    "name": "War and Peace",
    "value": 17.99
  }
]



//Requisição get
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
  }) 


  app.get('/livros', (req, res) => {
    res.status(200).json(livros)

  })

  export default app