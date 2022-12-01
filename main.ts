let list: number[][] = []
basic.forever(function () {
    list = [
    [
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1)
    ],
    [
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1)
    ],
    [
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1)
    ],
    [
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1)
    ],
    [
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1),
    randint(0, 1)
    ]
    ]
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (list[y][x] == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
        }
    }
    basic.pause(500)
})
