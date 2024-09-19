import dotenv from 'dotenv';
dotenv.config();

import { Client } from 'discord.js';
const client = new Client();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Use the token from the environment variable
client.login(process.env.DISCORD_TOKEN);



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

