import { useState } from "react";
import data from "../../artigo.json";

function Blog() {
  const [SearchValue, setSearch] = useState('')
  const [FilterValue, SetFilter] = useState(data)
    const handleInput = (input) =>{
      const Value = input.target.value;
      setSearch(Value)
      // o react não rodava se tivesse fora da function motivo: eu não sei
      const filter = data.filter(data => data.title.toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase()))
      SetFilter(filter)
    }

  return (
    <>
    <main className="p-4">
      <div className="caixa">
        <h1 className="text-3xl	font-bold">noticias</h1>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={SearchValue} onChange={handleInput}/>
      </div>
      <div className="px-8 gap-4">
        {FilterValue.map((Filmes, index) => (
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
