//const ecc = require('eosjs-ecc')   // development only

/*
Private Key:	 5KRmMGXbzekFkVZbjHnP2NiTxU8roTyeMHMLJhTZMc61uPno7K1
Public Key:	 EOS5zVK6gKVUgpyfxQwE3d1yC6918ApGjyY9jjvrcp67ZzPKyfAWu
*/

//ecc.sign('I am alive', '5KRmMGXbzekFkVZbjHnP2NiTxU8roTyeMHMLJhTZMc61uPno7K1');


//console.log('Public Key:\t', ecc.verify(ecc.sign('I am alive', '5KRmMGXbzekFkVZbjHnP2NiTxU8roTyeMHMLJhTZMc61uPno7K1'),'I am alive', 'EOS5zVK6gKVUgpyfxQwE3d1yC6918ApGjyY9jjvrcp67ZzPKyfAWu'));
//console.log('Public Key:\t', ecc.privateToPublic(privateKey)) // EOSkey...
const Eos = require('eosjs');

const ecc = Eos.modules.ecc;

ecc.randomKey().then(privateKey => {
    console.log('privateKey: ', privateKey);
    const publicKey = ecc.privateToPublic(privateKey);
    console.log('publicKey: ', publicKey);
});


/*
ruelruel4444
{"msg": "succeeded", "keys": {
  "active_key":
      {"public": "EOS6GJ9Z95MmdR2NWpveKj6m36TvSCspXtnS76po1ATcJM8mGM4Wq", "private": "5HqmtdfCMMDP3NibQUAciFdYHYDQNkzgpJ74KMUCB61AGgUP58f"},
  "owner_key":
      {"public": "EOS8ebmupRYcqD5HkBHecGF5ZcERoNCfSQNHd3KgvSrtRXQji9Dso", "private": "5JMHD44myvu89EFTTcr6hwoQX1q8dRUnKd9KJ5Jm8oTUtKaygSK"}},
"account": "ruelruel4444"}

ruelruel5555
{"msg": "succeeded", "keys": {
    "active_key": {
        "public": "EOS82VckXwcJseE5XkBX5CgYzvJnyXUrNquffggW8hQGv4m1xdwHd", "private": "5KjGWhSKGhZVniufxW49tqzcgNrh7asvQnRNDTiWVEjj3iPRZhL"},
    "owner_key": {
        "public": "EOS8mqqwgSoQ8ZQThLGStXBScufkFUU9EwLKCHA7EgzXBbCu2iqoQ", "private": "5JpEQ2ohpzgFi57dYHrtBnbnmXHZzztceK71Mo231FZWEXDEA6b"}},
"account": "ruelruel5555"}

*/
