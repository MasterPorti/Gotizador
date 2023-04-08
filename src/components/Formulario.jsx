import { Fragment } from 'react'
import { MARCAS, YEAR, PLANES } from '../constants/index'
import useCotizador from '../hooks/Cotizador'
function Formulario (props) {
  const { changeModal, modal } = useCotizador()
  return (
    <>
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
            <select
              name='marca'
              className="w-full p-3 bg-white border border-gray-200"
            >
              <option value="">
                -- Seleccione Marca--
              </option>
              {MARCAS.map(marca =>
                <option key={marca.id} value={marca.id}>{marca.nombre}</option>
              )}
            </select>
          </label>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
            <select
              name='marca'
              className="w-full p-3 bg-white border border-gray-200"
            >
              <option value="">
                -- Seleccione Año--
              </option>
              {YEAR.map(marca =>
                <option key={marca.id} value={marca.id}>{marca.nombre}</option>
              )}
            </select>
          </label>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige un Plan
            <div className="flex items-center gap-3">
              {PLANES.map(plan =>
                <Fragment key={plan.id}>
                  <label>
                    {plan.nombre}
                  </label>
                  <input
                    type='radio'
                    name='plan'
                    value={plan.id}
                  />
                </Fragment>
              )}
            </div>
          </label>
        </div>
        <input type='submit' className='w-full p-3 font-bold text-white uppercase bg-blue-500 cursor-pointer hover:bg-blue-700' value='Cotizar'/>
      </form>
      <button onClick={() => changeModal()} className='w-full p-3 font-bold text-white uppercase bg-blue-500 cursor-pointer hover:bg-blue-700'>Abrir Modal</button>
      {modal && <h1>Modal</h1>}
    </>
  )
}

export default Formulario


echo "# Gotizador" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MasterPorti/Gotizador.git
git push -u origin main