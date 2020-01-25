module.exports = (client, message) => {
    console.log('Bot iniciado com ' + client.users.size + ' usuários, em ' + client.channels.size + ' canais de ' + client.guilds.size + ' servidores.');
    setInterval(changing_status, 9000);
    
    function changing_status() {
        let status = ['Meu Prefix é "!"', 'Para fazer WhiteList use "!wl"']
        let random = status[Math.floor(Math.random() * status.length)]
        client.user.setActivity(random, {type: 'WATCHING'});
    };
}