import React,{ useEffect, useState } from 'react';
import useSelectMonedas from '../Nombrecarpetaproyecto/hook/useSelectMonedas';
import { monedas } from './data/monedas';

    function Formulario({setMonedas}) {

    const [criptos, setCriptos] = useState([]);
    const [errrr, setError] = useState(false);
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
    const [cripmon, SelectCripMon] = useSelectMonedas('Elige tu Criptomoneda', criptos);
    useEffect(() => {
        const consultarAPI = async() => {
            const url ="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url)
            const resul = await respuesta.json()

            const arrayCriptos = resul.Data.map(cripto => {
                // console.log(cripto.CoinInfo)
                // console.log(cripto.CoinInfo.FullName)
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                // console.log(objeto)
                return objeto
            })
            // console.log(arrayCriptos)

            //Respuesta del servicio
            // console.log(resul.Data)
            setCriptos(arrayCriptos)
        }
        consultarAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if ([moneda, cripmon].includes('')){
            // console.log('Error. Campos no seleccionados')
            setError(true)

            return
        }
        setError(false)
        setMonedas({
            moneda,
            cripmon
        })
    }

    return (
        <div>
        <form 
        className='fondo001'
        onSubmit={handleSubmit}
        >
            <div className='row'>
                <div className='col-6'>
                    <img 
                        src='https://static.elcorreo.com/www/multimedia/202103/04/media/cortadas/bitcoin-criptomonedas-que-son-como-comprar-2021-kOGG-U130689965568SbH-1248x770@El%20Correo.jpg'
                        alt='crypto'
                        className='imgcrypto'
                    />
                </div>
                <div className='col-4' style={{marginLeft:'100px', paddingTop:'139px'}}>
                    <center><h1 className='titulo001'>Crypto Monedas</h1></center>
                    <SelectMonedas />
                    <SelectCripMon />
                    {/* {moneda} */}
                    <input
                        className='input001'
                        type="submit"
                        value="Cotizar"
                    />
                    { errrr &&<p className='error001'>Todos los campos son necesarios</p> }
                </div>
            </div>
        </form>
        </div>
        )
    }

export default Formulario;
