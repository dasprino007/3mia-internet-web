function Contato() {
    return (
        <>
        <main className="px-8">
        <h2 className="text-3xl	font-bold mb-3">Envie um email que nunca vamos responder</h2>
        <div className="md:w-1/2">
        <p>A gente não vai responder esse email e so estamos colocando isso porque nosso chefe mando ter então toma ea depois não reclame se sua senha foi roubada.</p>
        <form className="flex flex-col mb-5 gap-3" action="post">
            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="nome">Nome:</label>
                <input className=" bg-secondary-color rounded-md h-8 font-semibold text-md" type="text" name="nome" id="nome" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="sobrenome">Sobrenome:</label>
                <input className=" bg-secondary-color rounded-md h-8 font-semibold text-md" type="text" name="sobrenome" id="sobrenome" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="nomeDoSeuCachorro">nome do seu cachorro:</label>
                <input className=" bg-secondary-color rounded-md h-8 font-semibold text-md" type="text" name="nomeDoSeuCachorro" id="nomeDoSeuCachorro" />
                <span className=" text-sm font-thin">Se não tem um cachorro crie um nome</span>
            </div>
            <div className="flex flex-col">
                <label className="font-semibold" htmlFor="descricao">descrição:</label>
                <textarea rows={15} cols={15} disabled="false" className=" bg-secondary-color rounded-md font-semibold text-md" name="descricao" id="descricao" />
            </div>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-third-color rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4">postar</button>
        </form>
        </div>
        </main> 
        </>
     );
}

export default Contato;