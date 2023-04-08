import Appseguro from './components/Appseguro'
import { CotizadorProvider } from './context/CotizadorProvider'
export default function App () {
  return (
    <>
      <CotizadorProvider>
        <Appseguro/>
      </CotizadorProvider>
    </>
  )
}
