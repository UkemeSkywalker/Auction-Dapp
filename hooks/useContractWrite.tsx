import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import {AUCTION_CONTRACT  } from "../config";

const useAuctionWrite = ( functionName="") => {
    const { config } = usePrepareContractWrite({
        ...AUCTION_CONTRACT,
        functionName
      })
      const { data, isLoading, isSuccess, write, writeAsync} = useContractWrite(config)

      return {data, isLoading, isSuccess, write, writeAsync}
}
export default useAuctionWrite