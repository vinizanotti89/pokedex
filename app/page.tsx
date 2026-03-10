async function getPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  return res.json()
}

export default async function Home() {
  const data = await getPokemon()

  return (
    <main style={{ padding: "40px" }}>
      <h1>Pokedex</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {data.results.map((pokemon) => (
          <div
            key={pokemon.name}
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px"
            }}
          >
            {pokemon.name}
          </div>
        ))}
      </div>
    </main>
  )
}