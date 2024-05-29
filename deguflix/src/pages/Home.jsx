import data from "../../artigo.json";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        {data.map((Filmes, index) => (
          <div className="flex flex-col items-center w-full" key={index}>
            <h1 className="p-1 m-1">{Filmes.title}</h1>
            <div className="m-1 tags">
                {
                    Filmes.tags.map(tag =>(
                        <span className=" p-1 m-1 text-white bg-red-600" key={tag}>{tag}</span>
                    ))
                }
            </div>
            <img width={"1200"} height={"675"} src={Filmes.image} />
            <p key={Filmes.text} className="p-1 m-1 w-[50rem]">{Filmes.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
