import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layout/main'
import Header from '../layout/header'
import ConnectButton from '../layout/connectionButton'
import { WagmiConfig, createClient, chain} from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;
// Choose which chains you'd like to show
const chains = [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.goerli];

const client = createClient(
  getDefaultClient({
    appName: "Auction Dapp",
    alchemyId,
    chains
  }),
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  )
}

export default MyApp
