const networkConfig = {
    4:{
        name:"rinkeby",
        ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e"
    },
    80001:{
        name:"mumbai",
        ethUsdPriceFeed:"0x0715A7794a1dc8e42615F059dD6e406A6594651A"
    }
}

const developmentChain = ["hardhat", "localhost"]
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000;
module.exports = {
    networkConfig,
    developmentChain,
    DECIMALS,
    INITIAL_ANSWER
}