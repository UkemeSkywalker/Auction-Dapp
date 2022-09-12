import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useAuctionRead from '../hooks/useAuctionStatus'
import LeftArrow from './components/commons/icons/RightArrow'
import useAuctionWrite from '../hooks/useContractWrite'
import { useAccount } from 'wagmi'
import UseAuctionTimer from '../hooks/useAuctionTimer'



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

  // Set Time
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
      return <button className="flex  text-white bg-zinc-800 px-3 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Start Auction <LeftArrow className="ml-3 pt-1.5" />
      </button>
    }
    console.log('passed!!!!!')
    if (!started) {
      return <button className="flex  text-white bg-zinc-800 px-3 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Auction not Started <LeftArrow className="ml-3 pt-1.5" />
      </button>
    }
    if (started && !ended) {
      return <button className="flex bg-yellow-500 text-white bg-zinc-800 px-3 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Auction in Progress <LeftArrow className="ml-3 pt-1.5 " />
      </button>
    }
    if (ended) {
      return <button className="flex  text-white bg-zinc-800 px-3 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Auction has Ended <LeftArrow className="ml-3 pt-1.5" />
      </button>
    }
  }

  return (
    <div className="">
      <div className="flex justify-between w-11/12 mx-auto mt-10 flex-wrap">
        <div className="flex-2 flex justify-center bg-white p-4 rounded-lg">
          <Image 
            className="rounded-lg p-5"
            src="https://gateway.pinata.cloud/ipfs/QmeirtN78yF3fL2tDDJPvVfJBAkMP7NVyhw26RCxvpaGjE"
            alt="Wakanda NFT"
            width={450}
            height={500}
          />
        </div>
      
        <div className="flex-1 justify-center text-center px-6 ml-6 py-3">
          {statusButton()}
          <div className="mt-7">
            <div className="mb-3 text-white">
              <p>Skywalker NFT Studios®</p>
              <h1 className="text-6xl ">Wakanda Forever</h1>
              <p className="pt-4">This NFT card would give you access to special <br></br> airdrops and Wakanda events</p>
            </div>
            <div className="  ">
            <UseAuctionTimer expiryTimestamp = {time} />
              <h2 className="mb-2 text-white">
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
