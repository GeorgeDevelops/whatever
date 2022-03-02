import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import Genres from './common/genres';
import { paginate } from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import MovieTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Search from './common/search';


class Movie extends Component {
    state = { 
        movies: getMovies(),
        pageSize: 3,
        currentPage: 1,
        genres: getGenres(),
        currentGenre: 'All genres',
        sortColumn: { path: 'title', order: 'asc'},
        search: ""
     }

     componentDidMount(){
         console.log(this.props);
     } 

     handleLike = movie => {
         const movies = [...this.state.movies];
         const index = movies.indexOf(movie);
         movies[index].liked = !movies[index].liked
         this.setState({ movies });
     }

     handleMovies(movies){  
        return (
           movies.map( movie =>
                <tr key={movie._id}>
                    <td><Link to={`/movies/${movie._id}`}>{ movie.title }</Link></td>
                    <td> { movie.genre.name } </td>
                    <td> { movie.numberInStock } </td>
                    <td> { movie.dailyRentalRate } </td>
                    <td><Like 
                    onLike={() => this.handleLike(movie)} 
                    liked={ movie.liked } />
                    </td>
                    <td>
                    <button 
                    onClick={ () => this.handleDelete(movie) } 
                    style={{ direction: 'rtl'}} 
                    className='btn btn-danger'>Delete
                    </button>
                    </td>
                </tr>
             )
        );
     }

    handleDelete(movie){
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies })
    }

    handlePageChange = page => {
        this.setState({currentPage: page})
    }

    handleGenreFilter = (movie) => {
        this.setState({currentGenre: movie, currentPage: 1 });
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    handleChange = ({currentTarget: input}) => {
       console.log("Changed");
    }

    render() { 
        const { length: count } = this.state.movies;
        if ( count === 0 ) return <h3>There are no movies in the database.</h3>

        const { pageSize, currentPage, movies: allMovies, genres, currentGenre, sortColumn, search } = this.state;

        const filtered = currentGenre === 'All genres' 
        ? allMovies 
        : allMovies.filter(m => m.genre.name === currentGenre)

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return (
            <div className='row'>

                <div className="col-2">
                <Genres 
                items={genres}
                onGenreFilter={this.handleGenreFilter} 
                currentGenre={currentGenre}
                />
                </div>

                <div className="col">
                <h3 style={{display: 'block'}}>Showing { filtered.length } movies from the database.</h3>

                <button className="btn btn-primary m-3">
                    <Link style={{ color: '#fff', textDecoration: 'none'}} to='/movies/new'>New Movie</Link>
                </button>

                <Search 
                value={search}
                onChange={this.handleChange}
                name="search"
                placeholder={"Search"}
                />

                <MovieTable
                sortColumn={sortColumn}
                onMoviesRender={this.handleMovies(movies)} 
                onSort={this.handleSort}
                />

                <Pagination 
                onPageChange={this.handlePageChange} 
                items={ filtered.length } 
                pageSize={pageSize} 
                currentPage={currentPage} 
                />
                </div>
            </div>
        );
    }
}
 
export default Movie;