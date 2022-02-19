/* import Web3 from 'web3'
const provider = "https://bsc-dataseed.binance.org/"
const web3 = new Web3(provider) */

const chain = async ()=>{
    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
    alert(chainId)
    return chainId
}
export default chain