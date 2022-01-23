import { Switch, Route, Redirect } from 'react-router-dom';
import { PokedexView } from './components/PokedexView';
import { DetailsView } from './components/DetailsView';
import { Navigation } from './components/Navigation';
import { Heading } from './components/Heading';
import { withRouter } from './HOCs';
import PokemonsProvider from './context/PokemonsProvider';
import generations from './data/generations';
import './App.css';

function App() {
	return (
		<PokemonsProvider>
			<div className="pokedex-app">
				<Heading />

				<Navigation />

				<Switch>
					<Route exact path="/">
						<Redirect to={ generations[ 0 ].link } />
					</Route>
					{
						generations.map( ( { id, link } ) => (
							<Route key={ id } exact path={ '/' + link }>
								<PokedexView generation={ id } />
							</Route>
						) )
					}
				</Switch>

				<DetailsView />
			</div>
		</PokemonsProvider>
	);
}

export default withRouter( App );
