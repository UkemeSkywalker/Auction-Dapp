import ConnectButton from "./connectionButton"

const Header = () => {
    return (
        <header className="">
            <div className="flex flex-wrap justify-between p- mx-40  mt-4 border-b-2 border-neutral-100 pb-4" >
                <div className="font-bold text-red-500 text-2xl mb-3"> Auction Dapp</div>
                <ConnectButton />
            </div>
        </header>
    )
}

export default Header