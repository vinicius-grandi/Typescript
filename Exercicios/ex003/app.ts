class Reservation {}

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (destination: string): Reservation
}


let reserve: Reserve = (
    fromOrDestination: Date | string,
    toOrDestination?: Date | string,
    destination?: string
   ): Reservation => {

    if(typeof fromOrDestination === 'string') {
    // Book a trip right away
    }
    else if (toOrDestination instanceof Date && destination !== undefined) {
    // Book a one-way trip
    } else if (typeof toOrDestination === 'string') {
    // Book a round trip
    }
    return Reservation
}

export {};
