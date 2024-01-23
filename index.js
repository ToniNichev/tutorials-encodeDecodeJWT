import jwt from "./jwt-services.js";
import keys from "./keys/keys.js";


const token = await jwt.sign();
console.log(`\n==================\nSIGN JWT\n==================\n ${token}`);



const v = await jwt.verify(token);
console.log(`\n==================\nVERIFY SIGNATURE\n==================\n`, v);


const d = await jwt.decode(token);
console.log(`\n==================\nDECODE\n==================\n`, d);
