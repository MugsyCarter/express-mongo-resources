This is a simple express persistent file api that uses mongodb to store data.

Content: This database contains a plants of the two main types, gymnosperms(non-flowering plants) and angiosperms(true flowering plants).
Directions
send all requests to the following fields:
  Url: 'localhost:3200/api/plants/gymnosperms' or 'localhost:3000/api/plants/angiosperms'


GET: see a list of entries
    All plants in the database:                  Url: 'localhost:3200/api/plants'
    All gymnosperms in the database:             Url: 'localhost:3200/api/plants/gymnosperms'
    All angiosperms in the database:             Url: 'localhost:3200/api/plants/angiosperms'
    
POST: add a plant to the database
    You can add a plant to the plants database and the program will sort it automatically 
   Example: {name: 'douglas fir', type: 'gymnosperm', genus: 'Pseudotsuga'}                 
   Post Url: 'localhost:3200/api/plants'

// DELETE: delete the list 
//     Url: 'localhost:3000/delete'
//     what it does: Deletes the list of capitals. You can then add more if you'd like.
// Example: posting {county: 'Italy', capital:'Rome'}


