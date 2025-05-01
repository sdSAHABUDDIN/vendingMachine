const { SerialPort } = require('serialport');
const { MockBinding } = require('@serialport/binding-mock');
const { ReadlineParser } = require('@serialport/parser-readline');

// Create a fake port
MockBinding.createPort('/dev/ROBOT', { echo: true, record: true });

const port = new SerialPort({
  path: '/dev/ROBOT',
  baudRate: 9600,
  binding: MockBinding
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

const cmd = process.argv[2] || 'OPEN1';

port.on('open', () => {
  console.log('✅ Serial port opened');
  console.log(`📤 Sending command: ${cmd}`);
  port.write(`${cmd}\n`);
});

parser.on('data', (data) => {
  console.log('📬 Received from Arduino:', data.trim());
});
