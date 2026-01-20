import app from './app';

let server;
const port = 3000

const bootstarp = async () => {
    server = app.listen(port, () => {
        console.log('listening from ', port);

    })
}

bootstarp()

/**
 * server --> server handling like starting ,closing , error handling . only related server
 */