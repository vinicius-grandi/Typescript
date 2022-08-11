declare class Job {
    jobName: string;
    complexity: string;
    area: string;
    wage: number;
    constructor(w: string, c: string, a: string, wg: number);
}
declare class Employee extends Job {
    name: string;
    age: number;
    constructor(nm: string, age: number, w: string, c: string, a: string, wg: number);
}
declare class EmployeeWithDelegation {
    name: string;
    age: number;
    job: Job;
    constructor(w: Job, n: string, a: number);
}
declare const employee: Employee;
declare const job: Job;
declare const employeeWithDelegation: EmployeeWithDelegation;
declare type Ctor<T> = new (...args: any[]) => T;
declare type DelegateParams = {
    to: string;
    methods?: string[];
};
declare function _delegate<T extends Ctor<any>>(base: T, params: DelegateParams): Ctor<any>;
declare function delegate(...targets: Array<DelegateParams>): any;
declare const Delegator: Ctor<Job>;
declare class EmployeeWithEasyDelegation extends Delegator {
    name: string;
    age: number;
    job: Job;
    constructor(w: Job, n: string, a: number);
}
declare const employeeEasyDelegation: EmployeeWithEasyDelegation;
