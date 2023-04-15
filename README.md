to # Android Phone Call Automation using Node.js and ADB

This project is a demonstration of how to automate phone calls on an Android device using Node.js and the Android Debug Bridge (ADB). The project includes two Node.js scripts: `infinity_call.js` and `call_once.js`.

## Prerequisites

- Android device with USB debugging enabled
- USB cable
- Node.js (version 12 or higher) installed on your computer
- ADB installed on your computer

## Installing ADB

### Windows

1. Download the ADB installer for Windows from [this page](https://developer.android.com/studio/releases/platform-tools).
2. Extract the ZIP file to a folder on your computer.
3. Connect your Android device to your computer via USB.
4. Enable USB debugging on your Android device. You can find this option in the Developer options under Settings.
5. Open a command prompt and navigate to the folder where you extracted the ADB files.
6. Run the following command to start the ADB server:

   ```adb start-server```

### Mac

1. Install the Android Command Line Tools by following the instructions on [this page](https://developer.android.com/studio/#command-tools).
2. Connect your Android device to your computer via USB.
3. Enable USB debugging on your Android device. You can find this option in the Developer options under Settings.
4. Open a terminal and run the following command to start the ADB server:

   ```adb start-server```

### Linux

1. Install ADB using your Linux distribution's package manager. For example, on Ubuntu or Debian, you can run:

   ```sudo apt-get install adb```

2. Connect your Android device to your computer via USB.
3. Enable USB debugging on your Android device. You can find this option in the Developer options under Settings.
4. Open a terminal and run the following command to start the ADB server:

   ```adb start-server```

## Using the Scripts

### `infinity_call.js`

The `infinity_call.js` script makes a phone call to a specified phone number repeatedly until stopped. To use this script:

1. Open a terminal and navigate to the directory where you've saved the `infinity_call.js` file.
2. Run the following command to start the script:

   ```node infinity_call.js```

3. The script will prompt you to enter the phone number you want to call. Enter the phone number and press Enter.
4. The script will make the phone call and repeat the process until you stop it by pressing `Ctrl+C` in the terminal.

### `call_once.js`

The `call_once.js` script makes a single phone call to a specified phone number. To use this script:

1. Open a terminal and navigate to the directory where you've saved the `call_once.js` file.
2. Run the following command to start the script:

   ```node call_once.js <phone_number>```
   
   Replace `<phone_number>` with the phone number you want to call.

3. The script will make the phone call and then exit.

## Troubleshooting

- If you're having trouble connecting your Android device to your computer via USB, try using a different USB cable or USB port.
- If ADB is unable to detect your Android device, try restarting the ADB server by running the command `adb kill-server` followed by `adb
