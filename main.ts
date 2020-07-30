input.onButtonPressed(Button.A, function () {
    Left = 1
    Right = 0
})
input.onButtonPressed(Button.B, function () {
    Right = 1
    Left = 0
})
let Right = 0
let Left = 0
let GO = 0
basic.forever(function () {
    if (Left == 1) {
        basic.showString("" + (TobbieII.Read_LBlock()))
        basic.pause(1000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (Right == 1) {
        basic.showString("" + (TobbieII.Read_RBlock()))
        basic.pause(1000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
