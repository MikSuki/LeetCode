class ParkingSystem {
    types: number[] = []

    constructor(big: number, medium: number, small: number) {
        this.types.push(big, medium, small)
    }

    addCar(carType: number): boolean {
        return this.types[carType - 1]-- > 0
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */