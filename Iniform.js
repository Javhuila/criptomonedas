import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';
import Loading from './Loading';
import Resultado from './Resultado';

function IniForm() {

    const [monedas, setMonedas] = useState({})
    const [resultados, setResultados] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(() =>{
        if(Object.keys(monedas).length > 0){
            // console.log(monedas)
            const cotizarCripto = async () =>{
                setCargando(true)
                setResultados({})
                
                const {moneda, cripmon } = monedas
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripmon}&tsyms=${moneda}`
            
                const respuesta = await fetch(url)
                const resultados = await respuesta.json()
                // console.log(resul)

                setResultados(resultados.DISPLAY[cripmon][moneda])
                setCargando(false)
            }
            cotizarCripto()
        }
    }, [monedas])

  return (
    <div>
        <Formulario
        setMonedas={setMonedas}
        />
        {cargando && <Loading />}
        {resultados.PRICE && <Resultado resultados={resultados} />}
    </div>
  )
}

export default IniForm
