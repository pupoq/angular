interface WalkInterface {
    walk(): string
}

interface FlyInterface {
    fly(): string
}

interface SwimInterface {
    swim(): string
}

class Sparrow implements AirplaneInterface {
    fly(){
        return 'Flying'
    }
}

class Pinguin implements WalkInterface, SwimInterface {
    walk() {
        return 'Driving'
    }

    swim() {
        return "Swiming"
    }
}

class Duck implements WalkInterface, FlyInterface, SwimInterface {
    walk() {
        return 'Driving'
    }

    swim() {
        return "Swiming"
    }

    fly(){
        return 'Flying'
    }
}