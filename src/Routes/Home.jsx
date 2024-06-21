import Card from '../Components/Card'
import { useMedicoStates } from '../Components/utils/global.context';

const Home = () => {
  const { state, dispatch } = useMedicoStates();
  const addFav = (medico) => {
    const findFav = state.fav.find(favMedico => favMedico.id === medico.id);
    !findFav
      ? dispatch({ type: "ADD_FAV", payload: medico })
      : alert(`El médico ${medico.name} ya está en la lista de favoritos.`);
  };

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.medicos.map((medico) => (
          <Card item={medico} key={medico.id}>
            <button onClick={() => addFav(medico)} className="favButton">
              <img src='../images/favorito.jfif' alt="Añadir a favoritos" className="estrella" />
            </button>
          </Card>
        ))}
      </div>
    </main>
  )
}
export default Home