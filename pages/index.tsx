import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useAuctionRead from '../hooks/useAuctionStatus'
import LeftArrow from './components/commons/icons/RightArrow'
import useAuctionWrite from '../hooks/useContractWrite'
import { useAccount } from 'wagmi'

const Home: NextPage = () => {
  const { data: started, isError, isLoading } = useAuctionRead('started')
  const { data: ended } = useAuctionRead('ended')
  const { data: ownerAddress } = useAuctionRead('owner')
  const { address, isConnecting, isDisconnected } = useAccount()
  const {data:writeData, isLoading:writeLoading, isSuccess, write, writeAsync} = useAuctionWrite("Auction")
  console.log('Currently connected account:', address)
  console.log('Owner Address: ', ownerAddress)
  const isAdmin = ownerAddress === address ? true : false
  console.log('started', started)

  const statusButton = () => {
    if (isLoading) {
      return <div>Loading...</div>
    }
    if (isError) {
      return <div>Error ...</div>
    }
    if (isAdmin && !started) {
      ;<button className="flex  text-white bg-zinc-800 px-8 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Start Auction <LeftArrow className="ml-3 pt-1.5" />
      </button>
    }
    console.log('passed!!!!!')
    if (!started) {
      ;<button className="flex  text-white bg-zinc-800 px-8 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Auction not Started <LeftArrow className="ml-3 pt-1.5" />
      </button>
    }
    if (started && !ended) {
      ;<button className="flex  text-white bg-zinc-800 px-8 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Auction in Progress <LeftArrow className="ml-3 pt-1.5" />
      </button>
    }
    if (ended) {
      ;<button className="flex  text-white bg-zinc-800 px-8 py-2 rounded-lg font-['Helvetica Neue'] mx-auto">
        Auction has Ended <LeftArrow className="ml-3 pt-1.5" />
      </button>
    }
  }

  return (
    <div className="bg-white-800">
      <div className="flex justify-between w-11/12 mx-auto mt-10 flex-wrap">
        <div className="flex-2 flex justify-center border-solid border-2 border-rose-100 p-8 rounded-lg bg-gray-50">
          <Image
            className="rounded-lg"
            src="https://gateway.pinata.cloud/ipfs/QmeirtN78yF3fL2tDDJPvVfJBAkMP7NVyhw26RCxvpaGjE"
            alt="Wakanda NFT"
            width={406}
            height={504}
          />
        </div>
        <div className="flex-1 justify-center text-center p-10">
          {statusButton()}
          <div className="mt-7">
            <div className="mb-9">
              <p>Skywalker NFT Studios</p>
              <h1 className="text-6xl ">Wakanda Forever</h1>
            </div>
            <div>
              <h2 className="">
                Highest Bid{' '}
                <span className="bg-yellow-500 ml-2 rounded-lg pl-4  py-1 font-bold">
                  1.465
                  <span className="ml-1 bg-yellow-200 px-4 py-1 rounded-lg font-extrabold">
                    ETH
                  </span>
                </span>
              </h2>
            </div>
            <div className="mt-10">
              <input type="text" placeholder="Place your bid" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <h3 className="text-white">Footer</h3>
      </footer>
    </div>
  )
}

export default Home
