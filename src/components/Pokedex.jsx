import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import DisplayPokemon from './DisplayPokemon'

function Pokedex({ name }) {

    // Stores data from the fetch
    const [data, setData] = useState([])
    // Flag handling the race condition of fetch
    //!const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log("use effect ran")
        // Prevents fetch triggering before it has pokemon value
        if (name !== "") {
            // Flag that stops execution of a console.log or other data append
            //setLoading(true)
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    // allows execution of other code to occur
                    //!setLoading(false)
                    //!loading ? null : console.log(data)
                })
                .catch(err => console.log(err))
        }
        // dependency causes useEffect trigger when name value changes
    }, [name])

    /* 
        Return statements only allow expressions
        Expressions only allow singular values to be expressed
        That's why we wrap them in () and Fragments <> </>
    */
    return (
        <>
            {/* {data == ""
                ? (<><h1>Loading</h1></>)
                : (<>
                    <h1>Name: {data.name}</h1>
                    <h2>Weight: {data.weight}</h2>
                    {data.stats.map((i, index) => <p key={index}>{i.stat.name}: {i.base_stat}</p>)}
                    <img src={data.sprites.front_shiny} alt="" />
                </>)
            } */}
            {console.log(data)}
            {data == ""
                ? <Loading />
                : <DisplayPokemon data={data} />
            }
        </>
    )
}

export default Pokedex