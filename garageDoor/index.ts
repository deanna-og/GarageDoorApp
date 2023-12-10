import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws: { on: (arg0: string, arg1: (data: any) => void) => void; send: (arg0: string) => void; }) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});