declare class Reservation {
}
declare type Reserve = {
    (from: Date, to: Date, destination: string): Reservation;
    (from: Date, destination: string): Reservation;
    (destination: string): Reservation;
};
declare let reserve: Reserve;
