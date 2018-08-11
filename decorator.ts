// Before using decroator,
// Should set experimentalDecorators to true in config.

function log<T extends {new (...args:any[]): {}}>(target: T) {
  return class extends target {
    constructor(...args) {
      super(...args);
      console.log(`${target.name} arguments: ${args.toString()}`);
      target.constructor();
    }
  }
}
function deprecated(target: Object, name: string, descriptor: PropertyDescriptor) {
  const origin = descriptor.value;
  descriptor.value = function(...args: any[]) { // don't use arrow function here.
    console.log(`Deprecated: ${name} is deprecated.`);
    return origin.apply(this, args);
  }
  return descriptor;
}

@log
class Sport {
  constructor(public name: string) { }
  @deprecated
  classic(...stats: string[]) {
    console.log(`${stats.toString()} is classic!`);
  }
}

const baseball: Sport = new Sport('baseball');
baseball.classic('avg', 'wpct');
