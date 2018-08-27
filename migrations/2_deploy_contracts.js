
let rate = 8 * (10**8); // a number
let wallet = "0xF76075Cf3B674fB9656E393e9e17091B01243666"; // an address string
let token = "0x0f26c1c05f1bbBC7Eff0488F1a98619e8a9758cf"; // an address string

const zeppelinSales = artifacts.require("./zeppelinSales.sol");
module.exports = function(deployer) {
    deployer.deploy(zeppelinSales, rate, wallet, token);
};