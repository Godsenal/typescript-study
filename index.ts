type Listener = (...args: any[]) => void;

interface IEvents {
  [key: string]: Listener[];
}

interface IEventManager {
  on(event: string, listener: Listener): void;
  emit(event: string, ...args: any[]): void;
  remove(event: string, targetListener: Listener): void;
}

class EventManager implements IEventManager {
  private events: IEvents = {};
  public on(event: string, listener: Listener) {
    this.events[event]
      ? this.events[event].push(listener)
      : (this.events[event] = [listener]);
  }
  public emit = function emit(event: string, ...args: any[]) {
    const listeners = this.events[event];
    if (listeners) {
      listeners.forEach(listener => listener.apply(null, args));
    }
  };
  public remove(event: string, targetListener: Listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(
        listener => listener !== targetListener,
      );
    }
  }
}

const eventManager = new EventManager();

const handler = (a: string, b: string) => {
  console.log(a, b);
};
eventManager.on('hello', handler);

eventManager.emit('hello', 'a', 'b');

eventManager.remove('hello', handler);

eventManager.emit('hello');
