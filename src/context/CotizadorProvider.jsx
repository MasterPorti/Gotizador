import { createContext, useState } from 'react'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {
  const [modal, setModal] = useState(false)
  const changeModal = () => setModal(!modal)
  return (
    <CotizadorContext.Provider
      value={{
        changeModal,
        modal
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext

// import Appseguro from './components/Appseguro'
// import { CotizadorProvider } from './context/CotizadorProvider'
// export default function App () {
//   return (
//     <>
//       <CotizadorProvider>
//         <Appseguro/>
//       </CotizadorProvider>
//     </>
//   )
// }

// import { Fragment, useContext } from 'react'
// import CotizadorContext from '../context/CotizadorProvider'
// import { MARCAS, YEAR, PLANES } from '../constants/index'
// function Formulario (props) {
//   const { hola } = useContext(CotizadorContext)
//   console.log(hola)
//   return (
//     <>
//       <form>
//         <div className="my-5">
//           <label className="block mb-3 font-bold text-gray-400 uppercase">
//             Marca
//             <select
//               name='marca'
//               className="w-full p-3 bg-white border border-gray-200"
//             >
//               <option value="">
//                 -- Seleccione Marca--
//               </option>
//               {MARCAS.map(marca =>
//                 <option key={marca.id} value={marca.id}>{marca.nombre}</option>
//               )}
//             </select>
//           </label>
//         </div>
