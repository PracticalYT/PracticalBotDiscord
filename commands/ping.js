module.exports = {
    name: 'ping',
    description: "This is a ping command! [INCOMING] Pong . . .",
    execute(message, args){
        message.channel.send('pong!');
    }
}