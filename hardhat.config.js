// https://eth-goerli.g.alchemy.com/v2/bhDhEhw_mafgwoba4X4qhVRkpBLyMqix
require('@nomiclabs/hardhat-waffle');

module.exports  = {
 solidity:'0.8.0',
 networks :{
    goerli:{
        url:'https://eth-goerli.g.alchemy.com/v2/bhDhEhw_mafgwoba4X4qhVRkpBLyMqix',
        accounts:['9e8993816d03b8ae621b4135b3946dc73b37439745278a00f0162aa81a205cd5']
    }
 }
}