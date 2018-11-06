var Migrations = artifacts.require("./Migrations.sol");
const MyStringStore = artifacts.require("MyStringStore");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MyStringStore);
};
