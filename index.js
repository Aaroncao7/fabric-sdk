const fs = require("fs");
const path = require("path");
const ccpPath = path.resolve(__dirname, "user1.json");
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

  const network = await gateway.getNetwork("ch01");
  const contract = network.getContract("test2");
  // console.log(contract);
  const result = await contract.submitTransaction("ReadAsset", ["asset1"]);
  console.log(result.toString());
  await gateway.disconnect();
}

invokeChainCode();
