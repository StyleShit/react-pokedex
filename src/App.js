import { Switch, Route, Redirect } from 'react-router-dom';
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

			<Switch>

				<Route exact path='/'>
					<Redirect to={ generations[0].link } />
				</Route>

				{
					generations.map( ( gen, i ) => (

						<Route key={ i } exact path={ '/' + gen.link }>
							<PokedexView generation={ gen } />
						</Route>

					))
				}

			</Switch>

		</div>
	);
}

export default withRouter( App );