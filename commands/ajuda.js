exports.run = async (client, message) => {

  message.delete().catch();

    const embed = {
        "title": "Ajuda?",
        "color": '00000',
        "timestamp": new Date(),
        "thumbnail": {
            "url": ""
        },
        "image": {
            "url": ""
        },
        "footer": {
          "text": "A ajuda esta a caminho!"
        },
        "fields": [
          {
            "name": "Comandos",
            "value": `
            !autor - Criador
            !vips - Preço e Informações dos VIPS
            !wl - Formulario de WhiteList
            !ping - Seu ping eo do Bot
            !serverinfo - Informações do servidor
            !sugestão - Envia sua sugestão
            !reportarbug - Manda um report de bug(preferencia enviar link de video!)
		`
           }
      ]
      }
    message.channel.send({embed})
    }