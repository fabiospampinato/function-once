
/* IMPORT */

import {describe} from 'fava';
import once from '../dist/index.js';

/* MAIN */

describe ( 'Once', it => {

  it ( 'works', t => {

    const rand = once ( () => Math.random () );
    const value = rand ();

    t.is ( rand (), value );
    t.is ( rand (), value );
    t.is ( rand (), value );

  });

});
