// import the Qrcode module
const QRCode = require('qrcode');

/* declaration of the "run" function */
async function run() {
  /* generation of qrCode options color, quality, width.... */
  const opts = {
    errorCorrectionLevel: 'H',
    type: 'terminal',
    with: 400,
    color: {
      dark: '#000',
      light: '#FFF',
    },
  };

  /* 
    creation of the QrCode 
    the Qrcode will be created under the name "Etiennejuz_Qrcode"
    I integrate the QrCode options
  */
  await QRCode.toFile(
    'Etiennejuz_Qrcode.jpg',
    'https://www.etiennejuz.com',
    { opts },
    function (err) {
      /* error management */
      if (err) {
        console.log('err', err);
        throw err;
      }
    }
  );
}

/* Start function */
run();
