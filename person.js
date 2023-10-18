type = "module";

////////
// Taking a look at Modules
// There are two types of Modules: Named Modules and Default Modules
// Going to create a file names person.js
// We will call the export function for each individual object then we will do them all at once at the bottom, a much faster approach.

//export const name = "Kyle";
//export const type = "A";

//Now we'll do them all at once. We'll block the above inline example and follow through with the below exmaple where they are all called at once.

const name = "Kyle";
const type = "A";

export { name, type };

