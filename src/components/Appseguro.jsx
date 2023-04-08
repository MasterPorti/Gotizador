import Formulario from './Formulario'
function Appseguro (props) {
  return (
    <>
      <header className="my-10">
        <h1 className='text-4xl font-black text-center text-white'>
            Cotizador de Seguros de Auto
        </h1>
      </header>
      <main className="p-10 mx-auto bg-white rounded-lg shadow md:w-2/3 lg:w-2/4">
        <Formulario/>

      </main>
    </>
  )
}

export default Appseguro
