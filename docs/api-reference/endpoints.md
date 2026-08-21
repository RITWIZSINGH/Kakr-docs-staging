---
title: Endpoint Index
sidebar_label: Endpoint Index
description: Every operation in the LiaaS Pteri Node API — headers, parameters, request bodies and real response shapes, mirrored from the Postman collection.
tags: [unverified]
---

Every operation the API serves, with the headers it takes, the body it expects, and — where one is
published — a real response.

This page mirrors the **[LiaaS – Pteri Node Postman collection](https://documenter.getpostman.com/view/32261269/2sA3QpDDwR)**,
which is the source of truth for the product API. Where it and the OpenAPI spec disagree, the
collection wins; see [Authentication](/docs/api-reference/authentication) for why.

## Every request carries these two headers

```
Authorization: Bearer <your-api-key>
Usev2: true
```

All 52 operations require both. Wallet-scoped calls add a `wallet` header naming the target wallet,
and operations touching key material add `encryptedPassphrase` or `mnemonics`.

## The response envelope

Every response uses the same wrapper:

```json
{ "successful": true, "message": "successfully retrieved wallet balance", "data": 0.0054834 }
```

`data` is polymorphic — an object, a string, an array, a number, or `null`, depending on the
operation. **Branch on `successful`, never on the HTTP status**: a failed operation still returns
`200`. See [Errors](/docs/api-reference/errors).


## Wallet

Create, load, encrypt and inspect wallets. A wallet is the container that holds addresses and key material.

<Endpoint method="GET" path="/api/Wallet/wallet-details">

Headers: `wallet`

Response:

```json
{
  "successful": true,
  "message": "successfully retrieved wallet info",
  "data": {
    "walletname": "PteriLocalwallet",
    "walletversion": 169900,
    "balance": 0.0054834,
    "unconfirmed_balance": 0,
    "immature_balance": 0,
    "txcount": 60,
    "keypoololdest": 1689087089,
    "keypoolsize": 1000,
    "keypoolsize_hd_internal": 1000,
    "unlocked_until": 0,
    "paytxfee": 0,
    "hdseedid": "73ce8a966539bf75c53b7dd819881d1fe76a3fcc",
    "private_keys_enabled": true
  }
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/wallet-transactions">

Headers: `wallet`

| Query parameter | Example |
| --- | --- |
| `count` | `10` |
| `skip` | `0` |
| `label` | `*` |

Response:

```json
{
  "successful": true,
  "message": "successfully retrieved wallet transactions",
  "data": [
    {
      "address": null,
      "category": "send",
      "amount": 0,
      "vout": 1,
      "fee": -1.96e-05,
      "confirmations": 21,
      "blockhash": "dd0230550facad5c9f7603e0051c923588dee2c4bcc0b19b328ec18a6af74cd2",
      "blockindex": 199,
      "blocktime": 1716548504,
      "txid": "fedd39bdc0e3ebbd356852b6a7756e5766e92b2cd314fbcc2b4483911fa3cfd1",
      "time": 1716548231,
      "timereceived": 1716548231,
      "bip125replaceable": null,
      "trusted": false,
      "abandoned": false,
      "label": null,
      "comment": null
    },
    {
      "address": "MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i",
      "category": "send",
      "amount": -0.0048804,
      "vout": 0,
      "fee": -1.96e-05,
      "confirmations": 21,
      "blockhash": "dd0230550facad5c9f7603e0051c923588dee2c4bcc0b19b328ec18a6af74cd2",
      "blockindex": 199,
      "blocktime": 1716548504,
      "txid": "fedd39bdc0e3ebbd356852b6a7756e5766e92b2cd314fbcc2b4483911fa3cfd1",
      "time": 1716548231,
      "timereceived": 1716548231,
      "bip125replaceable": null,
      "trusted": false,
      "abandoned": false,
      "label": "",
      "comment": null
    },
    {
      "address": "ltc1qevft9myraz435h2qdtu73jgssf8wks0u6uvgwt",
      "category": "receive",
      "amount": 2.94e-05,
      "vout": 2,
      "fee": 0,
      "confirmations": 9,
      "blockhash": "aff9b28097aea76c2aa34a260589e8b2831b536add1f8f79f1b3d774c600bbee",
      "blockindex": 120,
      "blocktime": 1716549653,
      "txid": "832fa264d637009f59f6b7eacdebea4769744c8d1717830d5427d6dfac4ef824",
      "time": 1716549511,
      "timereceived": 1716549511,
      "bip125replaceable": null,
      "trusted": false,
      "abandoned": false,
      "label": "Pteri node address",
      "comment": null
    },
    {
      "address": "MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i",
      "category": "receive",
      "amount": 0.0048306,
      "vout": 0,
      "fee": 0,
      "confirmations": 9,
      "blockhash": "aff9b28097aea76c2aa34a260589e8b2831b536add1f8f79f1b3d774c600bbee",
      "blockindex": 120,
      "blocktime": 1716549653,
      "txid": "832fa264d637009f59f6b7eacdebea4769744c8d1717830d5427d6dfac4ef824",
      "time": 1716549511,
      "timereceived": 1716549511,
      "bip125replaceable": null,
      "trusted": false,
      "abandoned": false,
      "label": "",
      "comment": null
    },
    {
      "address": "ltc1qevft9myraz435h2qdtu73jgssf8wks0u6uvgwt",
      "category": "send",
      "amount": -2.94e-05,
      "vout": 2,
      "fee": -2.04e-05,
      "confirmations": 9,
      "blockhash": "aff9b28097aea76c2aa34a260589e8b2831b536add1f8f79f1b3d774c600bbee",
      "blockindex": 120,
      "blocktime": 1716549653,
      "txid": "832fa264d637009f59f6b7eacdebea4769744c8d1717830d5427d6dfac4ef824",
      "time": 1716549511,
      "timereceived": 1716549511,
      "bip125replaceable": null,
      "trusted": false,
      "abandoned": false,
      "label": "Pteri node address",
      "comment": null
    },
    {
      "address": null,
      "category": "send",
      "amount": 0,
      "vout": 1,
      "fee": -2.04e-05,
      "confirmations": 9,
      "blockhash": "aff9b28097aea76c2aa34a260589e8b2831b536add1f8f79f1b3d774c600bbee",
      "blockindex": 120,
      "blocktime": 1716549653,
      "txid": "832fa264d637009f59f6b7eacdebea4769744c8d1717830d5427d6dfac4ef824",
      "time": 1716549511,
      "timereceived": 1716549511,
      "bip125replaceable": null,
      "trusted": false,
      "abandoned": false,
      "label": null,
      "comment": null
    },
    {
      "address": "MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i",
      "category": "send",
      "amount": -0.0048306,
      "vout": 0,
      "fee": -2.04e-05,
      "confirmations": 9,
      "blockhash": "aff9b28097aea76c2aa34a260589e8b2831b536add1f8f79f1b3d774c600bbee",
      "blockindex": 120,
      "blocktime": 1716549653,
      "txid": "832fa264d637009f59f6b7eacdebea4769744c8d1717830d5427d6dfac4ef824",
      "time": 1716549511,
      "timereceived": 1716549511,
      "bip125replaceable": null,
      "trusted": false,
      "abandoned": false,
      "label": "",
      "comment": null
    },
    {
      "address": "MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i",
      "category": "receive",
      "amount": 0.0033,
      "vout": 1,
      "fee": 0,
      "confirmations": 4,
      "blockhash": "7819411ce6e521a019cab7531b34cc99266c935ad2a6d154ff091a948e417bd9",
      "blockindex": 18,
      "blocktime": 1716549987,
      "txid": "4a53ee1556ee5094b28cea366733ed8e3a115f27d8818f7bb482610d062f22fe",
      "time": 1716549958,
      "timereceived": 1716549958,
      "bip125replaceable": null,
      "trusted": false,
      "abandoned": false,
      "label": "",
      "comment": null
    },
    {
      "address": "MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i",
      "category": "send",
      "amount": -0.0033,
      "vout": 1,
      "fee": -3.06e-05,
      "confirmations": 4,
      "blockhash": "7819411ce6e521a019cab7531b34cc99266c935ad2a6d154ff091a948e417bd9",
      "blockindex": 18,
      "blocktime": 1716549987,
      "txid": "4a53ee1556ee5094b28cea366733ed8e3a115f27d8818f7bb482610d062f22fe",
      "time": 1716549958,
      "timereceived": 1716549958,
      "bip125replaceable": null,
      "trusted": false,
      "abandoned": false,
      "label": "",
      "comment": null
    },
    {
      "address": "ltc1qacpd5jjtjd90fzfcajhzheys6h2g5958v9e4py",
      "category": "send",
      "amount": -0.0015,
      "vout": 0,
      "fee": -3.06e-05,
      "confirmations": 4,
      "blockhash": "7819411ce6e521a019cab7531b34cc99266c935ad2a6d154ff091a948e417bd9",
      "blockindex": 18,
      "blocktime": 1716549987,
      "txid": "4a53ee1556ee5094b28cea366733ed8e3a115f27d8818f7bb482610d062f22fe",
      "time": 1716549958,
      "timereceived": 1716549958,
      "bip125replaceable": null,
      "trusted": false,
      "abandoned": false,
      "label": null,
      "comment": null
    }
  ]
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/create-encrypted-wallet">

Request body:

```json
{
  "wallet_name": "PteriNodeTest"
}
```

Response:

```json
{
  "successful": true,
  "message": "successfully created encrypted wallet with mnemonics and encrypted passphrase",
  "data": {
    "name": "PteriNodeTest 790621",
    "warning": "",
    "mnemonics": "inject edge multiply athlete rookie wood bargain reopen device range estate join PteriNodeTest 790621",
    "encryptedPassphrase": "RZuP/t0ECZmaLgogbcTlqVRTG+2vlRE7QfgT8bNkvn4VLapBoIOxhgRcELdcJWoe1+xp6p0dPiHq3sfMsSulSwOID5CIDo2iER4Qy9ohnMBHevl/k/IrBg=="
  }
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/create-importable-encrypted-wallet">

Request body:

```json
{
  "wallet_name": "PteriNodeTest"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/createwallet">

Request body:

```json
{
  "wallet_name": "PteriNodeTest2"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/create-importable-wallet">

Request body:

```json
{
  "wallet_name": "PteriNodeTest2"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/load-wallet">

Request body:

```json
{
  "filename": "PteriLocalwallet"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/import-wallet">

Request body:

```json
{
  "newWalletName": "<string>",
  "mnemonics": "<string>"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/encryptwallet">

Headers: `wallet`

Request body:

```json
{
  "passphrase": "Not him old music think his found enjoy merry Listen acuteness dependent mine gate"
}
```

Response:

```json
{
  "successful": true,
  "message": "wallet encrypted; The keypool has been flushed and a new HD seed was generated (if you are using HD). You need to make a new backup.",
  "data": "hplXY6iP7iFFrjH5h4lLebN5hN9xYqLe9nUfFNoCJ+lFqYs/Ihf1VfXlqIwaO8kceEuw/w4ujvyBdYn2p+6aw5KVeYZ5vvxV8CwiuSSxPBKPAYLYvKSjAg=="
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/get-wallet-balance">

Headers: `wallet`

Response:

```json
{
  "successful": true,
  "message": "successfully retrieved wallet balance",
  "data": 0.0054834
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/get-wallet-addresses">

Headers: `wallet`

Response:

```json
{
  "successful": true,
  "message": "successfully retrieved addresses",
  "data": [
    {
      "address": "M9uSxjegzQ9NXmAWLtdEQbWV4fzg6BJmkd",
      "amount": 0.0404399,
      "confirmations": 8691,
      "label": "",
      "txids": [
        "6dd15bf515749c74d256d86ab85a4691aaab71735288cc3df01ed099b751e918",
        "689c8b48389b9c73444fe069bdc0c0de7f1f3089e6eccba16a4b15bd3d598d1c",
        "867b4f7e0dafe5e9fb6a81ba551334a89c202e0cd94f040d9b0bc36437785021",
        "57058eb5b7b56fb94dd74f182bd503a303685c64d19d43f17d4040dc3666db24",
        "ee7cb27d202f6c1d0c98fd3dca4a22be76d84ad64867508a909dc55042946e28",
        "010ea4d6796d542a9c2315098c550b91211db96629279978ee5fdae0f1206d2d",
        "2f04550fb92f80724b685a1161ae2e3d87e1a75d09abe2a431fd02173a84e050",
        "2f04550fb92f80724b685a1161ae2e3d87e1a75d09abe2a431fd02173a84e050",
        "9b41c895e9025da07a91f64d0f1dd90ad47ea9979a873cd5eb733b1aa8602557",
        "9b41c895e9025da07a91f64d0f1dd90ad47ea9979a873cd5eb733b1aa8602557",
        "5470567c4e928baa02259428460515a7db769344c52c287d38e4e00e38cf4363",
        "7b049672d50652c47d261c51124d99253dde9019836cf031fb8785824224ec63",
        "e1bcdfb13b03df3f807031df1103d05eb9f59a6fbff968e89fd9fe1809a99e7d",
        "cc95eec0daa9aaaa533a4f576911cc34120d59a9efa2930953d80048e27cdf7f",
        "33262ab5fe69dc7e96b94af8bb5a629e4e73011b1e30dc9b04c9993c47db3688",
        "6e1852253a46ea00203a739ebfb0d2912b0b6434ef3ca64649ccad7ef9a2dc8f",
        "4be02cf8c8c3b928c344030d69ed8bbe58ee3761b3c60df7db924ea4a49dc090",
        "0827f77e77037ef3f2624681481f13dac74013170e19c376d7fca76082b30291",
        "7a640be99bb4cf281f34479ec8ae0c7fed18679bbd7c953b0a237514347fac97",
        "0c41d75e15a2a1089146057eaa33ac4d168ff42904bc7b1bfaf4748a1b778d98",
        "291e286d2b26c6e3985569bb054ce298ab1d227cbb04d0f923b0122b01bc1f9c",
        "f7e7dafebd113ba208139ccd25666ac69d5742def267bb3827a824dc0f76f8ad",
        "4644ad2bbc42da7d2d74646ee927e6fa08fcdb1f1befc3e7f044deaf4c02b8cc",
        "daf1d06db6f1dbf10a7477756992d9aa628a754143d9396b01ce642d175822d8",
        "8d64bf2467dd9402b04b1a4f8e95921af7ec5316de0d41d9b69f305d1c883dd8",
        "905ef6904801493f473de503832c5465c2ebcfbfbf024d6e6e758fb11509e7d9",
        "4bddb3dc19f19627e6f3a227753905003a34f4dfb88928a5afcb8ace896fdbda",
        "2185398ad14be9ba6767e0da4ca9c3778b34baa3825b0081e361cf0a554bc2e6",
        "2185398ad14be9ba6767e0da4ca9c3778b34baa3825b0081e361cf0a554bc2e6",
        "1c4555cb657ee917a84255f5ee8ef5c2c8cb39d89b9f2898de71530948c491ea",
        "1ac534817921cf9e04898b8f10dc498fe6710d5aeb2c13a5eb9fdfa8cbc0cdf8",
        "9767a30aa95a20ab49b9eece60bb62e19cfe16674db13e209f0e34b6518324fd"
      ]
    },
    {
      "address": "MDKNZVMc1iNL4mT46gm2xh8ynCwUWLQuUP",
      "amount": 0.000162,
      "confirmations": 177723,
      "label": "",
      "txids": [
        "d91b01618d3ad98054e8298d0c44c0b908b4a196b05cd166f6294199ab22d42f",
        "3c79347df68f279a0f47bf0cbf87ac9e7be858b509f98b1637580e699b641f3e",
        "63b7d0f66c6968f84181565d0ef27a3b39df2b8aadd27faf2574c65715f27083"
      ]
    },
    {
      "address": "MFonfgf5LRukiaGvxs2ANLoDSxP827yetv",
      "amount": 0.0065214,
      "confirmations": 50126,
      "label": "fagret",
      "txids": [
        "9b24e5479675d922d16e3699fe88177afe382200ed0cb2da6c9cd91140d80531",
        "e378f001b985c5a262a6630f66bff8b5f98af17f7b7b4c49fe6e91fd83192c35",
        "bb8e750cc76a8bdc54abac4bab96d5c81b6375aac1d8aaf10e51ed86b51f6a73",
        "6afd0ef7bbee80e3fc305cdf3072fb6770fb6c9546dfd510194f75aeaeac3b7a",
        "f7e7dafebd113ba208139ccd25666ac69d5742def267bb3827a824dc0f76f8ad",
        "19205cd1846f38bbe4c2e5d2d0cad46897c4dd1752e14959c25b3e4bf35cfcaf"
      ]
    },
    {
      "address": "MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i",
      "amount": 0.0429684,
      "confirmations": 8,
      "label": "",
      "txids": [
        "40ce8ca49ad9072e90888f5bf274313dda383a62dba79c42bbdeff8149638d07",
        "d2f83d60e8e34ef5894014439bee0e1013547704043b3c651189447aae928a15",
        "689c8b48389b9c73444fe069bdc0c0de7f1f3089e6eccba16a4b15bd3d598d1c",
        "832fa264d637009f59f6b7eacdebea4769744c8d1717830d5427d6dfac4ef824",
        "fde6f901c76a718c2608009e2b4b97a6f48fa49f2e4a3981d8c1cc5ceb0be330",
        "7b98f815355112bb21aed98be8ed2ad76741bfed39c20358b5687fb206433338",
        "cafaecd8daeafe9415628cd74435b9a0ad12aeb0708b486615dde258e2ee9751",
        "495eb4f885bc6d6511f86e6aa543a0e712af29e14cc625def141c2b7c54b1e60",
        "495eb4f885bc6d6511f86e6aa543a0e712af29e14cc625def141c2b7c54b1e60",
        "a9919402164b4d7cbbcacfdf593ed05be0bdea7154eae95a8616678c95a5686e",
        "401d36838f90ecc8e35d594d86ff63bf2adfa21bbbf02bd1d65541b3e97c9586",
        "33262ab5fe69dc7e96b94af8bb5a629e4e73011b1e30dc9b04c9993c47db3688",
        "71487866490171ea6e51fd77cd66bcafe430dc8ec96392cc717d92c0a532bd96",
        "291e286d2b26c6e3985569bb054ce298ab1d227cbb04d0f923b0122b01bc1f9c",
        "ca74a8ff48e0f2201d2737b9ac33d7f2da875115392c9d5b45aac047df6c00ae",
        "ca74a8ff48e0f2201d2737b9ac33d7f2da875115392c9d5b45aac047df6c00ae",
        "c2d4a5d935231dd84500d4de1f3863671e34bcd4a2efaf797af085cf3ef4c7b0",
        "a9c1638bd256d350914e07480b5a81b70cbc0629bb85f57b247ff849f9a0cabc",
        "047061a703ea139c425ffafbf3353db0eb283b5caf5c1eb864ec63761385b3bf",
        "cf9635b3adf5ee0dffe0bf6bd512e057ff4b118da46266fd4f5deac7953097c7",
        "fedd39bdc0e3ebbd356852b6a7756e5766e92b2cd314fbcc2b4483911fa3cfd1",
        "18cef2ee76c2ea8eaa71babff3fae89b402a7c32d8748afab12cd9b9ed7c81d3",
        "905ef6904801493f473de503832c5465c2ebcfbfbf024d6e6e758fb11509e7d9",
        "6cfae10a1826986904d1524cba8debd1c746e4887587f8f5946c3ddd58f93edf",
        "4a53ee1556ee5094b28cea366733ed8e3a115f27d8818f7bb482610d062f22fe"
      ]
    },
    {
      "address": "ltc1qevft9myraz435h2qdtu73jgssf8wks0u6uvgwt",
      "amount": 0.0001294,
      "confirmations": 13,
      "label": "Pteri node address",
      "txids": [
        "832fa264d637009f59f6b7eacdebea4769744c8d1717830d5427d6dfac4ef824",
        "fedd39bdc0e3ebbd356852b6a7756e5766e92b2cd314fbcc2b4483911fa3cfd1"
      ]
    }
  ]
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/get-official-address">

Headers: `wallet`

Response:

```json
{
  "successful": true,
  "message": "successfully retrieved address",
  "data": "MKtPUHNfw6JteCDrUwaUcsDVK9tvJHT5g5"
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/sign-message">

Headers: `wallet`, `passPhrase`

Request body:

```json
{
  "address": "LZaJcrXLPQAqUdjjjnuz7obyCP8hszgedX",
  "message": "Pteri Node test"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/change-passphrase">

Headers: `wallet`

Request body:

```json
{
  "oldpassphrase": "Not him old music think his found enjoy merry Listen acuteness dependent mine gate",
  "newpassphrase": "Yes him old music think his found enjoy merry Listen acuteness dependent mine slate"
}
```

Response:

```json
{
  "successful": true,
  "message": "successfully changed wallet passphrase, check data for cipher text",
  "data": "qfYJSxRVv3RFrjH5h4lLebN5hN9xYqLe9nUfFNoCJ+lFqYs/Ihf1VfXlqIwaO8kceEuw/w4ujvyBdYn2p+6aw5KVeYZ5vvxV/RZF9FC3leUMByi5iKYclg=="
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/default-address" note="default-address">

Headers: `mnemonics`

| Query parameter | Example |
| --- | --- |
| `addressType` | `2` |

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/default-address-v2" note="default-address-v2">

Headers: `mnemonics`

| Query parameter | Example |
| --- | --- |
| `addressType` | `2` |

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>


## Address

Create addresses inside a wallet, read their balances and transactions, and retrieve key material.

<Endpoint method="GET" path="/api/Address/Address-txs">

| Query parameter | Example |
| --- | --- |
| `Address` | `M8dkqxpHD7ZQRZrp7URmzu3Dwh2YxrJyd6` |
| `skip` | `0` |
| `take` | `25` |

Response:

```json
{
  "successful": true,
  "message": "successfully retrieved address transactions",
  "data": {
    "message": "successful operation",
    "data": [
      {
        "tx_hash": "f153dceb127cb048a0b630b1e276b4bc676dd4d86d60e737e2d1c318aaebcbb6",
        "height": 2771101
      },
      {
        "tx_hash": "49eef4e3c123b9294b6bbf096f5caec0308677a885de2c5fd741b2e5a6ea97f3",
        "height": 2769931
      },
      {
        "tx_hash": "f933f05d50644e15b7bb30c8f16fa8c32e6365e838ddb0d3b0ac0301a92874e6",
        "height": 2769335
      },
      {
        "tx_hash": "b600b1d937ad19f6a6126bdaf278df63593e8771478519fb11e53268fe5d1293",
        "height": 2766997
      },
      {
        "tx_hash": "f0ff57d90ada62161015e2ed95cd2c287e3de9c8ae7c3c8028aeee19bf283f1a",
        "height": 2766610
      },
      {
        "tx_hash": "4462ae7c22a689c52f37982fa4082f9c03dbd584777fc054e25d7bd239a3b0e0",
        "height": 2765994
      }
    ],
    "successful": true
  }
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Address/Address-balance">

| Query parameter | Example |
| --- | --- |
| `Address` | `M8dkqxpHD7ZQRZrp7URmzu3Dwh2YxrJyd6` |

Response:

```json
{
  "successful": true,
  "message": "successfully retrieved address balance",
  "data": {
    "confirmed": 0.00061,
    "unconfirmed": 0
  }
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Address/get-address-privatekey">

Headers: `wallet`, `encryptedPassphrase`

| Query parameter | Example |
| --- | --- |
| `Address` | `MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i` |

Response:

```json
{
  "successful": true,
  "message": "successfully retrieved Address private key",
  "data": "T7moaqmPjNCZKAyTNtsCo5XQFLPqpFoqvZ4JETGWvN5yz7tMm6X4"
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Address/get-address-privatekey-v2">

Headers: `wallet`, `mnemonics`

| Query parameter | Example |
| --- | --- |
| `Address` | `MN2ATaeUH2DH9oP3w3cJVHPrr7hPJwLdmx` |

Response:

```json
{
  "successful": true,
  "message": "successfully retrieved Address private key",
  "data": "TAKW9TNkrs95994FojkUMZc4U9tVjPTNqu8UbZ2GsThVsm4xTeye"
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Address/Details">

Headers: `wallet`

| Query parameter | Example |
| --- | --- |
| `Address` | `MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i` |

Response:

```json
Access token is missing. Please include a valid JWT token in the Authorization header with the format: Bearer <token>
```

</Endpoint>

<Endpoint method="GET" path="/api/Address/screen-address">

| Query parameter | Example |
| --- | --- |
| `Address` | `MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i` |

Response:

```json
{
  "successful": true,
  "message": "successfully retrieved address details",
  "data": {
    "isvalid": true,
    "address": "MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i",
    "scriptPubKey": "a914e030c20e0fdae47392b8d88a311a6c4201c7168a87",
    "isscript": true,
    "iswitness": false,
    "ismweb": false
  }
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Address/external-address-details">

Headers: `wallet`

| Query parameter | Example |
| --- | --- |
| `Address` | `MEMMHwftP2zjeUovBxbpWJdkxujT7QeKsG` |

Response:

```json
{
  "successful": true,
  "message": "successfully retrieved address details",
  "data": {
    "success": true,
    "txouts": 0,
    "height": 0,
    "bestblock": null,
    "unspents": [
      {
        "txid": "50951df4d79b385319c9ed036918f1c6719a4206fbd9e8f490003dd01f564802",
        "vout": 0,
        "scriptPubKey": "a91446c4cd77dffd91d09cada4529dbb19661cf5efe987",
        "desc": "addr(MEMMHwftP2zjeUovBxbpWJdkxujT7QeKsG)#tsd95ghr",
        "amount": 0.001,
        "height": 2547587
      },
      {
        "txid": "dddf8b6fa542484417c16e4a92ea58fcad92a842e4340fc64168ed91f0f10a37",
        "vout": 1,
        "scriptPubKey": "a91446c4cd77dffd91d09cada4529dbb19661cf5efe987",
        "desc": "addr(MEMMHwftP2zjeUovBxbpWJdkxujT7QeKsG)#tsd95ghr",
        "amount": 5.4e-05,
        "height": 2547690
      },
      {
        "txid": "6e1852253a46ea00203a739ebfb0d2912b0b6434ef3ca64649ccad7ef9a2dc8f",
        "vout": 2,
        "scriptPubKey": "a91446c4cd77dffd91d09cada4529dbb19661cf5efe987",
        "desc": "addr(MEMMHwftP2zjeUovBxbpWJdkxujT7QeKsG)#tsd95ghr",
        "amount": 5.4e-05,
        "height": 2566821
      },
      {
        "txid": "06a218aa2d5cc51bc6e01d46a5a4bfe3ffc0f65078d6b4a574d8d42b8676fc93",
        "vout": 2,
        "scriptPubKey": "a91446c4cd77dffd91d09cada4529dbb19661cf5efe987",
        "desc": "addr(MEMMHwftP2zjeUovBxbpWJdkxujT7QeKsG)#tsd95ghr",
        "amount": 5.4e-05,
        "height": 2547588
      },
      {
        "txid": "2f18a12b96964931fbccf6ce3736c97b52a9a97c1e6546ce752d9de75b5e21d4",
        "vout": 7,
        "scriptPubKey": "a91446c4cd77dffd91d09cada4529dbb19661cf5efe987",
        "desc": "addr(MEMMHwftP2zjeUovBxbpWJdkxujT7QeKsG)#tsd95ghr",
        "amount": 5.4e-05,
        "height": 2545437
      },
      {
        "txid": "75302c11a795c005fd392a8371457d59a4ff4b56a254b0bdce7b3a431b87bce2",
        "vout": 0,
        "scriptPubKey": "a91446c4cd77dffd91d09cada4529dbb19661cf5efe987",
        "desc": "addr(MEMMHwftP2zjeUovBxbpWJdkxujT7QeKsG)#tsd95ghr",
        "amount": 0.0027782,
        "height": 2545487
      }
    ],
    "total_amount": 0.0039942
  }
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Address/createAddress">

Headers: `wallet`, `encryptedPassphrase`

Request body:

```json
{
  "label": "Pteri node address",
  "addressType": "3"
}
```

Response:

```json
{
  "successful": true,
  "message": "successfully created address",
  "data": {
    "privateKey": "T5GbU1zHBRmizjRwogkA5q9SpvBVnPNfc7Rb3G7Z68Wjruj9GoQW",
    "address": "MTbYA3YVCB8trdFu2dTiheSmiHaSTkEJ4P"
  }
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Address/generate-default-address">

Headers: `wallet`, `encryptedPassphrase`

Request body:

```json
{
  "label": "String",
  "addressType": "4"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Address/create-multi-sig-address">

Headers: `wallet`

Request body:

```json
{
  "nrequired": "<integer>",
  "addresses": "<string>",
  "description": "<string>",
  "address_type": "<integer>"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>


## Litecoin

Build, sign, combine and broadcast transactions. The `wallet-transaction-builder` family does build-sign-broadcast in one call.

<Endpoint method="GET" path="/api/Litecoin/AddressBalance">

Headers: `wallet`

| Query parameter | Example |
| --- | --- |
| `Address` | `MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i` |

Response:

```json
{
  "successful": true,
  "message": "successful operation",
  "data": 0.0021000002
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Litecoin/Transactions">

| Query parameter | Example |
| --- | --- |
| `Address` | `MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i` |
| `wallet` | `PteriLocalwallet` |

Response:

```json
{
  "successful": true,
  "message": "successful operation",
  "data": [
    {
      "address": "MULa1Af6g7s4EJ8YhdHtLWsPeZY4uk6Z7i",
      "amount": 0.0348378,
      "confirmations": 12,
      "label": "",
      "txids": [
        "40ce8ca49ad9072e90888f5bf274313dda383a62dba79c42bbdeff8149638d07",
        "d2f83d60e8e34ef5894014439bee0e1013547704043b3c651189447aae928a15",
        "689c8b48389b9c73444fe069bdc0c0de7f1f3089e6eccba16a4b15bd3d598d1c",
        "fde6f901c76a718c2608009e2b4b97a6f48fa49f2e4a3981d8c1cc5ceb0be330",
        "7b98f815355112bb21aed98be8ed2ad76741bfed39c20358b5687fb206433338",
        "cafaecd8daeafe9415628cd74435b9a0ad12aeb0708b486615dde258e2ee9751",
        "495eb4f885bc6d6511f86e6aa543a0e712af29e14cc625def141c2b7c54b1e60",
        "495eb4f885bc6d6511f86e6aa543a0e712af29e14cc625def141c2b7c54b1e60",
        "a9919402164b4d7cbbcacfdf593ed05be0bdea7154eae95a8616678c95a5686e",
        "401d36838f90ecc8e35d594d86ff63bf2adfa21bbbf02bd1d65541b3e97c9586",
        "33262ab5fe69dc7e96b94af8bb5a629e4e73011b1e30dc9b04c9993c47db3688",
        "71487866490171ea6e51fd77cd66bcafe430dc8ec96392cc717d92c0a532bd96",
        "291e286d2b26c6e3985569bb054ce298ab1d227cbb04d0f923b0122b01bc1f9c",
        "ca74a8ff48e0f2201d2737b9ac33d7f2da875115392c9d5b45aac047df6c00ae",
        "ca74a8ff48e0f2201d2737b9ac33d7f2da875115392c9d5b45aac047df6c00ae",
        "c2d4a5d935231dd84500d4de1f3863671e34bcd4a2efaf797af085cf3ef4c7b0",
        "a9c1638bd256d350914e07480b5a81b70cbc0629bb85f57b247ff849f9a0cabc",
        "047061a703ea139c425ffafbf3353db0eb283b5caf5c1eb864ec63761385b3bf",
        "cf9635b3adf5ee0dffe0bf6bd512e057ff4b118da46266fd4f5deac7953097c7",
        "fedd39bdc0e3ebbd356852b6a7756e5766e92b2cd314fbcc2b4483911fa3cfd1",
        "18cef2ee76c2ea8eaa71babff3fae89b402a7c32d8748afab12cd9b9ed7c81d3",
        "905ef6904801493f473de503832c5465c2ebcfbfbf024d6e6e758fb11509e7d9",
        "6cfae10a1826986904d1524cba8debd1c746e4887587f8f5946c3ddd58f93edf"
      ]
    }
  ]
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Litecoin/Create-Raw-LTC-Transactions">

Headers: `wallet`

Request body:

```json
{
  "senderAddress": "MP3mxhKBUhqW7THhwws7ymCPppbNCZZefE",
  "recipientAddress": "ltc1qacpd5jjtjd90fzfcajhzheys6h2g5958v9e4py",
  "amount": 0.0015
}
```

Response:

```json
{
  "successful": true,
  "message": "successfully created raw transaction",
  "data": "020000000124f84eacdfd627540d8317178d4c746947eaebcdeab7f6599f0037d664a22f830000000000ffffffff02f049020000000000160014ee02da4a4b934af48938ecae2be490d5d48a1687100905000000000017a914e030c20e0fdae47392b8d88a311a6c4201c7168a8700000000"
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Litecoin/Create-Raw-LTC-Transactions-v2">

Request body:

```json
{
  "senderAddress": "MVcDQcjCN29xbYkjGS33oSBJbBsY4727Kh",
  "recipientAddress": "MRF4bNrksBJKs2qtPabYm3uG3Y16k7uHau",
  "amount": 0.0001,
  "utxos": [
    "95c78a598de917d4cbc3ccb21541fc5b98d25187845f6daae1a9696bf3f1c106"
  ],
  "vouts_n": [
    1
  ]
}
```

Response:

```json
{
  "successful": true,
  "message": "successfully created raw transaction",
  "data": "0200000001363ec31c41e14fb5398b121169bb53930249b365dcaedc0d401f83cfd533cc450100000000ffffffff02102700000000000017a914be3dc0208887bd43dea41b7cc2e93c2f04f3d8a98750ec0e000000000017a914ee1e58c6546cfaed5ee97ccb5301e846dd29b1f08700000000"
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Litecoin/Create-Raw-LTC-Transactions-V3">

Headers: `wallet`

Request body:

```json
{
  "senderAddress": "MP3mxhKBUhqW7THhwws7ymCPppbNCZZefE",
  "recipientAddress": "ltc1qacpd5jjtjd90fzfcajhzheys6h2g5958v9e4py",
  "serviceFeeAddress": "ML6FVXAnqsjwUpibC8imvYSb9bNuFCpxQ6",
  "serviceFeeAmount": 0.0001,
  "amount": 0.0015
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Litecoin/sign-Raw-LTC-Transactions">

Headers: `wallet`

Request body:

```json
{
  "addressPrivateKey": "T7moaqmPjNCZKAyTNtsCo5XQFLPqpFoqvZ4JETGWvN5yz7tMm6X4",
  "txhash": "020000000124f84eacdfd627540d8317178d4c746947eaebcdeab7f6599f0037d664a22f830000000000ffffffff02f049020000000000160014ee02da4a4b934af48938ecae2be490d5d48a1687100905000000000017a914e030c20e0fdae47392b8d88a311a6c4201c7168a8700000000"
}
```

Response:

```json
{
  "successful": true,
  "message": "successfully signed raw transaction with minimum required signatures",
  "data": "0200000000010124f84eacdfd627540d8317178d4c746947eaebcdeab7f6599f0037d664a22f830000000017160014fc8f377ee58affc095a679a78aeb8748d93cbdf1ffffffff02f049020000000000160014ee02da4a4b934af48938ecae2be490d5d48a1687100905000000000017a914e030c20e0fdae47392b8d88a311a6c4201c7168a870247304402205e0cbab47b26fa6172952928487b6c23b3eeab11bd4681c2ae14790fa18fdf5a0220083ea3018b2bcd5fd5384eee38b3550123f8885724431c67a6973f6a3d48163b0121026349a4a72ffe9bc44b28fa7caae460d60a93b56a9d110ae9129c79c3c4910dba00000000"
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Litecoin/sign-multisig-tx">

Headers: `wallet`

| Query parameter | Example |
| --- | --- |
| `MultisigAddress` | `<string>` |

Request body:

```json
{
  "addressPrivateKey": "<string>",
  "txhash": "<string>"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Litecoin/Combine-Transactions">

Headers: `wallet`

Request body:

```json
{
  "partialTransactionIds": "<string>"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Litecoin/broadcast-transactions">

Headers: `wallet`

Request body:

```json
{
  "signedTxHash": "0200000000010124f84eacdfd627540d8317178d4c746947eaebcdeab7f6599f0037d664a22f830000000017160014fc8f377ee58affc095a679a78aeb8748d93cbdf1ffffffff02f049020000000000160014ee02da4a4b934af48938ecae2be490d5d48a1687100905000000000017a914e030c20e0fdae47392b8d88a311a6c4201c7168a870247304402205e0cbab47b26fa6172952928487b6c23b3eeab11bd4681c2ae14790fa18fdf5a0220083ea3018b2bcd5fd5384eee38b3550123f8885724431c67a6973f6a3d48163b0121026349a4a72ffe9bc44b28fa7caae460d60a93b56a9d110ae9129c79c3c4910dba00000000"
}
```

Response:

```json
{
  "successful": true,
  "message": "successfully broadcast transaction",
  "data": "4a53ee1556ee5094b28cea366733ed8e3a115f27d8818f7bb482610d062f22fe"
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Litecoin/wallet-transaction-builder">

Headers: `wallet`, `encryptedpassphrase`

Request body:

```json
{
  "toAddress": "LZaJcrXLPQAqUdjjjnuz7obyCP8hszgedX",
  "amount": "0.0015",
  "transactionDescription": "send transaction to anotjer wallet",
  "recipientName": "TrustP",
  "amountIncludeFees": false
}
```

Response:

```json
{
  "successful": true,
  "message": "successfully transferred funds from the specified wallet to specified address",
  "data": "c3df93ab57bd5db745f5fc12b702309c7ecb51bdde206a4a5c29de19ed4a5d7a"
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Litecoin/wallet-transaction-builder-v2">

Headers: `wallet`, `encryptedpassphrase`

Request body:

```json
{
  "toAddress": "LZaJcrXLPQAqUdjjjnuz7obyCP8hszgedX",
  "serviceFeeAddress": "ltc1q8y225kcj49a6swgypc6vp8ll57872hr3ysey6g",
  "serviceFeeAmount": 0.0001,
  "amount": "0.0015",
  "transactionDescription": "send transaction to anotjer wallet",
  "recipientName": "TrustP",
  "amountIncludeFees": false
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Litecoin/wallet-transaction-builder-v3">

Headers: `wallet`, `encryptedpassphrase`

Request body:

```json
{
  "toAddress": "LZaJcrXLPQAqUdjjjnuz7obyCP8hszgedX",
  "serviceFeeAddress": "ltc1q8y225kcj49a6swgypc6vp8ll57872hr3ysey6g",
  "serviceFeeAmount": 0.0001,
  "changeAddress": "ltc1quzxnyht082fddu7lwlx2ecgxgu9qacfa0jenxa",
  "amount": "0.0015",
  "transactionDescription": "send transaction to anotjer wallet",
  "recipientName": "TrustP",
  "amountIncludeFees": false
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Litecoin/wallet-transaction-builder-v4">

Headers: `wallet`, `encryptedpassphrase`

Request body:

```json
{
  "toAddress": "LZaJcrXLPQAqUdjjjnuz7obyCP8hszgedX",
  "changeAddress": "ltc1quzxnyht082fddu7lwlx2ecgxgu9qacfa0jenxa",
  "amount": "0.0015",
  "transactionDescription": "send transaction to anotjer wallet",
  "recipientName": "TrustP",
  "amountIncludeFees": false
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>


## Explorer

Read-only chain lookups by transaction id.

<Endpoint method="GET" path="/api/Explorer/get-ltc-transaction">

| Query parameter | Example |
| --- | --- |
| `TxId` | `07e581547d12f6d14218648556306b2d404bcf1b723a071b750a7b0f157a` |

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="GET" path="/api/Explorer/get-utxo-details">

| Query parameter | Example |
| --- | --- |
| `TxId` | `95c78a598de917d4cbc3ccb21541fc5b98d25187845f6daae1a9696bf3f1` |
| `vout_n` | `0` |

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>


## Blocks

Chain and block metadata.

<Endpoint method="GET" path="/api/Blocks/BlockchainInfo">

Response:

```json
{
  "successful": true,
  "message": "successful operation",
  "data": {
    "result": {
      "chain": "main",
      "blocks": 2690280,
      "headers": 2690280,
      "bestblockhash": "8311a2fb820a7e55a944afa3ce891bbdcae19ca54b01d18ae3510847eaba74ee",
      "difficulty": 37047324,
      "mediantime": 1716476161,
      "warnings": ""
    }
  }
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Blocks/get-block-stat">

| Query parameter | Example |
| --- | --- |
| `BlockHeight` | `2690280` |

Response:

```json
{
  "successful": true,
  "message": "successful operation",
  "data": {
    "avgfee": 3933,
    "avgfeerate": 13,
    "avgtxsize": 411,
    "blockhash": "8311a2fb820a7e55a944afa3ce891bbdcae19ca54b01d18ae3510847eaba74ee",
    "feerate_percentiles": [
      1,
      5,
      5,
      10,
      13
    ],
    "height": 2690280,
    "ins": 246,
    "maxfee": 58965,
    "maxfeerate": 301,
    "maxtxsize": 5500,
    "medianfee": 1130,
    "mediantime": 1716476161,
    "mediantxsize": 225,
    "minfee": 0,
    "minfeerate": 0,
    "mintxsize": 97,
    "outs": 290,
    "subsidy": 625000000,
    "swtotal_size": 36558,
    "swtotal_weight": 89064,
    "swtxs": 91,
    "time": 1716476562,
    "total_out": 5288657611012,
    "total_size": 49372,
    "total_weight": 140308,
    "totalfee": 471968,
    "txs": 121,
    "utxo_increase": 44,
    "utxo_size_inc": 3066
  }
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Blocks/get-block-header">

| Query parameter | Example |
| --- | --- |
| `BlockHash` | `8311a2fb820a7e55a944afa3ce891bbdcae19ca54b01d18ae3510847eaba` |

Response:

```json
{
  "successful": true,
  "message": "successful operation",
  "data": {
    "hash": "8311a2fb820a7e55a944afa3ce891bbdcae19ca54b01d18ae3510847eaba74ee",
    "confirmations": 2,
    "height": 2690280,
    "version": 536870912,
    "versionHex": "20000000",
    "merkleroot": "93bee583097ebc163e84374d6120316317a63923f3773604a31cd623414cc0de",
    "time": 1716476562,
    "mediantime": 1716476161,
    "nonce": 3380583476,
    "bits": "1973ee1e",
    "difficulty": 37047324,
    "chainwork": "00000000000000000000000000000000000000000000118efef9365906cb8890",
    "nTx": 121,
    "previousblockhash": "10a01ddfd5f6cb5178c39e5462a09cc41b1e5aee7c37c07487e37174aebd039c",
    "nextblockhash": "ae6f13d6e64e727ef83ff7cca528294fee7a98e963a506f71b77df5ecd1e0e84"
  }
}
```

</Endpoint>

<Endpoint method="GET" path="/api/Blocks/get-block-txs">

| Query parameter | Example |
| --- | --- |
| `BlockHash` | `8311a2fb820a7e55a944afa3ce891bbdcae19ca54b01d18ae3510847eaba` |

Response:

```json
{
  "successful": true,
  "message": "successful operation",
  "data": {
    "hash": "8311a2fb820a7e55a944afa3ce891bbdcae19ca54b01d18ae3510847eaba74ee",
    "tx": [
      "fa4cd441f68eec321d2bf8cd74b734c704c3c0e5d175f3f593f5a4c239faea74",
      "8c1e6959b89784fe99b947420ec79f88367b4245557aa9335eb35dfeef251e68",
      "7915445c5dbc50ec83f5134f4e6ef72cc322db636de9c48fc86c48699f7c53c0",
      "ccf742361e96c2ccc3253d0d8f9b6d9ab02146be42691db6acb7b743b363c473",
      "3ee8be6231c6de8f314cac6fe96a3e8ee9d1e4cb1f26e39153e41f3c69873b08",
      "372cd83eec00970e87648f33002afa31dbe882f17efdece03e86eceb1d2c878d",
      "f7783f9db92d23cfb07ce9fd754f4db2dd9ca6000881e50f240a7d7fcf2e3a9e",
      "41565f6f55098b2205890ffcca61019ceb99b5e9b08bb45365d7df8adfd9061b",
      "a9d5827c349c0434613c10016df5b1defb55d1dfa65ff4d7b24c08554777fcdc",
      "b4c3a32e0be32b81541c61335991331c4b7be99d009b6afbe774f8a0d5ebda46",
      "6b73e685dd00f7aa3b9b46a556ff8b34361900d15d48fe6e877ef56be429ec74",
      "8378a6df975bdd8cf16b00e4d69245c7b702fe3df278d7d316bee0aa5c352e76",
      "a93c4499325f99708993596dd11610386539671718d262df62e0f8ea02abb804",
      "8273627a6159ce5680f386382e2ba9182d9926d1fed7ee96244fd20024c8b8d7",
      "ac7e7ce9aeb0c405483b52a6b5a5fe82badb9e44d91ae560ad7a3398fbe37da3",
      "1136c88f84a39139ce898380543c52d90b175a1b4e8eb97b6d5f7280f69a7c77",
      "8a1b7eb11158a91700c1ac146648b9f000fba9c63a6c6f853b548186a4f63a58",
      "45dfedf53755c67428ef3ebeec8e4a88945f8bdfce8a7a8f830313ccd9e02e5d",
      "c782895ef5940446ba3b3a72eb2eea77790449011918b76e612a0ab96b537d12",
      "38330d4feade5766cd4633f62b353aceb83b997736796cce69f5fd5f575291ff",
      "32fce74d3baab8161ec15f9f2de203426e7a387b08b3797e90dd436f20742925",
      "e4fe2735238204c6a872115798b4358b2e792612ff3a4f5cf615e967b99dbe42",
      "ab2439ba6e036ca256297891a2f56b88fd8f29bafd9a0725a512deedefb4461f",
      "9c0ff2ea2cb0c3657fb8b4e62aeae027bdb5e65e0322c72764874bafd1499283",
      "a0ca0cbb7ffa3289feb73649bc2c9a3fd53cefc55f002db2149c0fdcfaec2511",
      "519624b5aaa189350ae3bc51d32bdd3fe8c129e9ade69b3c3546e0bfff87db3b",
      "333f3349b1cdd42990c8b4058c34d521a53e9b6cc3a87ed897008ccc16e4413e",
      "b865958af41d824acb6d60d7b1ed5cadba6cb667c0e12cb78c2107dd806c7251",
      "9a81987e00fe2e716d5479a91c27a5124547c52a61ae87aa54fb569448d9d35d",
      "087fa8460982a2e67375519a79d89036f50092ce4300ed2ddf77ec07d1ecd897",
      "d726f61f043561d6fe0af2d2d214887f2c3f66d166a0ae1af64bd30c5509f39e",
      "93f3f45b8d64368bdc47d633bb109b9b60b855116d36aab344bdcf00439be3b0",
      "60a14612ff5912eaeb8b951f5366a1ed547f458c65c81f6781d8aad8bb14e8b6",
      "83463dff60fb70b1cb8557b9629ea3b2b7a2a248e53b022a53ce4302c2524fd5",
      "869fb9aaea302425fe987b056f0b4b2dfb91de62c61e1e4d129128d3e74a12dc",
      "4240fdc574b741dd7db9d1788f4e1170f7f1a4ce997de0aa47a19769afde71e3",
      "73e6617f7d9d99f3fc5d72d7aef30f4807bcd33e0b3e54b8491faaaca7f736ef",
      "895db0f7c8d06d3c7615957945675ded80db5292351e9268ed71a2c7459425bb",
      "93055628948a536e317c38c2c9b94afc832f5a22c7bbfcc13a28ff6e5c3ca91e",
      "c5dec9b68b4780aad833b565077b71f1d099a93bf29653f75a32ac1c32476623",
      "4712a855918d1456495ed9c0be87d9e8d2ba20958ee75a501ef40ec6de49e456",
      "bbf48335cbaf946c9b706784c75627dbcde24b42c1381c110133b09626bed859",
      "6bbccffca5fde741df6ae2949a6c3cc35aed36fe3f6d0a036129b0d5d02e897f",
      "197b3d35d5f1051a1ac2b491832c2447ba254536960e1a931e37315b1f300482",
      "d2017c1c7dd453ba93385678c2854d1ef3af0546c849bf99d4deb794dc86fb9d",
      "7d584f73adf54706bf1d0c8bc4f254f556fa8306b006d37f9ba4406451dea9b4",
      "ae8d439be6c4fd5193e52ed109060ec51bdff853ce27b0538bdddeb6b821df0f",
      "424ac3d6eafe53132ec37ad4e77d329ec4e3ebd0041b21c6f15936038af7e751",
      "b10b9a86f001cdbfd8adc417985cf92813c17376654040bfc495c90d4396e828",
      "edee5042e13cff6b4f99d7b53e27207d4dbb709bd387220dc49066cddfb37d0b",
      "4320b1d82fa4a58e91c885f0649687908fcd47334173872f06dca2dcac4edc28",
      "6ff550a12576ac088002f3cc990bb1cecef6fba2f3d5bb5e67a09ea4bf491a47",
      "6002cd4537924e5ca42f06cbcc528b5073162eea7197a74b72892db92a74987a",
      "2a787f8d415c39606c17c4aa30442f854830c9a9fc93727b2a7e263b84659f82",
      "6fe6bc228196de5d9ba7e0911fb4cbcb758bbec4e729c734351d34d5c86cab9e",
      "1b573a3aca307f2595842877a482be379419532003fd7e558bd6fa4a7d46eddc",
      "7678db59ab48d8db90009af396fd1b3eb65bdfa4e44b419b931fc6fa24aa79e5",
      "cd358c0e6a0cc918d96b82bb60b915eb3e1e3d0f137f0a1f80568b8188ced55e",
      "6e30ada4166d92198dcfcdc61c32acb83e2f288469bbc080cb985fd6933bafd8",
      "edff196a24f94a2b7fed8ede04564dd5dcf342abae811894062068985499fac6",
      "76f4d20193bda869dd5fb733a8a6eba00ca207e1868aaee0b1c2b3657a2cb0fc",
      "777341dae84e081727b6ad0bf1bcc4d0c87cc724e09b7b9258bbc70d74898ee5",
      "1741b35fe5edc7c24eaab78235ad26d7cdf43fabdfd8410d673859988b31e536",
      "c2aa9c0f75ffa0cdb969b8a3266f5b213d08fe7f235ae01d2bdddb4db6e7b52b",
      "7848c540adb5f66fa5c34cdc8cb8a7d485f09a5a765ba09b2ab5c3d0c5e44ebd",
      "777c81f3f8c54c83e3b3151e7cf044273e413a5da910bd5e64672c096c310d83",
      "3a027db4d64ad0f8258a9be02b0c186d8fe17056d2cfb22b6340293e157483a5",
      "f589addcff4b299bdd4ed4e9ea710a080e703ac7f96bf4e87803604f941ec113",
      "32e1709567cdbf5652e3abebd521489c3a1dafb6fbab4ad354faa4ee050c1b1f",
      "be267c3f704ae69cd3ba15200b241981da0f048efaf33457d72d775a1662233d",
      "221bd9e8a0e8b5f79244dad8e213ebaa2256e6af482f421c999fd5d6f6751153",
      "1b14b9ae32f3af19e21cd997b011c39bd81eb63e9bae83d3b3f7e8c9e43b9761",
      "a8be23c3de513953cbdd0210370ea8b0892e8e1cbdfc8146184baa6f4e138293",
      "c71fddcc546be141c4a749f33ff95030764bc780ae812d4d6790516568294da7",
      "0a08f858064ba83a204e36849fdf74885cb4edee9381b9e29b1c7fa749ef90c6",
      "6b32bdba23e4a8b123b76ef2aa47d06e5c36bdd8ee028633c5f90d36aff1f9ca",
      "a3f2c0fc65f831bc2064c3909e76ccb342645095cd1d02ed5ab58f1dc8099dd5",
      "978b3d3d3718bdcf7524254e76741a5003365e8c5ae11c595af412d9f85985de",
      "e70aa50554a58093420d92e5538b555dac047f6a3bcfd52412e6bfb111c154e8",
      "906fc0678bb5bde5aee4d70ed3fca9e2b94c31b1fb957c3eb7e1b2fd4b41e5ed",
      "e3c878d05cebb54f71992950ebd13e795e59522605fe9882a85b37fc73c37ff9",
      "ff12f30fb71e5e927a40af4bada70caf47bf38935f9b9d4cc6c63b6226ff412f",
      "b1533c9d37b4d903fd662b89cd4b3b58ee52566a89c9964dc823d072e54504b4",
      "319511ad5fb53c90bd70502988220dbea70ff9d5acb91a5bcec9303d43031c18",
      "04223d8fd0756662c91f2f151ac28159bf5abd86eb0c3fb7bd3d6ac982a75a67",
      "aaeb4690effe3c80e7196045b0b516ae0ce50e4a2beeb71aeeec12803b4d788e",
      "33d87adfa4ec776979bf87ba701e66ddf6cbdf9e9abedf34a0ba53ed252113a4",
      "5137706daf5f80b1f2b327a59e61fb89dc48fe4dc35544dbd009b306de4d3da9",
      "fb2b7e98f0cdcaf747612a8d09157ab3da70f6a793d6d7d05d44a5f22c8ad1c9",
      "6c5fa79a6b2ac1086c7168bb412ca09c7856113add509d63fd84b17e4149bf63",
      "90f2c786e6b69788eef5b323350c71fddd168575269ff91f65d41bdf32f2d983",
      "194ecda2c815fd7a95b2c1d325a7a44bd4adf920e16d67dbf59bff73bcc3a03d",
      "8086ecd909fe089cb9e575b14f1ef4e195cced30bc18f69a7afd9196a303a90b",
      "5235705e2375253b4faca6b1a02c9835b15c9fc135e60f5d7d2894d86742f110",
      "c374e27ddb714eedf099f06877b5e56b90537c2dea7520e858a91bbaa2dd0fd8",
      "865e8c845cc2825b5a04324d86f6b894ab66aaa60e49b1fc6d1674c80bd6f11f",
      "9f4405fcee26b0802c774b965da1ebb16d0a855f070a9ba8cfda429ab2694d01",
      "a70a7b44a317082ea1b706d5d48f6fc9dab961cc1a2303d61486296517b71a69",
      "cb165fbe184f379d1bfdbe9c72caf283ca637de1f58602d23dcbc5132eed5c71",
      "752156908b506332c6248814b4f2e21c882b5ce0c4e35dbdf04fafb484c1e1f0",
      "60844cc049974c619ac5931b95eb9fe4033289cc06f5e091b057d81d9734797f",
      "fc5a42b17bfb56e9e636621a693349dcfc73ee3b6c2d5cd816e29d417a10319f",
      "0b573652acafa702c26d7d3855686a2e4cccf9685f6495c5479767f0d77142cf",
      "ab60193b5b252ab8b3c708c9063ef33f3fe8eeb377c33ce9670ff4c3405f08c7",
      "f45ef2b87c5507ddfa090445a913dfac7f9e4adf801b15a5fb3bb5810dcd9448",
      "8ed1960d17435e79dda312867177d6d531857fc33fae3b6de0d0d43b9d8e7427",
      "b7bdd6d6d7d6d924649c2256a930a95cb7d4476ac52ca844169b22ec4a9cd46d",
      "6baa60b99d790ab9a5ece7707787989e11d961efba4346e18a5973ca22c479d7",
      "c18c9e04cd23e2fc401b8c8232f50c8d62ac83e125276c0a2a19f8be65709d48",
      "08cdb443f63733c27df364d885b6171d3c483244e05769d62be67c4245b47d5a",
      "f1346b4da3ac4b55cf850161f9280810a0c5b0bea8a90b567b788bb82fc2e972",
      "c086ffbad79d4fa29bcaa570ae5f5f478a6fdaac854f5024769797b3d2131b8a",
      "b40cb4fb2f4c214dce1ab2f6cf3b65e2ef41c0ce572ac533b6a4228bac127a51",
      "f7a404ec37f1c78218938c810f427d323543db9573dbe9b62ecda095b1dc8a55",
      "53c3408619ce7f80bd0e5972095ec8e4266be9435516c5a2321802ab80a49e7d",
      "4de2acc0761b59c19e147d5f0012212f7529dbd9e903be5ec2bea156edb26f7e",
      "7f1947513b83634bbb3aba98b992c285825050a50235c0c2a26277985948fba9",
      "534b7160e81d94ab32805f57b9d549b4332723ea8f848defd9b0bc3ea190c5ad",
      "82fb5df66fc88a5af17edb9265db6d8cd2ce837c49e1194d031ab36c7a678fb7",
      "8fedce855362ccd54c349540d190c8b372dcaa5d06264419821e8d057d5315ca",
      "d02e7dee00c455d7c5e7fec6506c4cf5693005a13c811ce22357e946e99f3772"
    ],
    "nTx": 121,
    "mweb": {
      "hash": "eb454a0db5a987fada65e701e4505912c906575fa9881aff832abdb3df48eb83",
      "height": 2690280,
      "kernel_offset": "91a81934d9aa0c701e4dba4301ba8833b8d52e73ed6317cc1223f40848e91dff",
      "stealth_offset": "0000000000000000000000000000000000000000000000000000000000000000",
      "num_kernels": 0,
      "num_txos": 53878,
      "kernel_root": "0000000000000000000000000000000000000000000000000000000000000000",
      "output_root": "81ceabd9d95f7d11e70cdd3399d2ad80e978b339307d890959bb45c8868704d9",
      "leaf_root": "158701f4e71dabd8acbe12ed379fcc97f9fdec5384fa387843fcb724c771ba82",
      "inputs": [],
      "outputs": [],
      "kernels": []
    },
    "previousblockhash": "10a01ddfd5f6cb5178c39e5462a09cc41b1e5aee7c37c07487e37174aebd039c",
    "nextblockhash": "ae6f13d6e64e727ef83ff7cca528294fee7a98e963a506f71b77df5ecd1e0e84"
  }
}
```

</Endpoint>


## Utilities

Signing, verification, encryption and conversion helpers.

<Endpoint method="GET" path="/api/Utilities/Generate-passphrase">

| Query parameter | Example |
| --- | --- |
| `max` | `8` |

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Utilities/Encrypt">

Request body:

```json
{
  "message": "<string>"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="GET" path="/api/Utilities/unix-to-datetime">

| Query parameter | Example |
| --- | --- |
| `unixTimestamp` | `<long>` |

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="GET" path="/api/Utilities/datetime-to-unix">

| Query parameter | Example |
| --- | --- |
| `inputDateTime` | `<string>` |

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>

<Endpoint method="POST" path="/api/Utilities/SignMessage">

Request body:

```json
{
  "privkey": "T3ytvw5RRWT89vf34naKKBs7s9BcwE59e2n9J4ECzMb4DryAU3Pk",
  "message": "Lets test Pteri Node sign a Signature"
}
```

Response:

```json
{
  "successful": true,
  "message": "successfully generated digital signature",
  "data": "H9nGT6u+TX5fC7doe2HKIRikUsBHXoLpC5r1llvSFla1fyFn736Pw24mS9fRZOSR/UX2ssDUvfAkb5pWFkOP4y0="
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Utilities/VerifyMessage">

Headers: `wallet`

Request body:

```json
{
  "address": "LZaJcrXLPQAqUdjjjnuz7obyCP8hszgedX",
  "message": "Lets test Pteri Node sign a Signature",
  "signature": "IAdyZtI2VXRpxi8pYwW29YJeimwwTNPlro1A1Ce9mTQXS1BO21Tb6j3BoXky4mOOPk/uPMV+BeT2JTC3nFsLBIA="
}
```

Response:

```json
{
  "successful": false,
  "message": "message was not signed by provided address, either the message has been tamperewd with or the wrong addreess was provided",
  "data": null
}
```

</Endpoint>

<Endpoint method="POST" path="/api/Utilities/convert-rawtx">

Headers: `wallet`

Request body:

```json
{
  "rawTx": "<string>"
}
```

No published response example. <Pill kind="verify">Needs verification</Pill>

</Endpoint>


## Coverage

29 of 52 operations have a published response example. The remaining 23
are documented request-side only — mostly wallet creation and the transaction builders.
<Pill kind="verify">Needs verification</Pill>

## Next

<Cards cols={2}>
  <Card title="Authentication" to="/docs/api-reference/authentication">The two headers every call carries, and where the key comes from.</Card>
  <Card title="Errors" to="/docs/api-reference/errors">Why a failure still returns 200, and how to detect it.</Card>
</Cards>
