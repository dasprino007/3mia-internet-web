import data from "../../artigo.json";

function Home() {
  return (
    <>
      <h1>home</h1>
      <div>
        {data.map((Filmes, index) => (
          <div className="flex card p-2 m-2" key={index}>
            <img className="relative object-cover p-1 m-1 aspect-16/9" src={Filmes.image} />
            <div className="flex-col">
            <h1 className="p-1 m-1">{Filmes.title}</h1>
            <div className="m-1 tags">
                {
                    Filmes.tags.map(tag =>(
                        <span className=" p-1 m-1 text-white bg-red-600" key={tag}>{tag}</span>
                    ))
                }
            </div>
            <p key={Filmes.text} className="p-1 m-1 text-xs">{Filmes.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
