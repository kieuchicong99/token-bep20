# Token BEP20

`Hardhat framework`

### Create .env

```
// https://docs.binance.org/smart-chain/developer/rpc.html
BSC_TESTNET_NETWORK_URL =
BSC_MAINNET_NETWORK_URL =

// Export from your wallet
WALLET_PRIVATE_KEY =

// https://bscscan.com/myapikey
BSC_SCAN_KEY =
```

### Install dependencies

```bash
npm i
```

### Compile
```bash
npx hardhat compile
```

### Deploy contract
deploy on bsc testnet 
```bash
npx hardhat run --network bsc_testnet scripts\deploy-testnet.js
```
deploy on bsc mainnet 
```bash
npx hardhat run --network bsc_mainnet scripts\deploy-mainnet.js
```



