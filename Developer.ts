// namespace can be used to organize code
namespace Developer {
  export function coding(name: string) {
    console.log(`${name} starts coding...`);
  }
  export namespace Laptop {
    export function turnOn(name: string) {
      console.log(`${name} turns on laptop...`);
    }
  }
}

// See how to use in reference.ts