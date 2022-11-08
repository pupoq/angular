interface Shape{
    area(): number
}

class Rectanglee {
    constructor(private _width: number,
        private _height: number
    ) { }

    area(): number {
        return this._height * this._width
    }
}

class Squaree {
    constructor(
        private _height: number
    ) { }
    area(): number {
        return Math.pow(this._height, 2)
    }
}