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

parser.on('data', (data) => {
  const command = data.trim();
  console.log(`📥 Simulated Arduino received: "${command}"`);
  if (command === 'OPEN1') {
    console.log('🦾 Servo 1 activated');
    port.write('Servo 1 done\n');
  } else if (command === 'OPEN2') {
    console.log('🦿 Servo 2 activated');
    port.write('Servo 2 done\n');
  } else {
    port.write('Unknown command\n');
  }
});
