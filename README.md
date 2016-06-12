# webpack-userscript
Template for a Tempermonkey/Greasemonkey userscript using webpack


How to setup a development environment?
=======================================

1. Make sure a recent version of nodejs and npm is installed on your system (https://nodejs.org)  
    Under linux you will most likely as well need to add a symlink in /usr/bin: node -> nodejs (`sudo ln -s /usr/bin/nodejs /usr/bin/node`)  
    Or add the bin-folder to your PATH
2. Install webpack: `npm install -g webpack` (you'll need sudo)
3. Install webpack-dev-server: `npm install -g webpack-dev-server` (you'll need sudo)
4. Install sass
    1. Install ruby
        1. Windows: use the ruby installer (http://rubyinstaller.org/)
        2. Linux: `sudo apt-get install ruby`
    2. use gem (ruby's package manager) to install sass: `gem install sass` (you'll need sudo)
5. Load Modules with `npm install`
6. Install the devLoader.user.js userscript  
    Change @match to fit your page

How do I start developing?
==========================

1. Launch "startDevServer.sh" (Linux) / "startDevServer.bat" (Windows)
2. Wait for the message: "bundle is now VALID"
3. refresh page
4. After changing a file restart from step 2

How do I pack my userscript for distribution?
=============================================

1. Edit userscript.txt to fit your needs
2. Launch "pack.sh" (Linux) / "pack.bat" (Windows)
3. Your userscript is bundle.user.js


Troubleshooting
===============

The server doesn't notice a filechange
--------------------------------------
Most likely the maximum number of watchers is surpassed.
Try adding `fs.inotify.max_user_watches=524288` to /etc/sysctl.conf and execute `sysctl -p`.
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
