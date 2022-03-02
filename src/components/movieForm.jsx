import React, { Component, useEffect } from "react";
import Input from "./common/input";
import { genres } from "../services/fakeGenreService";
import Select from "./common/select";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../services/fakeMovieService";

const MovieForm = (props) => {
  // const params = useParams();
  // const navigate = useNavigate();
  

  const { data, errors, setView } = props;
  // console.log("Params:", params);

  // const confirmParam = () => {
  //   const { movieId } = params;
  //   const movie = getMovie(movieId);
  //   setView(movie);
  // }

  console.log(data);

  return (
    <React.Fragment>
      
      <form onSubmit={()=>{}}>
      <Input 
      type={"text"} 
      label={"Title"} 
      placeholder={"Title"}
      name={"title"}
      value={data.title}
      onChange={()=>{}}
      error={errors.title}
      />

      <Select 
      name={"genre"} 
      label={"Genre"} 
      items={genres} 
      onChange={()=>{}}
      />

      <Input 
      type={"number"} 
      label={"Stock"}
      placeholder={"Stock"} 
      name={"stock"}
      value={data.stock}
      onChange={()=>{}}
      min={0}
      max={100}
      error={errors.stock}
      />

      <Input 
      type={"number"} 
      label={"Rate"}
      placeholder={"Rate"} 
      name={"rate"}
      value={data.rate}
      onChange={()=>{}}
      min={1}
      max={10}
      step={.01}
      error={errors.rate}
      />

      <button
      type={"submit"} 
      className={"btn btn-primary"}
      value={"Save"}
      // disabled={()=>{}}
      >Save</button>
      </form>

    </React.Fragment>
  );
};

export default MovieForm;
