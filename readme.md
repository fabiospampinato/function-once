# Function Once

Wraps a function so that it's only ever executed once.

Note: `this` is always set to `undefined` and only functions that don't accept any arguments are supported, as using those with a function that's only ever executed once is practically just a footgun. If you need different `this` or different arguments you should probably use memoization instead.

## Install

```sh
npm install --save function-once
```

## Usage

```ts
import once from 'function-once';

const rand = once (() => Math.random ());

rand (); // => 0.3344627371267874
rand (); // => 0.3344627371267874
```

## License

MIT © Fabio Spampinato
