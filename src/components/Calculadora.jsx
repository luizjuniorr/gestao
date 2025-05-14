import { useState } from 'react'

export function Calculadora() {
    const [salario, setSalario] = useState('')
    const [resultado, setResultado] = useState(0)
    const [aliquota, setAliquota] = useState(0)
    const [deducao, setDeducao] = useState(0)
    const [fixo, setFixo] = useState(false)

    function calcular() {
        const valorNumerico = Number(salario.replace(',', '.'))
        let desconto = 0
        let a = 0
        let d = 0
        let isFixo = false

        if (valorNumerico <= 1518) {
            a = 0.075
            d = 0
        } else if (valorNumerico <= 2798.88) {
            a = 0.09
            d = 20.77
        } else if (valorNumerico <= 4190.83) {
            a = 0.12
            d = 106.50
        } else if (valorNumerico <= 8157.42) {
            a = 0.14
            d = 190.40
        } else {
            desconto = 908.86 // teto de contribuição INSS (ajuste conforme o ano)
            isFixo = true
        }

        if (!isFixo) {
            desconto = (valorNumerico * a) - d
        }

        setResultado(desconto)
        setAliquota(a)
        setDeducao(d)
        setFixo(isFixo)
    }

    return (
        <div className='text-center'>
            <div className="flex items-center justify-center flex-col gap-2">
                <h2 className="uppercase">Insira o salário:</h2>
                <input
                    type="text"
                    className="text-center border-1 border-black rounded-2xl"
                    value={salario}
                    onChange={(e) => setSalario(e.target.value)}
                    placeholder="Ex: 2500,50"
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
                    {fixo
                        ? `Desconto fixo do INSS: R$ ${resultado.toFixed(2)}`
                        : `Desconto: R$ ${salario} * ${aliquota} - ${deducao} = R$ ${resultado.toFixed(2)}`
                    }
                </p>
            </div>
        </div>
    )
}