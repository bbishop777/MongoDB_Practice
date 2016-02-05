
//creates database
use mongo_practice;

//creates collection called 'movies'
db.createCollection("movies");

//inserts document into 'movies'
db.movies.insert(
  {title : "Fight Club",
  writer : "Chuck Palahniuk",
  year : 1999,
  actors : [
  "Brad Pitt",
  "Edward Norton"
  ]
});


//inserts document into 'movies'
db.movies.insert(
  {title : "Pulp Fiction",
writer : "Quentin Tarantino",
year : 1994,
actors : [
  "John Travolta",
  "Uma Thurman"
]
});

//inserts document into 'movies'
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

//inserts document into 'movies'
db.movies.insert(
  {title : "The Hobbit: An Unexpected Journey",
  writer : "J.R.R. Tolkein",
  year : 2012,
  franchise : "The Hobbit"
});

//inserts document into 'movies'
db.movies.insert(
  {title : "The Hobbit: The Desolation of Smaug",
  writer : "J.R.R. Tolkein",
  year : 2013,
  franchise : "The Hobbit"
});

//inserts document into 'movies'
db.movies.insert(
  {title : "The Hobbit: The Battle of the Five Armies",
  writer : "J.R.R. Tolkein",
  year : 2012,
  franchise : "The Hobbit",
  synopsis : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
});

//inserts document into 'movies'
db.movies.insert(
  {title : "Pee Wee Herman's Big Adventure",
  });

//inserts document into 'movies'
db.movies.insert(
  {title : "Avatar",
  });

//queries:
//finds everything in collection 'movies'
db.movies.find();

//find documents where writer is Quentin Tarantino
db.movies.find({ writer : "Quentin Tarantino"});

//find documents where actors include Brad Pitt
db.movies.find({ actors : "Brad Pitt" });

//find documents where the franchise is The Hobbit
db.movies.find({ franchise : "The Hobbit" });

//find movies made from years 1990 to 1999...the 90's
db.movies.find( { year: { $gt: 1989, $lt: 2000 }});

//find all movies released before 2000 or after 2010
db.movies.find({$or: [{year: {$gt: 2010 } }, {year : {$lt: 2000 } } ] });

//Overwrote the document matched by ID with synopsis.  Overwrote it again (line 98) to restore to original state
// db.movies.save({_id : ObjectId("56b40f54ef4630c67af8921e"), synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."});
// db.movies.save({_id: ObjectId("56b40f54ef4630c67af8921e"), title : "The Hobbit: An Unexpected Journey", writer : "J.R.R. Tolkein", year : 2012, franchise : "The Hobbit"});

//add synopsis to document by matching id
db.movies.update({_id : ObjectId("56b40f54ef4630c67af8921e") }, {$set : {synopsis : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."} });

//add additional actor to document by matching id
db.movies.update({_id : ObjectId("56b40e58ef4630c67af8921c")}, {$push :{actors : "Samuel L. Jackson"} });

//set index on the synopsis keys in documents (movies)
db.movies.createIndex({ "synopsis" : "text"});

//find all documents in movies that have the "Gandalf" in synopsis using index
db.movies.find({$text: {$search : "Gandalf"}});

//find all documents in movies with the words "dwarves" or "hobbit" in synopsis using index
db.movies.find({$text: {$search : "dwarves hobbit"}});

//find all documents in movies with the words "gold" or "dragon" in synopsis using index
db.movies.find({$text: {$search : "gold, dragon"}});

//deletes from movies the document by title
db.movies.remove({title :"Pee Wee Herman's Big Adventure"});

//deletes from movies the document by title
db.movies.remove({title :"Avatar"});

//creates new collection named 'users'
db.createCollection("users");

//inserts document into users
db.users.insert({username : "GoodGuyGreg", first_name : "Good Guy", last_name : "Greg", });

//inserts document into users
db.users.insert({username : "ScumbagSteve", full_name : { first : "Scumbag", last : "Steve", }});

//creates new collection named "posts"
db.createCollection("posts");

//inserts document into posts
db.posts.insert({username : "GoodGuyGreg", title : "Passes out at party", body : "Wakes up early and cleans house" });

//inserts document into posts
db.posts.insert({username : "GoodGuyGreg", title : "Steals your identity", body : "Raises your credit score" });

//inserts document into posts
db.posts.insert({username : "GoodGuyGreg", title : "Reports a bug in your code", body : "Sends you a Pull Request" });

//inserts document into posts
db.posts.insert({username : "ScumbagSteve", title : "Borrows something", body : "Sells it" });

//inserts document into posts
db.posts.insert({username : "ScumbagSteve", title : "Borrows everything", body : "The end" });

//inserts document into posts
db.posts.insert({username : "ScumbagSteve", title : "Forks your repo on github", body : "Sets to private" });

//creates new collection called "comments"
db.createCollection("comments");

//finds a post to get object id by searching posts by finding title
var postId = db.posts.find({ title : { $in : [ "Borrows something" ]}});
//inserts document into comments using a post field populated by the post object id found above in the variable
//the find returns an array.  Since only finding one thing, it will be the first position in the array
db.comments.insert({username: "GoodGuyGreg", comment : "Hope you got a good deal!", post : postId[0]._id });

//same type of operation as above...don't have to reassign the value of the var postId.  They expire after one use
var postId = db.posts.find({ title : { $in : [ "Borrows everything" ]}});
db.comments.insert({username: "GoodGuyGreg", comment : "What's mine is yours!", post : postId[0]._id });

//same type of operation as above
var postId = db.posts.find({ title : { $in : [ "Forks your repo on github" ]}});
db.comments.insert({username: "GoodGuyGreg", comment : "Don't violate the licensing agreement", post : postId[0]._id });

//same type of operation as above
var postId = db.posts.find({ title : { $in : [ "Passes out at party" ]}});
db.comments.insert({username: "ScumbagSteve", comment : "It still isn't clean", post : postId[0]._id });

//same type of operation as above
var postId = db.posts.find({ title : { $in : [ "Reports a bug in your code" ]}});
db.comments.insert({username: "ScumbagSteve", comment : "Denied your PR cause I found a hack", post : postId[0]._id });
