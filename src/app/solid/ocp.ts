interface Shape{
    area(): number
}

class Rectangle {
    constructor(private _width: number,
        private _height: number
    ) { }

    area(): number {
        return this._height * this._width
    }
}

class Square {
    constructor(
        private _height: number
    ) { }
    area(): number {
        return Math.pow(this._height, 2)
    }
}

class AreaCalculate {
    public shape: any[]

    constructor(shape: any[]) {
        this.shape = shape
    }

    public sum() {
        return this.shape.reduce((acc, shape) => {
            acc += shape.area()
        }, 0)
    }
}

let rec = new Rectangle(2, 3)
const square = new Square (2)
let list = [rec]
let ac = new AreaCalculate(list)

console.log(ac.sum())

