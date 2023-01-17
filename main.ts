input.onButtonPressed(Button.A, function () {
    num_temp += 1
    if (num_temp == 10) {
        num_temp = 0
    }
    basic.showNumber(num_temp)
})
input.onButtonPressed(Button.B, function () {
    if (num_1 < 0) {
        num_1 = num_temp
    } else {
        num_2 = num_temp
        basic.showString(">" + (num_1 * 10 + num_2))
    }
    num_temp = 0
})
let num_2 = 0
let num_1 = 0
let num_temp = 0
num_temp = 0
num_1 = -1
num_2 = -1
basic.showNumber(num_temp)
