require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name remember machine slow gloom clog slot giant'; 
let testAccounts = [
"0xef581f032eb48ed12a0825541e734a84b16900e848b8e894c1612e09772ec0e7",
"0x8044dba621ab29619776082dc154d232ffafda462583e6b4eefc9f43b8a56ea4",
"0xfdaed94c58569659862538ca75226e518f91af61debf40f51e2e210d9149bf5e",
"0x445bdeb1067ff01cb20f569368797565d372853f6441727b8b0d3c1469e79e3f",
"0x1a31525b72447e524794671e132fe6d8f842b24543dedef0d42f796d80082591",
"0xb8d406080d9f4d4826e6cdddf97e755d390bf5172094eedd6e85d36831abcd64",
"0x34311cb4f5602fcba377eb742deb35ef9349aff27d28f8bb76f709fa52f62ec6",
"0x61f98d46a94134e048a2386e1f85e94d97206b2a9fcb278105aeaab591562c85",
"0x950797e3f3416cf7a9c745c3e2e2dae9e2393b91971e6686ca97edb607b192ae",
"0xb786c22fa8755600d8eeca2fc39964840405a7814d9127af03414d606a8ff755"
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

