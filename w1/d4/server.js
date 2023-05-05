const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

let pets = [
  { id: 1, name: 'couragethecowardly', age: 1, type: 'dog' },
  { id: 2, name: 'Meow', age: 2, type: 'cat' },
  { id: 3, name: 'Charizard', age: 3, type: 'Pokemon' },
];

app.get('/', (req, res) => {
  res.render('pets', { pets });
});

// create a similar flow on your own

// end points to edit pets

app.get('/edit/:id', (req, res) => {
  const id = +req.params.id;
  const pet = pets.find((pet) => pet.id === id);
  res.render('editPet', { pet });
});

app.post('/edit/:id', (req, res) => {
  const updatedPet = { ...req.body };
  const id = +req.params.id;
  pets = pets.map((pet) => {
    if (pet.id === id) {
      return { ...pet, ...updatedPet };
    }
    return pet;
  });

  res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
  const id = +req.params.id;
  pets = pets.filter((pet) => pet.id != id);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is running');
});
