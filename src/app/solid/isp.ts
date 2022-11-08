interface CarInterface {
    drive(): string
}

interface AirplaneInterface {
    fly(): string
}

class Car implements CarInterface {
    drive() {
        return 'Driving car'
    }
}

class Airplane implements AirplaneInterface {
    fly(){
        return 'Flying'
    }
}