'use strict'

module.exports = (robot) => {
  robot.hear(/Hello/, function(res) {
    let responses = ["Hello!", "Hi!","Wetin dey hapun", "Alsalam alikem", "你好" ]
    // let rand = Math.floor(Math.random() * responses.length)
    return res.send(res.random(responses));
  });
  robot.hear(/I Love U/, function(res) {
    let responses = ["thanks!", "Me too!","What do you want?", "ohh! shy"]
    // let rand = Math.floor(Math.random() * responses.length)
    return res.send(res.random(responses));
  });
  robot.hear(/badger/i, (res) => {
    res.send('Badgers? BADGERS? WE DON\'T NEED NO STINKIN BADGERS')
  })
  robot.hear(/I'm hungry/i, (res) => {
    res.send('Do you want me to cook for you?')
  })
  robot.hear(/smile/i, (res) => {
    var img="https://cdn1.imggmi.com/uploads/2019/2/10/7763cdad93c0d4cc9b0421ff5d640807-full.jpg"
    res.send(img)
  })

  robot.hear(/Do we have class today\?/i, (res) => {
    var d1 = new Date();
    var day = d1.getDay();
    if(day==1 || day==3){
    res.send('yes we have!')}
    else{
      res.send('noo!')
    }
  })
}