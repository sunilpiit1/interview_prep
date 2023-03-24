'use strict';

/**this won't get affected in strict mode */
console.log(a);
var a = 20;
var a = 30;
console.log(a);

/**but this will through the error */
b = 30;
console.log(b);

/**Video ref - https://www.youtube.com/watch?v=uqUYNqZx0qY */
