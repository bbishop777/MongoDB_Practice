use mongo_practice;

db.movies.insert(
  {title : "Fight Club",
  writer : "Chuck Palahniuk",
  year : 1999,
  actors : [
  "Brad Pitt",
  "Edward Norton"
  ]
});



db.movies.insert(
  {title : "Pulp Fiction",
writer : "Quentin Tarantino",
year : 1994,
actors : [
  "John Travolta",
  "Uma Thurman"
]
});

db.movies.insert(
  {title : "Inglories Basterds",
writer : "Quentin Tarantino",
year : 2009,
actors : [
  "Brad Pitt",
  "Diane Kruger",
  "Eli Roth"
]
});

db.movies.insert(
  {title : "The Hobbit: An Unexpected Journey",
  writer : "J.R.R. Tolkein",
  year : 2012,
  franchise : "The Hobbit"
});

db.movies.insert(
  {title : "The Hobbit: The Desolation of Smaug",
  writer : "J.R.R. Tolkein",
  year : 2013,
  franchise : "The Hobbit"
});

db.movies.insert(
  {title : "The Hobbit: The Battle of the Five Armies",
  writer : "J.R.R. Tolkein",
  year : 2012,
  franchise : "The Hobbit",
  synopsis : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
});

db.movies.insert(
  {title : "Pee Wee Herman's Big Adventure",
  });

db.movies.insert(
  {title : "Avatar",
  });

//queries:
db.movies.find();

db.movies.find({ writer : "Quentin Tarantino"});

db.movies.find({ actors : "Brad Pitt" });

db.movies.find({ franchise : "The Hobbit" });

db.movies.find( { year: { $gt: 1989, $lt: 2000 }});

db.movies.find({
    $or: [
      {year:
        {
          $gt: 2010
        }
      },
      {year :
        {
          $lt: 2000
        }
      }
    ]
});

// db.movies.save({_id : ObjectId("56b40f54ef4630c67af8921e"), synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."});
// db.movies.save({_id: ObjectId("56b40f54ef4630c67af8921e"), title : "The Hobbit: An Unexpected Journey", writer : "J.R.R. Tolkein", year : 2012, franchise : "The Hobbit"});

db.movies.update({_id : ObjectId("56b40f54ef4630c67af8921e") }, {$set : {synopsis : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."} });

db.movies.update({_id : ObjectId("56b40e58ef4630c67af8921c")}, {$push :{actors : "Samuel L. Jackson"} });

db.movies.createIndex({ "synopsis" : "text"});

db.movies.find({$text: {$search : "Gandalf"}});

db.movies.find({$text: {$search : "dwarves hobbit"}});

db.movies.find({$text: {$search : "gold, dragon"}});

