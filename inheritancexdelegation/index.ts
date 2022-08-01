class Job {
  jobName: string;
  complexity: string;
  area: string;
  wage: number;
  constructor(w: string, c: string, a: string, wg: number) {
    this.area = a;
    this.jobName = w;
    this.wage = wg;
    this.complexity = c;
  }
}

class Employee extends Job {
  name: string;
  age: number;
  constructor(
    nm: string,
    age: number,
    w: string,
    c: string,
    a: string,
    wg: number
  ) {
    super(w, c, a, wg);
    this.name = nm;
    this.age = age;
  }
}

class EmployeeWithDelegation {
  name: string;
  age: number;
  job: Job;
  constructor(w: Job, n: string, a: number) {
    this.job = w;
    this.name = n;
    this.age = a;
  }
}

// NO DELEGATION
const employee = new Employee(
  'José',
  21,
  'Front End Developer',
  'intermediate',
  'Technology',
  2000
);

// DELEGATION
const job = new Job('Front End Developer', 'intermediate', 'Technology', 2000);

const employeeWithDelegation = new EmployeeWithDelegation(job, 'José', 21);

// EASY DELEGATION

type Ctor<T> = new (...args: any[]) => T;
type DelegateParams = { to: string; methods?: string[] };

function _delegate<T extends Ctor<any>>(
  base: T,
  params: DelegateParams
): Ctor<any> {
  abstract class AnyClass extends base {}

  params.methods?.forEach((method) => {
    const fnMap: { [key in string]: any } = {
      [method]() {
        return this[params.to][method];
      },
    };
    Object.defineProperty(AnyClass.prototype, method, {
      get: fnMap[method],
    });
    // (AnyClass.prototype as any)[method] = function (...args: unknown[]) {
    //   console.log(typeof this[params.to][method])
    //   if (typeof this[params.to][method] !== 'function') {
    //     return this[params.to][method];
    //   }
    //   return this[params.to][method](...args);
    // };
  });

  return AnyClass;
}

function delegate(...targets: Array<DelegateParams>): any {
  return targets.reduceRight((prev, cur) => {
    return _delegate(prev, cur);
  }, Object as Ctor<any>);
}

const Delegator: Ctor<Job> = delegate({
  to: 'job',
  methods: ['jobName', 'complexity', 'area', 'wage'],
});

class EmployeeWithEasyDelegation extends Delegator {
  name: string;
  age: number;
  job: Job;
  constructor(w: Job, n: string, a: number) {
    super();
    this.job = w;
    this.name = n;
    this.age = a;
  }
}

const employeeEasyDelegation = new EmployeeWithEasyDelegation(job, 'João', 44);

console.log(employeeEasyDelegation.jobName);
