import Card from '../Components/Card'
import { useMedicoStates } from '../Components/utils/global.contextnico';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const { state, dispatch , setFav} = useMedicoStates();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.medicos.map((medico) => (
          <Card item={medico} key={medico.id}>
            {/* <button onClick={addFav} className="favButton">Add fav</button> */}
            <button onClick={() => setFav((prevState) => [...prevState, medico])} className="favButton">Add fav</button>
          </Card>
        ))}
      </div>
    </main>
  )
}
export default Home