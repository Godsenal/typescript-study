const tuple: [number, string] = [10, 'tuple'];

tuple[2] = 11;
tuple[3] = 'tuple2';
// tuple[4] = false; error


interface KeyValuePair<K, V> extends Array<K | V> {
  0: K;
  1: V;
}

const example: KeyValuePair<string, number> = ['some string', 10];
