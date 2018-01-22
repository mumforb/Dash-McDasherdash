## Dash McDasherdash

This project puts a ReactJS front-end on a smorgasbord of APIs, mostly from a local instance of Hass.io.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Configure a Pi in Kiosk Mode for Display](#configure-a-pi-in-kiosk-mode-for-display)


## Configure a Pi in Kiosk Mode for Display

The original concept for this project was to use an older Raspberry Pi (a Model 2b in my case), in conjunction with an inexpensive wall mount and an old, unused monitor, to create a read-only view dashboard view. The wall-mount Pi is running Raspbian Jessie. It works perfectly with launching Chromium fullscreen, disabling the screensaver by installing xscreensaver, and hiding the cursor in LDXE autostart.

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
