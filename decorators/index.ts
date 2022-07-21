import 'reflect-metadata';
// Factory - função que retorna a criação do decorator
// function logger(prefix: string) {
//   return (target: Foo) => {
//     console.log(`${prefix} - ${target}`)
//   };
// }

// @logger('lmao')
// class Foo {
//   static count() {
//     const res = [];
//     for (let i = 0; i < 10e4; i++) {
//       res.push(i);
//     }
//     console.log('Your countdown is finished');
//   }
// }

// function setAPIVersion(apiVersion: string) {
//   return (constructor: typeof API) => {
//     return class extends constructor {
//       #version = apiVersion
//     }
//   }
// }

// // decorator - anota versão da API
// @setAPIVersion('1.0')
// class API { }

// console.log(new API());

//  PROPERTY DECORATOR

// const formatMetadataKey = Symbol('format');

// function format(formatString: string) {
//   return Reflect.metadata(formatMetadataKey, formatString);
// }

// function getFormat(target: any, propertyKey: string) {
//   return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
// }

// class Greeter {
//   @format('Hello, %s')
//   greeting: string;

//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     let formatString = getFormat(this, 'greeting');
//     return formatString.replace('%s', this.greeting);
//   }
// }

// const greetings = new Greeter('Pedro');
// console.log(greetings.greet());

// METHOD DECORATOR

function delay(ms: number) {
  return (_target: Object, _key: string, descriptor: TypedPropertyDescriptor<() => void>) => {
    const originalMethod = descriptor.value as () => void;
    descriptor.value = function(...args: any) {
      console.log(`Delay: ${ms}`)
      setTimeout(() => originalMethod.apply(this, args), ms);
    };
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  // it receives delay decorator
  @delay(2000)
  greet() {
    console.log(`Hello ${this.greeting}`);
  }
}

// const littlePerson = new Greeter('Jorge');
// littlePerson.greet()

// PARAMETER DECORATOR

const requiredMetadataKey = Symbol('required');

function required(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  console.log(parameterIndex);
  const existingRequiredParameters: number[] =
    Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];

  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    requiredMetadataKey,
    existingRequiredParameters,
    target,
    propertyKey
  );
}

// function validate(
//   target: any,
//   propertyName: string,
//   descriptor: TypedPropertyDescriptor<(verbose: boolean) => string>
// ) {
//   const originalMethod = descriptor.value!;

//   descriptor.value = function (...args) {
//     const requiredParameters: number[] = Reflect.getOwnMetadata(
//       requiredMetadataKey,
//       target,
//       propertyName
//     );

//     console.log(arguments.length);

//     if (requiredParameters) {
//       for (let parameterIndex of requiredParameters) {
//         if (parameterIndex >= arguments.length || arguments[parameterIndex]) {
//           throw new Error('Missing required argument.');
//         }
//       }
//     }
//     return originalMethod.apply(this, args);
//   };
// }

class BugReport {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }

  print(@required verbose?: boolean, @required uselessParam?: string) {
    if (verbose) {
      return `type: ${this.type}\ntitle: ${this.title}`
    }
    return this.title;
  }
}

const report = new BugReport('ultra bonkers fail');
report.print();
