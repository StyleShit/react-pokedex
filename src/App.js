import { Switch, Route, Redirect } from 'react-router-dom';
import { PokedexView } from './components/PokedexView';
import PokemonsProvider from './context/PokemonsProvider';
import { withRouter } from './HOCs';
import generations from './data/generations';
import './App.css';

function App() {
	return (
		<PokemonsProvider>
			<div className="pokedex-app">

				<h1>
				P<i></i>kédex
				</h1>

				<Switch>

					<Route exact path="/">
						<Redirect to={ generations[ 0 ].link } />
					</Route>

					{
						generations.map( ( gen, i ) => (

							<Route key={ i } exact path={ '/' + gen.link }>
								<PokedexView generation={ gen.id } />
							</Route>

						) )
					}

				</Switch>

			</div>
		</PokemonsProvider>
	);
}

export default withRouter( App );
