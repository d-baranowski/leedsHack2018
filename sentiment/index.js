const negativity = require('Sentimental').negativity;
const datastore = require('nedb');
const options = require('./options');
const WebSocket = require('ws');

const db = new datastore({ filename: './datafile', autoload: true, timestampData: true });

const wss = new WebSocket.Server(options.wsOptions);

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {

        console.log("received ", message);
        const {text, language, meta} = JSON.parse(message);
        console.log(text);
        ws.send(JSON.stringify(negativity(text)));

    });

    ws.send('something');
    ws.send('something');
    ws.send('something');
    ws.send('something');
});