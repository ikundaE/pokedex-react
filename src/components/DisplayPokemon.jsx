import React from 'react'

function DisplayPokemon({ data }) {
    return (
        <>
            <h1>Name: {data.name}</h1>
            <h2>Weight: {data.weight}</h2>
            {data.stats.map((i, index) => <p key={index}>{i.stat.name}: {i.base_stat}</p>)}
            <img src={data.sprites.front_shiny} alt="" />
        </>
    )
}

export default DisplayPokemon