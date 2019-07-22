Here is the Steps for using this code:
First of all we are using Apollo Server Express with GraphQl.

1. Set up your project with:
```
npm init
```

2. Editing the packaging file 
 ``` 
 "scripts": {
    "start": "node index"
  }
  ```
now you are ready to start:
#1. install apollo-server-express
``` 
npm install apollo-server-express --save
```
#2. install express
``` 
npm install express --save
```
3. Create index.js file with the code in root folder
4. open browser in the url http://localhost:4000/graphql
5. write in the quere section:
```
	{
		hello
	}
```
6. the result will show up like this
```
{
  "data": {
    "hello": "Hello world!"
  }
}
```

#Adding backpack to the project so the steps are:
1. install backpack
```
npm i backpack-core --save
```
and add a script to your package.json like this:
```
{
  "scripts": {
    "dev": "backpack"
  }
}
```
After that there are just a few conventions defaults:
src/index.js: the entry of your app.


Then can then run your application in development mode:
```
npm run dev
```