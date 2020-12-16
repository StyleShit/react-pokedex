import { PokedexView } from './components/PokedexView';
import { withRouter } from './HOCs';
import generations from './generations';
import './App.css';

function App()
{

	return (
		<div className="pokedex-app">

			<h1>
				P<i></i>kédex
			</h1>

			<PokedexView generation={ generations[0] } />

		</div>
	);
}

export default withRouter( App );