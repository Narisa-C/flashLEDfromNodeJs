const { Chip } = require("node-libgpiod");   //npm install node-libgpiod
var chip = new Chip(0);    // use chip0 and pin GPIO 21
var line = chip.getLine(21)

line.requestOutputMode();
var count = 10 ;

function blink() {
  if (count) {
    line.setValue(count % 2);
    setTimeout(blink, 1000);
    count--;
  } else {
    line.setValue(0);
  }
};

blink();
