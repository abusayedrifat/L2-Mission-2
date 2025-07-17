  const EventEmitter = require('events')

  const myEmitter = new EventEmitter();

  myEmitter.on('greet',()=>{
    console.log('hello there');
    
  });


  myEmitter.emit('greet')