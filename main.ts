/*
 * Created by: Joos
 * Created on: Oct 2024
 * This program Rotates through rgb led colours
*/

basic.showIcon(IconNames.Happy)

//Rotates through pins
input.onButtonPressed(Button.A, function () {
    // red
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)

    //green
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    
    //blue
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    
    // yellow
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    //magenta
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(1000)
    //cyan
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(1000)
    //white
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(1000)
    //off
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
