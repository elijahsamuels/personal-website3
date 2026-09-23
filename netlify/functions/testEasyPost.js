const apiKey = 'cueqNZUb3ldeWTNX7MU3Mel8UXtaAMUi';
const EasyPost = require('@easypost/api');
const easypost = new EasyPost(apiKey);

async function testEasyPostConnection() {
  try {
    const carrierTypes = await easypost.CarrierType.all();
    console.log('Successfully connected to EasyPost. Carrier Types:');
    console.log(carrierTypes);
  } catch (error) {
    console.error('Error connecting to EasyPost:', error);
  }
}

testEasyPostConnection();
