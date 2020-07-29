### `npm start`

### `npm test`


## Testing dengan Server https://reqres.in
Server Reqres.in tidak benar-benar memproses tramsaksi yang kita lakukan. Misalkan kita melakukan create data ke server, maka data tersebut tidak benar-benar disimpan di server mereka, namun server akan memberikan response yang sesuai seperti pada umumnya. Hal ini juga berlakuk pada transaksi update dan delete.

1. Install Axios dulu
`$ npm install --save axios`

2. Import axios di App.js