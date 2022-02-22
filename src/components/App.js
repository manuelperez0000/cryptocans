 import { useState,useEffect } from "react";
import Market from "./market/market";
import Dashboard from "./dashboard/dashboard";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import rundog from '../img/rundog.gif'
import { useDispatch, useSelector } from 'react-redux'
import { getWallet } from "../store/redux"
import Race from "./race/race";
import Shop from "./shop/shop";

function App() {
  const  {wallet}  = useSelector(state => state.reduxState)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getWallet())
  },[dispatch])


/*   const [wallet, setWallet] = useState("")
  const [chain, setChain] = useState("")
  const [saldo, setSaldo] = useState(0)
  const [ammount, setAmmount] = useState(0)
  const [connected, setConnected] = useState(false)
  const [symbol, setSymbol] = useState("")*/


  /* const addressContract = "0x78f959923Ed10Af70729fa020C16Bd66AEE10083"
  const web3 = new Web3(window.ethereum)
  const mycontract = new web3.eth.Contract(Abi, addressContract)

  const bscNode = "https://bsc-dataseed.binance.org/"
  const utilsProvider = new Web3(bscNode)

  const chainIdhex = async () => {
    const chain = await window.ethereum.request({ method: 'eth_chainId' })
    setChain(chain)
    console.log(chain)
  } */

/*   const connect = async () => {

    if (typeof window.ethereum !== 'undefined') {

      const accounts = await window.ethereum.request({ 'method': 'eth_requestAccounts' })
      if (accounts) {
        setWallet(accounts[0])
        setConnected(true)
        //console.log(accounts)
      }

      mycontract.methods.balanceOf(accounts[0]).call().then((r) => {
        const saldoWallet = Math.round(web3.utils.fromWei(r, 'ether'))
        setSaldo(saldoWallet)
      })

      mycontract.methods.symbol().call().then((sym) => {
        setSymbol(sym)
      })

    } else {
      alert("No metamask installed")
    }
  } */

  /*
  const num = utilsProvider.utils.toWei("45", "ether")
  console.log("Este es el numero esperado de utils: " + num)
  const transferir = async () => {
    let monto = web3.utils.toWei("45", "ether")
    mycontract.methods.transfer("0x20a4DaBC7C80C1139Ffc84C291aF4d80397413Da", monto).send({ from: wallet })
    .on('transactionHash', (hash)=> {
      console.log(hash);
    })
  }
  const setAmmountFunction = (e) => {
    setAmmount(e.target.value)
  } */

  const resumeWallet = (w) => {
    let str1 = w.substr(0, 4);
    const length = w.length
    const str2 = w.substr(length - 4, 4);
    const result = str1 + "..." + str2;
    return result
  }

  const bg1 = { backgroundColor: "rgb(19,20,25)" }
  const bg2 = { backgroundColor: "rgb(32,34,46)" }
  const [btn1, setBtn1] = useState(bg2)
  const [btn2, setBtn2] = useState(bg1)
  const [btn3, setBtn3] = useState(bg1)
  const [btn4, setBtn4] = useState(bg1) 

  const changebtnStyle = (x) => {
    if (x == 1) { setBtn1(bg2); setBtn2(bg1); setBtn3(bg1); setBtn4(bg1) }
    if (x == 2) { setBtn1(bg1); setBtn2(bg2); setBtn3(bg1); setBtn4(bg1) }
    if (x == 3) { setBtn1(bg1); setBtn2(bg1); setBtn3(bg2); setBtn4(bg1) }
    if (x == 4) { setBtn1(bg1); setBtn2(bg1); setBtn3(bg1); setBtn4(bg2) }
  } 

  const connect = ()=>{
    dispatch(getWallet())
  }

  return (
      <BrowserRouter>
        <nav className="px-2 topNav">
          <div className="d-flex justify-content-between">
            <div className="d-inline-flex justify-content-between align-items-center">
              <div>
                <img height="30px" src={rundog} alt="" />
                Cryptocans
              </div>

              <div className="mx-2 d-flex">
                <Link to="/dashboard" className="link" >
                  <div className="buttonLink" style={btn1} onClick={() => { changebtnStyle(1) }}>
                    Dashboard
                  </div>
                </Link>
                <Link to="/market" className="link">
                  <div className="buttonLink" style={btn2} onClick={() => { changebtnStyle(2) }}>
                    Market
                  </div>
                </Link>
                <Link className="link" to="/shop">
                  <div className="buttonLink" style={btn3} onClick={() => { changebtnStyle(3) }}>
                    Shop
                  </div>
                </Link>
                <Link className="link" to="/rece">
                  <div className="buttonLink" style={btn4} onClick={() => { changebtnStyle(4) }}>
                    Race
                  </div>
                </Link>
              </div>

            </div>
            <div className="d-flex align-items-center">
              {wallet ? <>
                {resumeWallet(wallet)}
              </> : <>
                <button onClick={connect} className="buttonLink mx-1"> Connect Wallet </button>
              </>}
            </div>
          </div>
        </nav>


        <Switch>
          <Route path="/market">
            <Market />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/rece">
            <Race />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/" exact>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
