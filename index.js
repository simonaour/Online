import express from 'express';
import { keepAlive } from "./bot.js";
const app = express();
const port = 3022;

app.get('/', (req, res) => {
  res.send('Result: [OK].');
})

app.listen(port, () => {
  console.log(`Server is Ready |=> (${Date.now()})`);
  keepAlive(); // run the bot discord.
});

