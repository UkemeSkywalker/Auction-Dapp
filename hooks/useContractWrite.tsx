import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import {AUCTION_CONTRACT  } from "../config";

const useAuctionWrite = ( functionName="") => {
    const { config } = usePrepareContractWrite({
        ...AUCTION_CONTRACT,
        functionName
      })
      const { data, isLoading,  isError, write, writeAsync} = useContractWrite(config)

      return {data, isLoading, isError, write, writeAsync}
}
export default useAuctionWrite