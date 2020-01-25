module.exports = (client, guild) => {
    client.logger.command(`[GUILD JOIN] ${guild.name} (${guild.id}) adicionou o bot. Dono: ${guild.owner.user.tag} (${guild.owner.user.id})`);
  };