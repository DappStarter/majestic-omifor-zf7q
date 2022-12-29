require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remember unit harvest cricket symptom gasp'; 
let testAccounts = [
"0x4e9068431eee973ef1894382225fbec08ac184e339ff3e4f88cf4e3115e342ab",
"0x44d5bd28601fdd4d375b09ff5e0ee39ae9825b80a4285994c2b9b65f4eef1ac0",
"0x7da0ea58885d35b863896a2f9eec23fe9b0faace3c9a400e3de227a33f18c7d5",
"0x7b4dc4b7b23a7bdbb854146cdfcada2c29e85c246d3da5a22ae30b781d74407b",
"0x7e6ed2982bdc3f3e1fb0466048e6b8363745a2d1b325281c442ee67be042ef82",
"0x07422d7c1a9e52f0e556f4f9fa5b35288ba2e2fd89938fd8aeeaa86b5c26fc77",
"0xca9ef3eaf8b2e6af189c1eb1bf205a06dd6bb8e9efbc38c272bd3ab0e0d1b860",
"0xa7faeabb06ebce24bb36ac7dca5152d9d5e68916eda882e1c14250cb8ca5e1e4",
"0x62bd192b727ec20c7a316b84e31d0c3f0a402e8f8fece489eb4e28fec65b83d6",
"0xba37a16ca5cc752901e76ed869688bb66f381143868ab415c87bbca815895865"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

