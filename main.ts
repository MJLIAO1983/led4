function p15被按下 () {
    if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        p15 += 1
        if (p15 == 1) {
            p15 = 2
            range_green.showColor(neopixel.colors(NeoPixelColors.Black))
            greencount += 1
            if (greencount >= 100) {
                greenlap += 1
                greencount = 0
            }
            range_green = strip.range(greencount * 3, 3)
            range_green.showColor(neopixel.colors(NeoPixelColors.Green))
        }
    } else {
        p15 = 0
    }
}
function p14被按下 () {
    if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        p14 += 1
        if (p14 == 1) {
            p14 = 2
            range_blue.showColor(neopixel.colors(NeoPixelColors.Black))
            blueCount += 1
            if (blueCount >= 100) {
                bluelap += 1
                blueCount = 0
            }
            range_blue = strip.range(blueCount * 3, 3)
            range_blue.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
    } else {
        p14 = 0
    }
}
function P12被按下 () {
    if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        p12 += 1
        if (p12 == 1) {
            p12 = 2
            range_red.showColor(neopixel.colors(NeoPixelColors.Black))
            redCount += 1
            if (redCount >= 100) {
                redlap += 1
                redCount = 0
            }
            range_red = strip.range(redCount * 3, 3)
            range_red.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    } else {
        p12 = 0
    }
}
function p13被按下 () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        p13 += 1
        if (p13 == 1) {
            p13 = 2
            range_yellow.showColor(neopixel.colors(NeoPixelColors.Black))
            yellowcount += 1
            if (yellowcount >= 100) {
                yellowlap += 1
                yellowcount = 0
            }
            range_yellow = strip.range(yellowcount * 3, 3)
            range_yellow.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else {
        	
        }
    } else {
        p13 = 0
    }
}
let p13 = 0
let p12 = 0
let p14 = 0
let p15 = 0
let range_red: neopixel.Strip = null
let range_blue: neopixel.Strip = null
let range_yellow: neopixel.Strip = null
let range_green: neopixel.Strip = null
let yellowcount = 0
let greencount = 0
let blueCount = 0
let redCount = 0
let strip: neopixel.Strip = null
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
basic.showIcon(IconNames.Happy)
strip = neopixel.create(DigitalPin.P1, 300, NeoPixelMode.RGB)
redCount = 0
blueCount = 0
greencount = 0
yellowcount = 0
let 總圈數 = 1
let 狀態 = 0
range_green = strip.range(0, 3)
range_yellow = strip.range(0, 3)
range_blue = strip.range(0, 3)
range_red = strip.range(0, 3)
let greenlap = 0
let yellowlap = 0
let redlap = 0
let bluelap = 0
strip.showColor(neopixel.colors(NeoPixelColors.Black))
range_green.showColor(neopixel.colors(NeoPixelColors.Green))
range_red.showColor(neopixel.colors(NeoPixelColors.Red))
range_blue.showColor(neopixel.colors(NeoPixelColors.Blue))
range_yellow.showColor(neopixel.colors(NeoPixelColors.Yellow))
strip.show()
狀態 = 1
basic.forever(function () {
    P12被按下()
    p14被按下()
    p15被按下()
    p13被按下()
    if (bluelap >= 總圈數) {
        狀態 = 2
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        while (true) {
            basic.showString("Blue")
        }
    } else if (redlap >= 總圈數) {
        狀態 = 2
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.LoopingInBackground)
        while (true) {
            basic.showString("Red")
        }
    } else if (greenlap >= 總圈數) {
        狀態 = 2
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.LoopingInBackground)
        while (true) {
            basic.showString("green")
        }
    } else if (yellowlap >= 總圈數) {
        狀態 = 2
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.LoopingInBackground)
        while (true) {
            basic.showString("yellow")
        }
    } else {
    	
    }
})
