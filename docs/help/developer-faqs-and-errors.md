---
title: "Developer FAQs & Error Messages"
sidebar_label: Developer FAQs
description: The error strings the LiaaS API returns most often, what causes each one, and what to change to clear it.
---

<details>

<summary><strong>Error-Message:</strong> <code>"Error creating transaction (wallet may be locked or fees may not be sufficient)."</code></summary>

This error is typically caused by providing an incorrect or encrypted passphrase. Ensure that the correct passphrase is used, verify that the wallet is not locked and that sufficient fees are available for the transaction.

</details>

<details>

<summary><strong>Error-Message:</strong> <code>"Object reference not set to an instance of an object."</code></summary>

This error suggests that the provided input parameters are incorrect or incomplete. To resolve it, verify all parameters before making the API request to ensure that the values are valid and the required objects are properly initialized.

</details>

<details>

<summary><strong>Error-Message:</strong> <code>"Error with selected inputs for the send transaction."</code></summary>

This error indicates that the specified address does not have sufficient funds to create the transaction. Ensure that the address holds enough balance to cover the transaction amount and any associated fees.

</details>

<details>

<summary>Error-Message: <code>"Wallet file verification failed: Error loading wallet &#x3C;your wallet name>. Duplicate -wallet filename specified."</code></summary>

This error indicates that the wallet you are trying to load is already loaded. To resolve this, check if the wallet is already loaded and avoid reloading it.

</details>

<details>

<summary>Error-Message: <code>"No full public key for address &#x3C;one of your address>"</code></summary>

This error occurs when one of the addresses provided does not belong to the specified wallet. Ensure that all addresses being used for multi-signature belong to the same wallet before proceeding.

</details>

<details>

<summary>Error-Message: <code>"Error with selected inputs for the send transaction"</code></summary>

This error indicates that the specified address does not have sufficient funds to create the transaction. Ensure that the address holds enough balance to cover the transaction amount and any associated fees.

</details>

<details>

<summary>What is the difference between Wallet-balance &#x26; Address-balance?</summary>

Wallet Balance refers to the total Litecoin balance across all addresses that have been explicitly generated within the wallet. Default addresses are not considered as generated addresses. Address Balance represents the Litecoin balance associated with a specific individual address.

</details>

<details>

<summary>Is it possible for the wallet balance to differ from the sum of all individual address balances?</summary>

Yes, discrepancies are absolutely possible. When you import a wallet, a recovery process is triggered to retrieve funds from all the default addresses associated with the mnemonic phrase. These funds are then consolidated into your default `ltc1` address using UTXOs (Unspent Transaction Outputs).

However, because the default address is not considered a "generated" address, its balance is not included in the wallet balance initially. It's only after you perform your first transaction that the default address is automatically generated to get change back. From that point on, the balance of the default `ltc1` address will also be included in the wallet balance calculation.

</details>

## Next

<Cards cols={2}>
  <Card title="Error reference" to="/docs/api-reference/errors" eyebrow="API reference" icon="◇">
    How error responses are shaped and how to handle them in your integration.
  </Card>
  <Card title="Status & support" to="/docs/help/status-and-support" eyebrow="Help" icon="◉">
    Check live platform status and find the right way to reach the team.
  </Card>
</Cards>
