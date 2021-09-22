const fs = require("fs");
const path = require("path");
const ccpPath = path.resolve(__dirname, "user.json");
const { Gateway } = require("fabric-network");

async function invokeChainCode() {
  const ccp = JSON.parse(fs.readFileSync(ccpPath, "utf8"));
  const { identity } = ccp.client;

  // Create a new gateway for connecting to our peer node.
  const gateway = new Gateway();
  await gateway.connect(ccp, {
    identity,
    discovery: { enabled: false, asLocalhost: false },
  });
  const channels = [];
  for (var channel in ccp.channels) {
    channels.push(channel);
  }

  const network = await gateway.getNetwork(channels[0]);
  const contract = network.getContract("evidence");
  // console.log(contract);
  const result = await contract.submitTransaction("put", ["test"]);
  console.log(result.toString());
  await gateway.disconnect();
}

invokeChainCode();
