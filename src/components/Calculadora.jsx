import { useState } from 'react'

export function Calculadora() {
    const [salario, setSalario] = useState(0)
    const [resultado, setResultado] = useState(0)

    function calcular() {
        let desconto = 0

        if (salario <= 1518) {
        desconto = salario * 0.075
        } else if (salario >= 1518.01 && salario <= 2798.88) {
        desconto = (salario * 0.09) - 20.77
        } else if (salario >= 2798.89 && salario <= 4190.83) {
        desconto = (salario * 0.12) - 106.50
        } else if (salario >= 4190.84 && salario <= 8157.42) {
        desconto = (salario * 0.14) - 190.40
        }

        setResultado(desconto)
    }

    return(
        <div className='text-center'>
            <div className="flex items-center justify-center flex-col gap-2">
                <h2 className="uppercase">Insira o salário:</h2>
                <input type="number" className="text-center border-1 border-black rounded-2xl" value={salario} onChange={(e) => setSalario(Number(e.target.value))}/>
                <button className="bg-orange-500 w-full rounded-3xl text-white uppercase" onClick={calcular}> Calcula </button>
            </div>

            <div>
                <p>Desconto: R$ {resultado.toFixed(2)}</p>
            </div>

            
        </div>
    )
}