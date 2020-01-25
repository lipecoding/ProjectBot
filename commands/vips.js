exports.run = async (client, message) => {
  message.delete().catch();

    const embed = {
        "title": "Preço dos Vips?:",
        "color": '00000',
        "timestamp": new Date(),
        "thumbnail": {
            "url": `https://cdn.discordapp.com/attachments/656224952420139038/656610918490177548/pips.gif`
        },
        "image": {
            "url": ""
        },
        "footer": {
          "text": "Para comprar reaja!(Após pagamento mande comprovante no privado do @Draakxx#9878)"
        },
        "fields": [
          {
            "name": "Vip Basic(reaja com 🌑)",
            "value": `
              3°Lugar na fila!
              200k na ativação!
              Salario de 3K!
              Casa Vip a escolha!
              Direito a um carro ou moto personalizada!
              Tag de Vip Basic!

              Valor = 30,00R$!`
           },
           {
              "name": "Vip Intermediate(reaja com ☘)",
              "value": `
                2°Lugar na fila!
                400k na ativação!
                Salario de 5K!
                Casa Vip a escolha!
                Direito a um carro e uma moto personalizada!
                Uma roupa ou skin personalizada!
                Tag de Vip Intermediate!

                Valor = 50,00R$!`
            },
            {
              "name": "Vip Advanced(reaja com 🔥)",
              "value": `
                1°Lugar na fila!
                700k na ativação!
                Salario de 8K!
                2 Casas Vip a escolha!
                Direito a 2 carros e uma 2 motos personalizada!
                Avião, Helicóptero ou Barco a escolha! 
                Três roupas ou skins personalizadas!
                Tag de Vip Advanced!

                Valor = 80,00R$!`
          },
          {
            "name": "Vip Create",
            "value": `
              Crie seu vip personalizado!
              Chame 1 dos donos e negocie!

              Valor minimo = 60,00R$!`
        },
          {
            "name": "Vip Fac(reaja com 🔫)",
            "value": `
              1°Lugar na fila!
              700k na ativação!
              Salario de 8K!
              2 Casas Vip a escolha!
              Direito a 2 carros e uma 2 motos personalizada!
              Avião, Helicóptero ou Barco a escolha! 
              Três roupas ou skins personalizadas!
              Criação da sua própria Facção!
              Tag de Vip Fac!

              Valor = 120,00R$!`
          },
          {
            "name": "Vip Money(reaja com 🏆)",
            "value": `
              1°Lugar na fila!
              700k na ativação!
              Salario de 8K!
              2 Casas Vip a escolha!
              Direito a 2 carros e uma 2 motos personalizada!
              Avião, Helicóptero ou Barco a escolha! 
              Três roupas ou skins personalizadas!
              Empresa de lavagem de dinheiro!
              Tag de Vip Money!

              Valor = 120,00R$!`
      }
          
      ]
      }
      message.channel.send({embed}).then(msg => {
        msg => msg.delete(15000)
        msg.react('🌑')
        let filtro = (reaction, user) => reaction.emoji.name === '🌑' && user.id == message.author.id
        let collector = msg.createReactionCollector(filtro, {time: 1000 * 20})
        .on('collect', r => {
          message.author.createDM().then(dm => dm.send('PAGUE POR AQUI E ENVIE COMPROVANTE PARA @Draakxx#9878 https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=268135067-066fc331-81a9-402a-9410-5cbed4b2c3cc'
          ))
        });
        msg.react('☘')
        let filtro2 = (reaction, user) => reaction.emoji.name === '☘' && user.id == message.author.id
        let collector2 = msg.createReactionCollector(filtro2, {time: 1000 * 20})
        .on('collect', r => {
          message.author.createDM().then(dm => dm.send('PAGUE POR AQUI E ENVIE COMPROVANTE PARA @Draakxx#9878 https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=268135067-907058f2-fa82-477d-b42b-2d3a45e66850'
          ))
        });
        msg.react('🔥')
        let filtro3 = (reaction, user) => reaction.emoji.name === '🔥' && user.id == message.author.id
        let collector3 = msg.createReactionCollector(filtro3, {time: 1000 * 20})
        .on('collect', r => {
          message.author.createDM().then(dm => dm.send('PAGUE POR AQUI E ENVIE COMPROVANTE PARA @Draakxx#9878 https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=268135067-6ef816d3-bcb1-404c-8ff2-a8d48ce292da'
          ))
        });
        msg.react('🔫')
        let filtro4 = (reaction, user) => reaction.emoji.name === '🔫' && user.id == message.author.id
        let collector4 = msg.createReactionCollector(filtro4, {time: 1000 * 20})
        .on('collect', r => {
          message.author.createDM().then(dm => dm.send('PAGUE POR AQUI E ENVIE COMPROVANTE PARA @Draakxx#9878 https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=268135067-6b06a5e2-b951-461e-b900-480409727cb7'
          ))
        });
        msg.react('🏆')
        let filtro5 = (reaction, user) => reaction.emoji.name === '🏆' && user.id == message.author.id
        let collector5 = msg.createReactionCollector(filtro5, {time: 1000 * 20})
        .on('collect', r => {
          message.author.createDM().then(dm => dm.send('PAGUE POR AQUI E ENVIE COMPROVANTE PARA @Draakxx#9878 https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=268135067-ae5ff93e-177c-4175-b754-b79ea2c567b7'
          ))
        });
      })
    }