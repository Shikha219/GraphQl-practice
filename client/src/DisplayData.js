import React, { useState } from 'react'
import { useQuery,gql,useLazyQuery } from '@apollo/client'

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            username
            age
        }
    }
`

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            id
            name
            isInTheaters
            yearOfPublication
        }
    }
`

const GET_MOVIE_BY_NAME = gql`
    query Movie($name: String!) {
        movie(name: $name) {
            name
            yearOfPublication
        }
    }
`

function DisplayData() {
    const [movieSearched, setMovieSearched] = useState("");

    //create User States
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(0);
    const [nationality, setNationality] = useState("");

    const {data,loading,err} = useQuery(QUERY_ALL_USERS);
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES);
    const [fetchMovie, {data: movieSearchedData, error: movieError}] = useLazyQuery(GET_MOVIE_BY_NAME)

    if (movieError) console.log(movieError);
    if (data) console.log(data);
    if (loading) return <h1>LOADING ...</h1>
    if (err) console.log(err);
  return (
    <div>
    <div>
        <input type="text" placeholder='Name...' />
        <input type="text" placeholder='Username...' />
        <input type="number" placeholder='Age...' />
        <input type="text" placeholder='Nationality...' />
        <button> Create User</button>

    </div>
    {data && data.users.map((user) => {
        return <div>
            <h1>Name: {user.name}</h1>
            <h1>Username: {user.username}</h1>
            <h1>Age: {user.age}</h1>

        </div>
    })}
    {movieData && movieData.movies.map((movie)=>{
        return <div>
            <h1>MovieName: {movie.name}</h1>

        </div>
    })}

    <input type='text' placeholder='Interstellar...' onChange={(event)=>{
        setMovieSearched(event.target.value);
    }} />
    <button onClick={()=> {
        fetchMovie({variables: {
            name: movieSearched
        }});
    }}> Fetch Data</button>
    <div>{movieSearchedData && (
        <div className="r">
            <h1>MovieName: {movieSearchedData.movie.name}</h1>
            <h1>Year Of Publication: {movieSearchedData.movie.yearOfPublication}</h1>

        </div>
    )}
    {movieError && <h1>There was an error while fetching the data</h1>}
    </div>
    
    </div>
  )
}

export default DisplayData