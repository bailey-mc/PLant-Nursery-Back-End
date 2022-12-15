# Plant-Nursery-Back-End
## FULLSTACK MERN APP
By Bailey McDonald and Emon Li

## An app used to list a plant nursery's inventory
- Backend hosted at https://ancient-lowlands-69118.herokuapp.com/
- Backend GitHub Repo https://github.com/texasmami/PLant-Nursery-Back-End
- Frontend hosted at https://sunshine-nursery.netlify.app/
- Frontend GitHub Repo https://github.com/texasmami/plant-nursery-front-end


## Technologies and dependencies used in the back end:
 - bcrypt, cors, express, mongoose, dotenv, method-override


## Struggles:
- Emon couldn't add the Privacy card to her Heroku so Bailey had to deploy the back end server onto her Heroku.

- The Heroku app was not working properly for the back-end. Bailey got a H10 error from Heroku and we couldn't resolve it until we looked up the error code and found this article: `https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl`. To fix it, we trialed and errored and tried `heroku restart` in the terminal and that fixed the problem temporarily. 
- Heroku was not working again, so Bailey compared our code to the backend from her previous project and noticed the mongoose connection was different. Instead of what we had: 
 ```
 mongoose.connect('mongodb://localhost:27017/plantnursery-MERN')
mongoose.connection.once('open', () => {
  console.log('connected to mongosh...')
});
```
it was supposed to be: 
``` 
mongoose.connect('[MONGO_CONNECTION_STRING]', ()=>{
	console.log('connected to mongo');
})
```
Because mongoose was closing after the first connection, the site was breaking after the initial page load.

- The filter route took Bailey a while to figure out; she could not figure out how to pull the req.params.key value into the mongoose query. First, she tried setting that value to a variable and pulling it in that way, but it did not work. Then she set up .find() with an $or operator and hard coded all of the different key options, and then pulled in the value thru req.params.value. It worked because all of our values are different, but it wasn't ideal. Eventually, Alexis showed her that you can wrap a key in square brackets and mongoose will be happy.


## Features of the App:
- All the plants are displayed upon page loading.

- If a user is logged in, they are able to edit/update or delete an existing listing.

- Toggles to show all plants or add a new listing at the top of the page only if the user is logged in. Otherwise, it is VIEW ONLY.

- Users can filter by a variety of categories to populate the page with the types of plants they are looking for. If a category is empty, a message pops up telling the user to check back later.

## What we learned collaborating with each other:
- Working with git - learning how to manually merge, how to read pull requests, how to communicate with your partner about what you are working on and where, and making sure that you are not working on the same document at the same time because it will cause conflicts when pulling each other's work.

- Reading and familiarizing yourself with your partner's code. First, you have to understand what they did and why. Then you have to make sure any of your own changes do not mess up their work. There was definitely a stuble or two in this department.

## Unsolved Problems
- Granting different permissions to different types of users. Right now the only barrier to editing the contents of the site is creating an account and logging in. We'd like to figure out how to give administrative permissions, so that only the shop owners can edit the content.
