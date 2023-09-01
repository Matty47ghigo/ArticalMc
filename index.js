const { Client, GatewayIntentBits } = require('discord.js');
const TicketHandler = require('./ticketHandler');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  TicketHandler.registerSlashCommands(client);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'creaticket') {
    TicketHandler.handleTicketCommand(interaction);
  }
});

client.login('YOUR_BOT_TOKEN')
