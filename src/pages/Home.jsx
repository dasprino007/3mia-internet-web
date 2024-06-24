function Home() {
    return ( 
        <>
        <section className="HeroImage flex flex-col bg-hero-pattern h-[100vh] justify-center gap-3 p-4">
                <h2 className=" text-3xl font-bold">TENHA TUDO SEM PAGAR UM CENTAVO </h2>
                <p className="md:w-[32rem] sm:w-full mobile:w-full">Pra que pagar um assinatura super cara para assistir uma serie ou duas se tu pode pegar de graça toltamente legal e não estamos roubando das empresas <span>CONFIA!!!!</span></p>
                <button type="button" className="py-2.5 px-5 me-2 mb-2 w-fit text-sm font-medium text-white focus:outline-none bg-third-color rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4">Assistir agora</button>
        </section>
        <div className="flex md:flex-row sm:flex-col mobile:flex-col justify-around items-center p-5">
            <img src="/device-pile.png" alt="" />
            <div className="flex flex-col w-[25rem]">
            <h2 className="text-3xl font-bold">Aproveite sua tv pirata em qualquer lugar</h2>
            <p className="text-lg">Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
            </div>
        </div>
        <div className="bg-halo-image flex flex-col gap-6 p-6 justify-end">
        <h2 className=" text-2xl font-bold">O seu tempo é levado a serio</h2>
        <p className="md:w-[32rem] sm:w-full mobile:w-full">Assista a series e filmes que são bons ou fale que assitiu mas todo mundo sabe que voce so viu um resumo no youtube então assista aqui é de graça</p>
        <button type="button" className="py-2.5 px-5 me-2 mb-2 w-fit text-sm font-medium text-white focus:outline-none bg-third-color rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4">Assistir agora</button>
        <div className=" flex md:flex-row sm:flex-col mobile:flex-col justify-between">
            <img className="aspect-poster md:h-[23rem] sm:mb-10 mobile:mb-10" src="/3homens_poster.jpg" alt="" />
            <img className="aspect-poster md:h-[23rem] sm:mb-10 mobile:mb-10" src="/Hallowin_poster.jpg" alt="" />
            <img className="aspect-poster md:h-[23rem] sm:mb-10 mobile:mb-10" src="/superman_poster.jpg" alt="" />
            <img className="aspect-poster md:h-[23rem] sm:mb-10 mobile:mb-10" src="/robocop_poster.jpg" alt="" />
        </div>
        </div>
        <div className="flex md:flex-row sm:flex-col mobile:flex-col justify-around items-center p-5">
            <img src="/AAAABUIQf-EOyyk3NFohgiSUVv5tl73COXhof_N8Gz2GD6IqJ0Cz-DzUfRzj2NhSocLHDrNUlFL3NK2fDG6MCKzVHt3kCmSOjrf4SuVb.png" alt="" />
            <div className="flex flex-col w-[25rem]">
            <h2 className="text-3xl font-bold">Deixe a sua crianças assistir seu desenhos.</h2>
            <p className="text-lg">Inves de dar um tablet a sua criança de um tablet com deguflix porque voce não aguenta mais ela</p>
            </div>
        </div>
        </>
     );
}

export default Home;