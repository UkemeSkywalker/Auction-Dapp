import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LeftArrow from './components/commons/icons/RightArrow'

const Home: NextPage = () => {
  return (
    <div className="bg-white-800">
        <div className='flex justify-between w-11/12 mx-auto mt-10'>
            <div className='flex-2 flex justify-center border-solid border-2 border-red-400 p-8 rounded-lg'>
               <Image className='rounded-lg' src="https://gateway.pinata.cloud/ipfs/QmeirtN78yF3fL2tDDJPvVfJBAkMP7NVyhw26RCxvpaGjE" alt="Wakanda NFT"  width={406} height={504}/>
            </div>
            <div className="flex-1 justify-center text-center p-10"> 
                <button className="text-white bg-rose-600 px-8 rounded-lg">Start Auction<LeftArrow/> </button>
            </div>
        </div>
      <footer>
        <h3 className="text-white">Footer</h3>
      </footer>
    </div>
  )
}

export default Home
