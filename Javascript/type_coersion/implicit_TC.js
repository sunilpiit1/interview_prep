/** Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). */

/**while adding String gets the highest priority, then Number */
console.log(4 + 2 + "9");
console.log("array will become --> " + ["1", "2", "3"]);
console.log("Boolean true will become " + true);
console.log("" + undefined);
console.log("" + null);
console.log(true + ["1", "2", "3"]);

/**Number with Priority */
console.log(4 + true); // Since no string is there so Number gets the priority
console.log(false + null);

/**NOTE - Objects won't get converted to string */
console.log("\nObjects won't get converted to String");
console.log(String({ name: "Sunil Pal" }));

/**But in case of other Operators Number gets the priority over the String */

/**Loose Equality*/
console.log(false == "false");
console.log(false == 0);
console.log(false == "");
console.log(1 == "1");
