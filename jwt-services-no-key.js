import jwt from "jsonwebtoken";
import fs from "fs";

const now = Math.round(new Date().getTime() / 1000);
const expirationTime = now + 500; // Set to 15 minutes (900 seconds)


const sign = async (signData, payload, secret) => {
  // Create the JWT header and payload
  const header = {
    'alg': 'RS256',
    'typ': 'JWT'
  };


  const token = jwt.sign(payload, secret);
  return token;
}

const verify = async (token, signData, secret) => {

  try {
    return jwt.verify(token, secret);
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
