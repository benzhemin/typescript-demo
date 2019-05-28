import net from 'net'

const HOST = 'gitlab.htdadao.net';

function scanPort() {
  let startPort = 1;

  for (let startPort = 0; startPort < 30000; startPort += 1) {

    const sock = new net.Socket();
    sock.setTimeout(3000);

    sock.connect({ port: startPort, host: HOST }, () => {
      console.log(`port ${startPort} connected`);

      sock.destroy;
    });

    sock.on('timeout', () => {
      sock.destroy();
    });
  }
}

process.on('uncaughtException', function (err) {
  // console.log(err);
}); 

scanPort();