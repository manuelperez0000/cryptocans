
const provider = 'https://bsc-dataseed.binance.org/'
/* 
import detectEthereumProvider from '@metamask/detect-provider'

const provider = await detectEthereumProvider()
//const web3 = new Web3(provider)

if(provider){
  console.log("Provider detected")
}else{
  console.log("Please install metamask")
} */

function App() {

  //const web3 = new Web3(provider)

  return (
    <div>
      <div>
        <button> Conect Metamsk </button>
      </div>
      <div>
        No connected
      </div>
      <div>
        <input type="text" />
        <button> Transferir usdt </button>
      </div>
    </div>
  );
}

export default App;
