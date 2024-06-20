import Card from '../Components/Card'
import { useMedicoStates } from '../Components/utils/global.context';

const Home = () => {
  const { state, dispatch } = useMedicoStates();
  const addFav = (medico) => {
    dispatch({ type: "ADD_FAV", payload: medico });
  };

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.medicos.map((medico) => (
          <Card item={medico} key={medico.id}>
            <button onClick={() => addFav(medico)} className="favButton">Add fav</button>
          </Card>
        ))}
      </div>
    </main>
  )
}
export default Home