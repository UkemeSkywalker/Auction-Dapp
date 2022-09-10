import { Children, ReactNode } from "react"
import Header from "./header"

interface IProps{
  children : ReactNode
}

const MainLayout = ({children}:IProps) => {
  return <>
    <Header />
    {children}
</>

}




export default MainLayout
