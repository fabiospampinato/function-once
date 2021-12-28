
/* IMPORT */

const {describe} = require ( 'fava' );
const {default: once} = require ( '../dist' );

/* MAIN */

describe ( 'Once', it => {

  it ( 'works', t => {

    const rand = once (() => Math.random ());
    const value = rand ();

    t.is ( rand (), value );
    t.is ( rand (), value );
    t.is ( rand (), value );

  });

});
