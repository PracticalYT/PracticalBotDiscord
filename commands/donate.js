module.exports = {
  name: 'donate',
  description: 'Links the patreon',
  execute (message, args) {
    if (message.member.roles.cache.has('703330413430702178')) {
      message.channel.send('https://www.patreon.com/dexterityhub')
    } else {
      message.channel.send('Oh, you dont have the member role? Here you go')
      message.member.roles.add('703330413430702178').catch(console.error)
    }
  }
}
