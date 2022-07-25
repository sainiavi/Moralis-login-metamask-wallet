const web3 = new Moralis.Web3();
const Metamaskwallet = "0x...";

// create query
const query = new Moralis.Query("EthTransactions");
query.equalTo("to_address", binanceWallet);

// subscribe for real-time updates
const subscription = await query.subscribe();
subscription.on("create", function (data) {
  const amountEth = web3.utils.fromWei(data.attributes.value);
  console.log(`${amountEth} deposited to Binance`);
});

