
import { Calculadora } from './components/calculadora'

export function App() {


  return (
    <div className="bg-stone-300 flex items-center justify-center flex-col gap-5 rounded-4xl p-3 border-orange-500 border-2 mt-10">
      <h1>Gestão</h1>

      <Calculadora />
    </div>
  )
}
