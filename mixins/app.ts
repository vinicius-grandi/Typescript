// type ClassConstructor<T> = new(...args: any[]) => T

// function withEZDebug<C extends ClassConstructor<{
//     getDebugValue(): object
// }>>(Class: C)  {
//         return class extends Class {
//             debug() {
//             let Name = Class.constructor.name
//             let value = this.getDebugValue()
//                 return Name + '(' + JSON.stringify(value) + ')'
//         }
//     }
// }

// class Teste {
//     medo() {
//        console.log('muito medo')
//     }
// }

// console.log(withEZDebug(Teste))