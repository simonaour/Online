import dotenv from "dotenv";
dotenv.config();
import Discord from 'discord.js-selfbot-v13';
import { Client } from 'discord.js-selfbot-v13';
import { DiscordStreamClient } from 'discord-stream-client';
import config from "./config.json" assert {type: "json"};
let connection;


export const keepAlive = () => {
  const client = new Client({ checkUpdate: false });
  const StreamClient = new DiscordStreamClient(client);

  client.on('ready', async () => {
    const rpc = new Discord.RichPresence()
      .setApplicationId(client.user.id)
      .setType('STREAMING')
      .setURL(config.url)
      .setDetails(`nta, nti, nti`)
      .setName(`𝐁𝐮𝐭 𝐢𝐭'𝐬 𝐬𝐨 𝐠𝐨𝐨𝐝 , 𝐈'𝐯𝐞 𝐧𝐞𝐯𝐞𝐫 𝐤𝐧𝐨𝐰𝐧 𝐚𝐧𝐲𝐛𝐨𝐝𝐲 𝐥𝐢𝐤𝐞 𝐮`)
      .setState(`Lo3ab`)
      .setParty({
        max: 100,
        current: 5,
        id: Discord.getUUID(),
      })
      .setAssetsLargeImage(`https://cdn.discordapp.com/attachments/1111341028906123355/1116068467888631808/image.png`)
      .setAssetsLargeText(`Fall In love always`)
      .setAssetsSmallImage(`https://cdn.discordapp.com/attachments/1111341028906123355/1116069394641076224/image.png`)
      .setAssetsSmallText(`By Casawywywywy`)
      ;
    client.user.setActivity(rpc.toJSON());

    const guild = client.guilds.cache.get(config.guildId);
    const channel = guild.channels.cache.get(config.channelId);
    connection = await StreamClient.joinVoiceChannel(channel, {
      channelId: config.channelId,
      guildId: config.guildId,
      selfDeaf: false,
      selfMute: true,
      selfVideo: false,
      group: client.user.id
    });
    console.log(`${client.user.tag} has joined!`);
  });

  client.on('voiceStateUpdate', async (oldState, newState) => {
    let oldChannel = oldState.channel;
    let newChannel = newState.channel;
    const guild = client.guilds.cache.get(config.guildId);
    const channel = guild.channels.cache.get(config.channelId);
    if (!newChannel && oldChannel) {
      if (oldState.id == client.user.id) {
        connection = await StreamClient.joinVoiceChannel(channel, {
          channelId: config.channelId,
          guildId: config.guildId,
          selfDeaf: false,
          selfMute: false,
          selfVideo: false,
          group: client.user.id
        });
      }
    }

  });


  client.login(process.env.token);
}