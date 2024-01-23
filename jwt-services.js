import jwt from "jsonwebtoken";
import fs from "fs";

const now = Math.round(new Date().getTime() / 1000);
const expirationTime = now + 500; // Set to 15 minutes (900 seconds)

const signData = {
  issuer: 'Toni Nichev',
  subject: 'toni.nichev@gmail.com',
  audience: 'https://mysoftware-corp.com',
  expiresIn: "12h",
  algorithm: "RS256"
}
const privateKey = fs.readFileSync('./keys/private_key.pem');
const publicKey = fs.readFileSync('./keys/public_key.pem');

const sign = async () => {
  // Create the JWT header and payload
  const header = {
    'alg': 'RS256',
    'typ': 'JWT'
  };

  const payload = {
    "author": "Toni Y Nichev",
    "iat": now,
    // "exp": expirationTime,
    "data": "Test is successfull!",
    //"iss": "ToniNichev"
  };

  // SIGNING OPTIONS
  const signOptions = {
    issuer: signData.issuer,
    subject: signData.subject,
    audience: signData.audience,
    expiresIn: signData.expiresIn,
    algorithm: signData.algorithm,
  };


  const token = jwt.sign(payload, privateKey, signOptions);
  return token;
}

const verify = async (token) => {
  // VERIFY OPTIONS
  const verifyOptions = {
    issuer: signData.issuer,
    subject: signData.subject,
    audience: signData.audience,
    expiresIn: signData.expiresIn,
    algorithm: signData.algorithm,
  };

  try {
    return jwt.verify(token, publicKey, verifyOptions);
  } catch (err) {
    console.log("Error: ", err);
    return false;
  }

}

const decode = async (token) => {
  return jwt.decode(token, {complete: true});
}
export default {
  sign,
  verify,
  decode,
}