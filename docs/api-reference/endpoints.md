---
title: Endpoint Index
sidebar_label: Endpoint Index
description: Every operation in the published LiaaS OpenAPI spec, grouped by resource.
tags: [unverified]
---

This index is generated from the [published OpenAPI spec](https://liaas-sdk-919521117286.europe-west1.run.app/swagger/v1/swagger.json) and lists all 43 operations it defines.

The spec is the source of truth. This page mirrors it: every method, path, summary, header, query parameter and request body schema below is taken straight from the spec, with nothing added. Where the two ever disagree, believe the spec.

Paths are shown exactly as the spec declares them. The spec has no `servers` block; the host that currently serves them is `https://liaas-sdk-919521117286.europe-west1.run.app` — see [Authentication](/docs/api-reference/authentication) for the caveat on relying on it.

## Wallet

18 operations.

<Endpoint method="POST" path="/api/Wallet/create" note="Create a new wallet. this wallet created but not encrypted and cannot be imported to other wallets.">

Required headers: `nodeUrlOrApiAccessKey`

Request body: `CreateWalletRequest`

Body properties: `walletName` (required)

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/encrypt-wallet" note="Encrypt a wallet. this wallet created  cannot be imported to other wallets.">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`

Request body: `EncryptWalletDto`

Body properties: `passphrase` (required)

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/create-encrypted-wallet" note="Create an encrypted wallet. this wallet created will be encrypted but cannot be imported to other wallets.">

Required headers: `nodeUrlOrApiAccessKey`

Request body: `CreateWalletRequest`

Body properties: `walletName` (required)

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/create-importable-wallet" note="Create an importable wallet. this wallet created will be encrypted and can be imported to other wallets.">

Required headers: `nodeUrlOrApiAccessKey`

Request body: `CreateWalletRequest`

Body properties: `walletName` (required)

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/create-importable-encrypted-wallet" note="Create an importable encrypted wallet. this wallet created will be encrypted and can be imported to other wallets.">

Required headers: `nodeUrlOrApiAccessKey`

Request body: `CreateWalletRequest`

Body properties: `walletName` (required)

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/import-wallet" note="Import a wallet. this wallet created will be encrypted and can be imported to other wallets.">

Required headers: `nodeUrlOrApiAccessKey`

Request body: `ImportWalletdto`

Body properties: `new_wallet_name` (required), `mnemonics` (required)

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/details" note="Get the details of a wallet.">

Required headers: none listed in the spec.

Query parameters: `nodeUrlOrApiAccessKey`, `walletName`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/transactions" note="Get the transactions of a wallet.">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`

Query parameters: `skip`, `count`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/balance" note="Get the balance of a wallet.">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/addresses" note="Get all addresses of a wallet.">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`

Request body: none.

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/change-passphrase" note="Change the passphrase of a wallet.">

Required headers: `nodeUrlOrApiAccessKey`

Request body: `ChangePassphrasedto`

Body properties: `wallet` (required), `old_passphrase` (required), `new_passphrase` (required)

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/official-address" note="Get the official address of a wallet.">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`

Request body: none.

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/sign-wallet-message" note="Sign a message using the wallet.">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`

Request body: `signMessageUsingWalletdto`

Body properties: `message` (required), `passphrase` (required), `address` (required)

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/wallet-address-balance" note="Get the balance of a specific address in a wallet.">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`

Query parameters: `address`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/wallet-address-transactions" note="Get the transactions of a specific address in a wallet.">

Required headers: `nodeUrlOrApiAccessKey`

Query parameters: `walletName`, `address`

Request body: none.

</Endpoint>

<Endpoint method="POST" path="/api/Wallet/set-wallet-mnemonics" note="Set the mnemonics of a wallet.">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`, `encryptedPassphrase`

Request body: `SetWalletMnemonicsdto`

Body properties: `mnemonics` (required)

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/wallet-default-address" note="default addresss of a wallet without private key">

Required headers: `nodeUrlOrApiAccessKey`, `mnemonics`

Query parameters: `addressType`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Wallet/wallet-default-address-v2" note="default addresss of a wallet with private key">

Required headers: `nodeUrlOrApiAccessKey`, `mnemonics`

Query parameters: `addressType`

Request body: none.

</Endpoint>

## Address

11 operations.

<Endpoint method="POST" path="/api/Address/create" note="Create a new address in a particular wallet">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`, `encryptedPassphrase`

Request body: `CreateAddressdto`

Body properties: `label`, `type`

</Endpoint>

<Endpoint method="POST" path="/api/Address/create-muti-sig-address" note="Create a multi-signature address. this address created will be encrypted but cannot be imported to other wallets.">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`, `encryptedPassphrase`

Request body: `createMultiSignatureAddressdto`

Body properties: `addresses` (required), `nreqired` (required), `address_type` (required)

</Endpoint>

<Endpoint method="GET" path="/api/Address/address-details" note="Get address details. all address details are returned.">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`

Query parameters: `address`

Request body: none.

</Endpoint>

<Endpoint method="POST" path="/api/Address/sign-message" note="sign a message with address private key">

Required headers: `nodeUrlOrApiAccessKey`

Request body: `SignMessagedto`

Body properties: `message` (required), `addressPrivatKey` (required)

</Endpoint>

<Endpoint method="POST" path="/api/Address/verify-message" note="verify signed message">

Required headers: `nodeUrlOrApiAccessKey`

Request body: `VerifyMessagedto`

Body properties: `address` (required), `message` (required), `signature` (required)

</Endpoint>

<Endpoint method="GET" path="/api/Address/address-transaction" note="retruns all transactions of an address without wallet">

Required headers: `nodeUrlOrApiAccessKey`

Query parameters: `address`, `take`, `skip`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Address/address-balance" note="address balance - returns the confirmed and unconfirmed balance">

Required headers: `nodeUrlOrApiAccessKey`

Query parameters: `address`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Address/address-private-key" note="Get the address private key using encrypted passphrase">

Required headers: `nodeUrlOrApiAccessKey`, `wallet`, `encryptedPassphrase`

Query parameters: `address`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Address/address-private-key-v2" note="Get the address private key using mnemonics">

Required headers: `nodeUrlOrApiAccessKey`, `wallet`, `mnemonics`

Query parameters: `address`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Address/screen-address" note="Screen address to check the validity of the address, iswitness or not, isScript or not , isMweb or not and also returns the scriptPubKey">

Required headers: `nodeUrlOrApiAccessKey`, `wallet`, `mnemonics`

Query parameters: `address`

Request body: none.

</Endpoint>

<Endpoint method="POST" path="/api/Address/generate-default-address" note="Generate a default address for a wallet. This address can be imported to other wallets.">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`, `encryptedPassphrase`

Request body: `GenerateDefaultAddressdto`

Body properties: `addressType`, `label`

</Endpoint>

## Transactions

6 operations.

<Endpoint method="POST" path="/api/Transactions/send-funds-from-wallet" note="Send a funds from one address to another using wallet">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`, `encryptedPassphrase`

Request body: `SendFromWalletdto`

Body properties: `recipientAddress`, `recipientName`, `amount`, `description`, `amountIncludeFees`

</Endpoint>

<Endpoint method="POST" path="/api/Transactions/create-raw-transaction" note="create raw transaction - returns the transaction hash">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`

Request body: `CreateRawTransactiondto`

Body properties: `recipientAddress` (required), `senderAddress` (required), `amount` (required)

</Endpoint>

<Endpoint method="POST" path="/api/Transactions/create-raw-transaction-v2" note="create raw transaction with the address UTXOs - returns the transaction hash">

Required headers: `nodeUrlOrApiAccessKey`

Request body: `CreateRawTransactiondtoV2`

Body properties: `senderAddress` (required), `recipientAddress` (required), `amount` (required), `utxos` (required), `vouts_n` (required)

</Endpoint>

<Endpoint method="POST" path="/api/Transactions/create-raw-transaction-v3" note="create raw transaction with the service Fee address attached - returns the transaction hash">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`

Request body: `CreateRawTransactiondtoV3`

Body properties: `senderAddress` (required), `serviceFeeAddress` (required), `recipientAddress` (required), `serviceFeeAmount` (required), `amount` (required)

</Endpoint>

<Endpoint method="POST" path="/api/Transactions/sign-transaction" note="sign a created raw transaction - returns the signed transaction hash">

Required headers: `nodeUrlOrApiAccessKey`, `walletName`

Request body: `SignRawTransactiondto`

Body properties: `walletName` (required), `addressPrivateKey` (required), `txhash` (required)

</Endpoint>

<Endpoint method="POST" path="/api/Transactions/broadcast-transaction" note="broadcast transaction on the Litecoin blockchain">

Required headers: `nodeUrlOrApiAccessKey`

Request body: `BroadcastTransactiondto`

Body properties: `signedTxHash` (required)

</Endpoint>

## Litecoin

2 operations.

<Endpoint method="GET" path="/api/Litecoin/transaction-details" note="Litecoin transaction details - returns the full details of a transaction id">

Required headers: `nodeUrlOrApiAccessKey`

Query parameters: `txid`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Litecoin/get-utxo-details" note="Litecoin UTXO details - returns the details of a UTXO using the transaction id and vout index">

Required headers: `nodeUrlOrApiAccessKey`

Query parameters: `txid`, `vout_n`

Request body: none.

</Endpoint>

## Blocks

4 operations.

<Endpoint method="GET" path="/api/Blocks/blockchain-info" note="Get Litcoin Block information">

Required headers: `nodeUrlOrApiAccessKey`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Blocks/block-stat" note="Get block statistics">

Required headers: `nodeUrlOrApiAccessKey`

Query parameters: `blockheight`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Blocks/block-header" note="Get block header information">

Required headers: `nodeUrlOrApiAccessKey`

Query parameters: `blockheight`

Request body: none.

</Endpoint>

<Endpoint method="GET" path="/api/Blocks/block-transaction" note="Get block Transactions in details">

Required headers: `nodeUrlOrApiAccessKey`

Query parameters: `blockhash`

Request body: none.

</Endpoint>

## Utilities

2 operations.

<Endpoint method="GET" path="/api/Utilities/get-blockchain-otp" note="Gets OTP using the blockchain information using the signature of a signed message.">

Required headers: `nodeUrlOrApiAccessKey`, `signature`

Request body: none.

</Endpoint>

<Endpoint method="POST" path="/api/Utilities/verify-otp" note="Verifies the OTP on the blockchain.">

Required headers: `nodeUrlOrApiAccessKey`

Request body: `VerifyOTPdto`

Body properties: `signtaure` (required), `code` (required)

</Endpoint>

<Callout type="warn" title="Not yet in the spec">

<Pill kind="verify">Needs verification</Pill>

The published spec documents requests only. It does not define response schemas, and it lists no status codes beyond `200`. Treat any response shape you see in the wild as observed behaviour, not a contract, until this is confirmed.

The spec also declares no `servers` block, so the base URL each path hangs off is unconfirmed here.

</Callout>

## Next

<Cards cols={2}>
  <Card title="Authentication" to="/docs/api-reference/authentication">What header every request carries, and where the key comes from.</Card>
  <Card title="API clients" to="/docs/sdks/api-clients">Call these operations from a generated client instead of raw HTTP.</Card>
</Cards>
