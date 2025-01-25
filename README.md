## About Meme Generator
This project generates a random meme by randomly generating a joke and pasting it on a random meme. The website calls v2.jokeapi.dev to get a joke and apimeme.com for a meme.
Link to deployed website: https://dali-app.onrender.com/
![Screenshot of meme generator](./images/Image%201-25-25%20at%205.26 PM.jpeg)

## Running the server
```bash
cd server
npm install
node index.js
```
For immediate server refreshing, instead of node index.js, run
```bash
npx nodemon index.js
```

## Running the client
```bash
cd client
npm install
npm start
```
To generate a production build of the client, run
```bash
npm run build
```
Remember to change the endpoint variable in client/App.js accordingly if running locally.

## Reflections
In high school, my friends and I had intended to paste memes around the school to bring cheer during the examination season. However, we had difficulty coming up with creative and funny memes. Since then, I have wanted to mitigate this problem. By randomly generating jokes and memes, I hope to stumble upon the perfect meme.

For users of the website, I hope that you will find it entertaining to generate random memes. Because both the joke and meme are randomly generated, the chances of the exact same meme being generated again is very low. That is a special experience.

I had never used the joke and meme APIs before, so it was fun integrating both together to create a working product. I chose Express for the backend and React and the frontend as the technologies allowed for me to develop a prototype rapidly. It was initially challenging to return an image from the server to the client as I had to deal with array buffers and content headers, but I eventually found a solution to the problem.