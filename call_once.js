const { exec } = require('child_process');



function action(adbCommand){
  exec(adbCommand, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

function startCall(){
  const phoneNumber = '123456789'; // replace with the phone number you want to call
  const adbCommand = `adb shell am start -a android.intent.action.CALL -d tel:${phoneNumber}`;
  action(adbCommand);
  console.log('start call to '+phoneNumber);
}

startCall()
