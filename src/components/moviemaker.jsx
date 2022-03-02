import React, { Component } from 'react';
import Validation from './common/validation';
import MovieForm from './movieForm';
import { saveMovie, getMovie } from "../services/fakeMovieService";
import { withRouter } from 'react-router'

class MovieMaker extends Component {
    state = { 
        data: {
            _id: "default",
            title: "",
            genre: "",
            stock: "",
            rate: ""
        },
        errors: {}
     }

     componentDidMount(){
         console.log(this)
        //  const movie = getMovie()
     }

    setView = (movie) => {
        const data = {
            _id: movie._id,
            title: movie.title,
            genre: movie.genre,
            stock: movie.numberInStock,
            rate: movie.dailyRentalRate
        }
        this.setState({data});
    }  

    // validateAll = () => {
    //     const { data } = this.state;
    //     const errors = {...this.state.errors};

    //     const obj = this.validate(data, 0, 100);
    //     const keys = Object.keys(obj);
    //     if (keys.length < 1) return null;

    //     keys.map(key => {
    //         errors[key] = obj[key];
    //     });
    //     return errors;
    // } 

    // handleChange = ({currentTarget: input}) => {
    //     const errors = {...this.state.errors};
    //     const errorMessage = this.validateOne(input, 0, 10);
    //     errors[input.name] = errorMessage;

    //     const data = {...this.state.data};
    //     data[input.name] = input.value;
    //     this.setState({ data, errors });
    // }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     const { data } = this.state;
    //     let errors = this.validateAll();
    //     if ( errors === null ) errors = {};
    //     const obj = Object.keys(errors);
    //     if (obj.length > 0) return this.setState({ errors });

    //     // server call
    //     console.log("form submitted.");
    //     saveMovie(data);
    //     console.log("Movie saved.")
    //     return true;
    // }

    render() { 
        const { data, errors } = this.state;
        return (
            <React.Fragment>
                <MovieForm
                // onChange={this.handleChange}
                data={data}
                // doSubmit={this.handleSubmit}
                errors={errors}
                // button={this.validateAll()}
                setView={this.setView}
                />
            </React.Fragment>
        );
    }
}
 
export default withRouter(MovieMaker);