## Dash McDasherdash

This project puts a ReactJS front-end on a smorgasbord of APIs, mostly from a local instance of Hass.io. (Very, very much a work in progress, as of 02/2018.)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Configure a Pi in Kiosk Mode for Display](#configure-a-pi-in-kiosk-mode-for-display)
- [Run A Very Simple Web Server on the Pi and Deploy](#run-a-very-simple-web-server-on-the-pi-and-deploy)

## Configure a Pi in Kiosk Mode for Display

The original concept for this project was to use an older Raspberry Pi (a Model 2b in my case), in conjunction with an inexpensive wall mount and an old, unused monitor, to create a read-only dashboard view. The wall-mount Pi is running Raspbian Jessie. It works perfectly with launching Chromium fullscreen, disabling the screensaver by installing xscreensaver, and hiding the cursor in LDXE autostart.

### Raspbian Jessie Chromium boot to fullscreen:
Create file called ~/.config/autostart/chromium.desktop

```
[Desktop Entry]
Encoding=UTF-8
Name=connect
Comment=Checks internet connectivity
Exec=/usr/bin/chromium-browser -incognito --kiosk YOUR_WEB_ADDRESS
```
[Boot to Fullscreen Chromium](https://raspberrypi.stackexchange.com/questions/38515/auto-start-chromium-on-raspbian-jessie-11-2015/39181#39181)

### Disable Screensaver on Raspbian
Install a screensaver manager on the pi.

```
~$ sudo apt-get update
~$ sudo apt-get install xscreensaver
```
Note: If you don't have ssh set up on the display pi, use ctrl+alt+f2 to access the terminal when in kiosk mode, and 'startx' to relaunch the display.
[Disable Screensaver](https://www.raspberrypi.org/forums/viewtopic.php?f=91&t=57552$start=75)

### Hide the Cursor in Kiosk Mode
Install x11-xserver-utils and unclutter, and add a configuration to hide.
```
~$ sudo apt-get install x11-xserver-utils unclutter
```
Open ~/etc/xdg/lxsession/LXDE/autostart
```
~$ sudo nano ~/etc/xdg/lxsession/LXDE/autostart
```
Add to the bottom of the file:
```
@unclutter -idle 0.1 -root
```
[Hide Cursor](http://www.raspberrypi.org/forums/viewtopic.php?f=91&t=52759)

## Run A Very Simple Web Server on the Pi and Deploy
Create a build of the front-end by running this command in your development directory.
```
~$ npm run build
```
Then copy the contents of that directory to a directory on your Pi. (Note: I have a different, Pi version 1 running to handle the web server. This could be the same Pi that has the dashboard on it, of course, or anything else. I just have a Pi set up as a minimal server, so I included these steps here.)

From a command line on your dev machine:
```
~$ scp -r ~/<PATH_TO_PROJECT>/build/. pi@<PI_IP>:~/<PATH_TO_WHEREVER_YOU_WANT_THE_SERVER>/public
```
Next, navigate to the directory 'above' the /public directory you made via ssh and run:
```
~$ sudo nano package.json
```
Then copy this into that file:
```
{
  "name": "Crazy-Basic-Web-Server",
  "description": "Simple raspberry pi web server.",
  "version": "0.0.1",
  "dependencies": {
    "express": "^4.12.4"
  },
  "engines": {
    "node": "0.12.1"
  }
}
```
Then
```
~$ sudo nano server.js
```
And paste this in:
```
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
        res.send('Hello Raspbian!');
});

app.listen(app.get('port'), function() {
        console.log('Web app running on port', app.get('port'));
});
```
Next, run
```
~$ npm install
~$ npm start
```
And now you should have a webserver running on port 5000.
