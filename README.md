# node-one-3760
Assignment for DGM 3760; site URL is `https://node-one-3760.herokuapp.com/`

## Static server
Access the static site by visiting `/static`.

## API Server
API server contains a list of users, along with a grocery list for each user. The server-side data is stored like this: 
```javascript 
{ 
    name: 'jerry', 
    list: [ 'tomatoes', 'bacon', 'eggs', 'cheese', 'apple sauce', 'canned tomatoes', 'more bacon', 'apples', 'oranges']
},
{
    name: 'ben',
    list:  [ 'apple sauce', 'canned tomatoes', 'more bacon', 'apples', 'oranges', 'beans', 'hot sauce', 'chilis' ]
},
{
    name: 'sally', 
    list: [ 'tomatoes', 'bacon', 'oranges', 'crackers', 'candy', 'pudding', 'ghost pepper', 'cream of mushroom', 'liver'] 
},
{
    name: 'cindy',
    list: [ 'cheese', 'apple sauce', 'oranges', 'almonds', 'mushrooms', 'whole milk', 'sirloin steak', 'salmon', 'bell peppers' ]
}
```
### GET requests
There are two URLs for GET requests. The first one is `/api/lists/`, which just returns all of the list data. The second one is `/api/lists/:name`, where the :name parameter will the specific user with that name and their respective grocery list items.

### POST request
There is one URL for a POST request, and it's `/api/lists/`, where it takes JSON as request body data, and must be formatted in the same name / list format as the server-side info that is mentioned above. If you wanted to add a new user named jennifer, along with her respective grocery items, you'll need to format the JSON body data like this: 
```javascript
{ 
    name: 'jennifer', 
    list: [ 'tomatoes', 'cheese', 'bread', 'milk', 'apples', 'oranges', 'peppers' ]
}
```

### PUT request
There URL for the PUT request is `/api/lists/`, and it works the same as the POST request; but just updates an already-existing user, and doesn't create a new one. If you wanted the edit the grocery items for jerry, the request body data will be JSON formatted like the server-side data: 
```javascript
{ 
    name: 'jerry', 
    list: [ 'bacon', 'cheese', 'bread', 'string cheese', 'apples', 'trail mix', 'almonds' ]
}
```

### DELETE request
The URL for the DELETE request is `/api/lists/:name`, where :name is the name of the already-existing user that you want to delete from the server-side data.
