This is a simple express persistent file api that uses mongodb to store data.

Content: 
This database contains pacific northwest trees of the two main types, gymnosperms(non-flowering trees) and angiosperms(true flowering trees).

Directions:
send all requests to the following fields:
  Url: 'localhost:3200/api/trees/gymnosperms' or 'localhost:3000/api/trees/angiosperms'


GET: see a list of entries
    All trees in the database:                   Url: 'localhost:3200/api/trees'
    All gymnosperms in the database:             Url: 'localhost:3200/api/trees/gymnosperms'
    All angiosperms in the database:             Url: 'localhost:3200/api/trees/angiosperms'
    
POST: add a tree to the database
    You can add a tree to the trees database and the program will sort it automatically 
   Example: {name: 'douglas fir', type: 'gymnosperm', genus: 'Pseudotsuga'}                 
   Post Url: 'localhost:3200/api/trees'

// DELETE: delete the list of capitals



