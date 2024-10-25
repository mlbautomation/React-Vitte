const Fetcher1 = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  return res.json();
};

export default Fetcher1;
