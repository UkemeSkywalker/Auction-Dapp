import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useAuctionRead from '../hooks/useAuctionStatus'
import LeftArrow from './components/commons/icons/RightArrow'
import useAuctionWrite from '../hooks/useContractWrite'
import { useAccount } from 'wagmi'
import {UseAuctionTimer} from "../hooks/useAuctionTimer";



const Home: NextPage = () => {
  const { data: started, isError, isLoading } = useAuctionRead('started')
  const { data: ended } = useAuctionRead('ended')
  const { data: ownerAddress } = useAuctionRead('owner')
  const { address, isConnecting, isDisconnected } = useAccount()
  
  // const {data:writeData, isLoading:writeLoading, isSuccess:writeSuccess, isError:writeError, write, writeAsync} = useAuctionWrite("Auction")
  console.log('Currently connected account:', address)
  console.log('Owner Address: ', ownerAddress)
  const isAdmin = ownerAddress === address ? true : false
  console.log('started', started)


 
  // const {seconds, minutes, hours, days, start, pause, isRunning} = UseAuctionTimer(SetTime());

  // const timer = () => {
  //   return <>

  //     <div className='text-white'>
  //       <button onClick={start}>Start</button>
  //       <button onClick={pause}>Pause</button>
  //       <p>{isRunning ? "Running" : "Timer not started"}</p>
  //       <span>{hours} : </span><span>{minutes}:</span><span>{seconds}</span>
  //     </div>
      
  //   </>
  // }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
 
  const statusButton = () => {
    if (isLoading) {
      return <div>Loading...</div>
    }
    if (isError) {
      return <div>Error ...</div>
    }
    if (isAdmin && !started) {
      return <button className="flex  text-white bg-zinc-800 px-8 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Start Auction <LeftArrow className="ml-3 pt-1.5" />
      </button>
    }
    console.log('passed!!!!!')
    if (!started) {
      return <button className="flex  text-white bg-zinc-800 px-8 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Auction not Started <LeftArrow className="ml-3 pt-1.5" />
      </button>
    }
    if (started && !ended) {
      return <button className="flex bg-yellow-500 text-white bg-zinc-800 px-8 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Auction in Progress <LeftArrow className="ml-3 pt-1.5 " />
      </button>
    }
    if (ended) {
      return <button className="flex  text-white bg-zinc-800 px-8 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Auction has Ended <LeftArrow className="ml-3 pt-1.5" />
      </button>
    }
  }

  return (
    <div className="bg-white-800">
      <div className="flex justify-between w-11/12 mx-auto mt-10 flex-wrap">
        <div className="flex-2 flex justify-center border-solid border-2 border-yellow-300 p-8 rounded-lg bg-white">
          <Image
            className="rounded-lg"
            src="https://gateway.pinata.cloud/ipfs/QmeirtN78yF3fL2tDDJPvVfJBAkMP7NVyhw26RCxvpaGjE"
            alt="Wakanda NFT"
            width={336}
            height={434}
          />
        </div>
      
        <div className="flex-1 justify-center text-center px-10 py-3">
          
          {statusButton()}
          <div className="mt-7">
            <div className="mb-9 text-white">
              <p>Skywalker NFT Studios®</p>
              <h1 className="text-6xl ">Wakanda Forever</h1>
              <p className="pt-4">This NFT card would give you access to special <br></br> airdrops and Wakanda events</p>
            </div>
            <div className="  ">
              <h2 className="mb-5 text-white">
                Highest Bid
                </h2>
                <span className="bg-yellow-500 ml-2 rounded-lg pl-4  py-1 font-bold">
                  1.465
                  <span className="ml-1 bg-yellow-200 px-4 py-1 rounded-lg font-extrabold">
                    ETH
                  </span>
                </span>
                
              
            </div>
            <div className="mt-10 flex flex-col justify-center text-center items-center">
              <input type="text" placeholder="Place your bid" className='border border-green-500 w-3/5 p-3 rounded-lg' />
              <button className='bg-green-500 w-1/2 text-white py-2 rounded-lg mt-4'>Place Your Bid</button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        {/* <h3 className="text-white">Footer</h3> */}
      </footer>
    </div>
  )
}

export default Home
