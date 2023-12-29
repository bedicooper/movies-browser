import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Navigation from "./Navigation";
import MovieList from "./features/movies/MovieList";
import MovieDetails from "./features/movies/MovieDetails";
import PeopleList from "./features/people/PeopleList";
import PersonDetails from "./features/people/PeopleDetails";
import { toMovieList, toMovieDetails, toPeopleList, toPeopleDetails } from "./routes";
import { Main } from './common/Main/Main';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Main>
        <Switch>
          <Route path={toMovieDetails()}>
            <MovieDetails />
          </Route>
          <Route path={toMovieList()}>
            <MovieList />
          </Route>
          <Route path={toPeopleDetails()}>
            <PersonDetails />
          </Route>
          <Route path={toPeopleList()}>
            <PeopleList />
          </Route>
          <Route path='/'>
            <Redirect to={toMovieList()} />
          </Route>
        </Switch>
      </Main>
    </HashRouter>

  );
};

export default App;
