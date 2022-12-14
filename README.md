# Plant-Nursery-Back-End
FULLSTACK MERN APP
## An app used to list different types of plants for sale.

---

## Struggles:
- I couldn't add the Privacy card to my Heroku so Bailey had to deploy the back end server onto her Heroku.

- The Heroku app was not working properly for the back-end. Bailey got a H10 error from Heroku and we couldn't resolve it until we looked up the error code and found this article: `https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl`. To fix it, we trialed and errored and tried `heroku restart` in the terminal and that fixed the problem temporarily. 
- Heroku was not working again, so Bailey compared our code to the backend from her previous project and noticed the mongoose connection was different. Instead of: 
 ```
 mongoose.connect('mongodb://localhost:27017/plantnursery-MERN')
mongoose.connection.once('open', () => {
  console.log('connected to mongosh...')
});
```
it was suppose to be: 
``` 
mongoose.connect('[MONGO_CONNECTION_STRING]', ()=>{
	console.log('connected to mongo');
})
```
---

## Features of the app:
- All the plants are displayed upon page loading.

- Able to edit/update or delete an existing listing.

- Toggles to show all plants or add a new listing at the top of the page. 
--- 
