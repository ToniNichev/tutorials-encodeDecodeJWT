# How to install

## 1. Install dependencies
```
yarn install
```

## 2. Mac OS: Generate RS256 asymmetric public private key pair for JWT
1. Generate the Key Pair:
`openssl genrsa -out private_key.pem 2048`

2. Extract the Public Key
`openssl rsa -in private_key.pem -pubout -out public_key.pem`

3. Secure the Private Key with passphrase (optional but highly reccomended)
`openssl rsa -aes256 -in private_key.pem -out private_key_protected.pem`

## 3. Generate, verify and decode payload
```
yarn start
```