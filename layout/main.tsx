import { Children, ReactNode } from "react"
import Header from "./header"

interface IProps{
  children : ReactNode
}

const MainLayout = ({children}:IProps) => {
  return <>
  {children}
    <Header />
</>

}




export default MainLayout
