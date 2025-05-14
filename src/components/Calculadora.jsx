import { useState } from 'react'

export function Calculadora() {
    const [salario, setSalario] = useState(0)
    const [resultado, setResultado] = useState(0)
    const [aliquota, setAliquota] = useState(0)
    const [deducao, setDeducao] = useState(0)

    function calcular() {
        let desconto = 0
        let a = 0
        let d = 0

        if (salario <= 1518) {
            a = 0.075
            d = 0
        } else if (salario <= 2798.88) {
            a = 0.09
            d = 20.77
        } else if (salario <= 4190.83) {
            a = 0.12
            d = 106.50
        } else if (salario <= 8157.42) {
            a = 0.14
            d = 190.40
        }

        desconto = (salario * a) - d
        setResultado(desconto)
        setAliquota(a)
        setDeducao(d)
    }

    return (
        <div className='text-center'>
            <div className="flex items-center justify-center flex-col gap-2">
                <h2 className="uppercase">Insira o salário:</h2>
                <input
                    type="number"
                    className="text-center border-1 border-black rounded-2xl"
                    value={salario}
                    onChange={(e) => setSalario(Number(e.target.value))}
                />
                <button
                    className="bg-orange-500 w-full rounded-3xl text-white uppercase"
                    onClick={calcular}
                >
                    Calcula
                </button>
            </div>

            <div>
                <p>
                    Desconto: R$ {salario} * {aliquota} - {deducao} = R$ {resultado.toFixed(2)}
                </p>
            </div>
        </div>
    )
}