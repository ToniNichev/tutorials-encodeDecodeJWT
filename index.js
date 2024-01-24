import jwt from "./jwt-services-asymmetric.js";
//import jwt from "./jwt-services-symmetric.js";

const now = Math.round(new Date().getTime() / 1000);
const secret = "12345";

const signData = {
    issuer: 'Toni Nichev',
    subject: 'toni.nichev@gmail.com',
    audience: 'https://mysoftware-corp.com',
    expiresIn: "12h",
    algorithm: "RS256"
}

const date = new Date();
let dateStr = date.toString();

const payload = {
    "author": "Toni Y Nichev",
    "iat": now,
    "data": `New JWT generated at ${dateStr}`,
};


const token = await jwt.sign(signData, payload);
console.log(`\n==================\nSIGN JWT\n==================\n ${token}`);



const v = await jwt.verify(token, signData);
console.log(`\n==================\nVERIFY SIGNATURE\n==================\n`, v);


const d = await jwt.decode(token);
console.log(`\n==================\nDECODE\n==================\n`, d);
