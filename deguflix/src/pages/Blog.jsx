import data from "../../artigo.json";

function Blog() {
  return (
    <>
    <main className="p-4">
      <h1 className="text-3xl	font-bold">noticias</h1>
      <div className="px-8 gap-4">
        {data.map((Filmes, index) => (
          <div className="m-3 p-3 bg-secondary-color rounded-md flex md:flex-row justify-center items-center gap-4 sm:flex-col mobile:flex-col" key={index}>
            <img className="object-fill aspect-16/9 h-48" src={Filmes.image} />
            <div className="flex flex-col gap-2">
            <h1 className="text-2xl	font-bold">{Filmes.title}</h1>
            <div className="flex flex-row gap-2">
                {
                    Filmes.tags.map(tag =>(
                        <span className="bg-third-color px-2 rounded-full font-semibold" key={tag}>{tag}</span>
                    ))
                }
            </div>
            <p key={Filmes.text} className="text-sm">{Filmes.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
    </>
  );
}

export default Blog;
