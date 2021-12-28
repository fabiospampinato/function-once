
/* MAIN */

const once = <T> ( fn: (() => T) ): (() => T) => {

  let called = false;
  let result: T;

  return (): T => {

    if ( !called ) {

      called = true;
      result = fn ();

    }

    return result;

  };

};

/* EXPORT */

export default once;
