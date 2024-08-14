import { useState } from "react";
import emailjs from '@emailjs/browser'

function Contato() {
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [sobrenome, setsobrenome] = useState('')
    const [dogname, setdogname] = useState('')
    const [desc, setdesc] = useState('')
    
    const Email = (e) => {
        if(email === '' || name === '' || sobrenome === '' || dogname === '' || desc === ''){
            alert("preencha os campos")
            return;
        }
        e.preventDefault();

        const contatoTemplate = {
            email: email,
            to_name : name,
            to_sobrenome: sobrenome,
            to_dogname : dogname
        }

        emailjs.send('service_9bor2dc','template_rjf7n49',contatoTemplate,'smLEttR_Bvrf_1o6j')
        .then(response => console.log(response, "\n email enviado"))
    }

    return (
        <>
        <main className="px-8">
        <h2 className="text-3xl	font-bold mb-3">Envie um email que nunca vamos responder</h2>
        <div className="md:w-1/2">
        <p>A gente não vai responder esse email e so estamos colocando isso porque nosso chefe mando ter então toma ea depois não reclame se sua senha foi roubada.</p>

            <form className="flex flex-col mb-5 gap-3" onSubmit={Email}>
            <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="email">Email:</label>
                    <input className=" bg-secondary-color rounded-md h-8 font-semibold text-md" type="text" name="email" id="email" required value={email} onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="nome">Nome:</label>
                    <input className=" bg-secondary-color rounded-md h-8 font-semibold text-md" type="text" name="nome" id="nome" required value={name} onChange={(e) => setname(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="sobrenome">Sobrenome:</label>
                    <input className=" bg-secondary-color rounded-md h-8 font-semibold text-md" type="text" name="sobrenome" id="sobrenome" value={sobrenome} required onChange={(e) => setsobrenome(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="nomeDoSeuCachorro">nome do seu cachorro:</label>
                    <input className=" bg-secondary-color rounded-md h-8 font-semibold text-md" type="text" name="nomeDoSeuCachorro" id="nomeDoSeuCachorro" value={dogname} required onChange={(e) => setdogname(e.target.value)}/>
                    <span className=" text-sm font-thin">Se não tem um cachorro crie um nome</span>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold" htmlFor="descricao">descrição:</label>
                    <textarea rows={15} cols={15} className=" bg-secondary-color rounded-md font-semibold text-md" name="descricao" id="descricao" required value={desc} onChange={(e) => setdesc(e.target.value)}/>
                </div>
                <button type="submit" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-third-color rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4">postar</button>
            </form>

        </div>
        </main> 
        </>
     );
}

export default Contato;