import Header from "./header"

const MainLayout = (props: any) => {
  const { children } = props
  return <>
  {children}
    <Header />
</>

}




export default MainLayout
