cuteBot.IR_callback(function (code) {
    serial.writeValue("x", code)
})
leaguebot.IR_callback(function (code) {
    serial.writeValue("y", code)
})
makerbit.onIrDatagram(function () {
    serial.writeValue("z", makerbit.irButton())
})
basic.clearScreen()
led.stopAnimation()
basic.forever(function () {
	
})
