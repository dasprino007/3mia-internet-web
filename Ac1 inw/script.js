window.onload = () => {
  // esse codigo É UMA LOCURA
    header()
    banner()
    apresentacao()
    habi()
    forms()
    footer()
  };
  
  function header(){
    const lista = [
    {
      href : "#home",
      texto : "Home"
    },
    {
      href : "#sobre",
      texto : "sobre nos"
    },
    {
      href : "#habi",
      texto : "habilidades"
    },
    {
      href : "#contato",
      texto : "contato"
    },
    ]

    const header = document.querySelector("header")
    const heading = document.createElement("h1");
    const headingText = document.createTextNode("DL & JD");
    heading.appendChild(headingText);
    header.appendChild(heading)

    const ul = document.createElement("ul")
    ul.classList.add("item")
    header.appendChild(ul)
    
    lista.forEach(lista => {
      const li = document.createElement("li")
      const a = document.createElement("a")
      li.classList.add("itens")
      a.classList.add("link")
      a.href = lista.href
      const aText = document.createTextNode(lista.texto);
      a.appendChild(aText)
      li.appendChild(a)
      ul.appendChild(li)
    });
  }

  function banner(){
    const banners = [{
      id : "banner1",
      src : "https://avatars.githubusercontent.com/u/98829380?v=4",
      alt : "José Diogo",
      h2 : "José Diogo",
      small : "Front end / Designer UI/UX"
    },
    {
      id : "banner2",
      src : "https://images.emojiterra.com/openmoji/v13.1/512px/2755.png",
      alt : "Diego Leite",
      h2 : "Diego Leite",
      small : "Back End</"
    }]
    const main = document.querySelector("main")
    const section = document.createElement("section");
    section.classList.add("banner");
    section.setAttribute("id", "home")
    
    banners.forEach(banners => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const h2 = document.createElement("h2");
      const small = document.createElement("small");
      const br = document.createElement("br");
      const h2text = document.createTextNode(banners.h2);
      const smalltext = document.createTextNode(banners.small);
      
      div.setAttribute("id", banners.id)
      
      img.src = banners.src
      img.alt = banners.alt
      
      div.appendChild(img)
      small.appendChild(smalltext)
      h2.appendChild(h2text)
      h2.appendChild(br)
      h2.appendChild(small)
      div.appendChild(h2)
      section.appendChild(div)
    });
    main.appendChild(section);
  }

  function apresentacao(){
    const apres = [{
      classe : "apreJD",
      h2 : "Ola!!",
      p : "Eu me chamo José Diogo, sou um progamador Front End e Desingner. Tenho 16 anos, tenho algumas esperiencias com progamação, e esperiencia como garçom. Estou no 3° ano do encisinio medio tecnico :D"

    },
    {
      classe : "apreDL" ,
      h2 : "COÉ",
      p : "sei la faço depois"
    }]
    const main = document.querySelector("main")
    const section = document.createElement("section");
    section.classList.add("apresentacao");
    section.setAttribute("id", "habi")
    
    apres.forEach(apres => {
      const div = document.createElement("div")
      div.classList.add(apres.classe)
      const h2 = document.createElement("h2")
      const p = document.createElement("p")

      const h2text = document.createTextNode(apres.h2)
      const ptext = document.createTextNode(apres.p)

      h2.appendChild(h2text)
      p.appendChild(ptext)
      div.appendChild(h2)
      div.appendChild(p)
      section.appendChild(div)  
    });

    main.appendChild(section);
  }

  function habi(){
    const cards = [
      {
      h3 : "Front End",
      p : "Html / Css / Figma"
      },
      {
        h3 : "Back End",
        p : "JS / Java / SQL / Mongo DB"
      },
      {
        h3 : "Designer UI/UX / Figma",
        p : "Design"
      },
      {
        h3 : "Analista De Dados",
        p : "Banco De Dados"
      }  
    ]

    const main = document.querySelector("main")
    const section = document.createElement("section");
    section.setAttribute("id", "sobre")
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const h2text = document.createTextNode("Habilidades")

    section.classList.add("cards");
    section.setAttribute("id", "habi")
    div.classList.add("cards2")

    h2.appendChild(h2text)
    section.appendChild(h2)

    cards.forEach(cards => {
      const card = document.createElement("div")
      const h3 = document.createElement("h3")
      const p = document.createElement("p")
      card.classList.add("Card")

      const h3text = document.createTextNode(cards.h3)
      const ptext = document.createTextNode(cards.p)

      h3.appendChild(h3text)
      p.appendChild(ptext)
      card.appendChild(h3)
      card.appendChild(p)
      div.appendChild(card)
    });

    section.appendChild(div);
    main.appendChild(section);
  }

  function forms(){
    const inputs = 
    [
      {
        classe: "formGroup",
        for : "email",
        label : "mensagem",
        type : "email",
        id : "email",
        name : "Email",
        input : "input"
      },
      {
        classe: "formGroup",
        for : "mensagem",
        label : "mensagem",
        type : "mensagem",
        id : "mensagem",
        name : "Mensagem",
        input : "textarea"
      },
    ]


    const main = document.querySelector("main")
    const section = document.createElement("section");
    const form = document.createElement("form")
    const fundo = document.createElement("div")
    const img = document.createElement("div")
    const h2 = document.createElement("h2")
    const button = document.createElement("button")
    const h2text = document.createTextNode("Entre Em Contato")
    const btText = document.createTextNode("Entrar")

    fundo.classList.add("fundo");
    form.classList.add("formPart")
    img.classList.add("img");
    section.classList.add("forms");
    button.classList.add("button")

    section.setAttribute("id", "contato")
    form.setAttribute("action", "/cadastro")
    form.setAttribute("method", "post")
    button.setAttribute("type", "submit")

    h2.appendChild(h2text)
    form.appendChild(h2)
    
    inputs.forEach(inputs => {
      const formgroup = document.createElement("div")
      const label = document.createElement("label")
      const input = document.createElement(inputs.input)
      
      const labeltext = document.createTextNode(inputs.name)
      
      formgroup.classList.add(inputs.classe)
      label.setAttribute("for", inputs.for)
      input.setAttribute("type" , inputs.type)
      input.setAttribute("id" , inputs.id)
      input.setAttribute("name" , inputs.name)
      
      label.appendChild(labeltext)
      formgroup.appendChild(label)
      formgroup.appendChild(input)
      form.appendChild(formgroup)
    });
    
    button.appendChild(btText)
    form.appendChild(button)
    fundo.appendChild(img)
    fundo.appendChild(form)
    section.appendChild(fundo)
    main.appendChild(section)
  }

  function footer(){

    const sobreCada = [{
      h1text : "DJ"
    },
    {
      h1text : "DL"
    }
  ]

  const JoseSocias = 
  [
    {
      href: "https://www.instagram.com/ze.dio/",
      nome : "Instagram",
      src : "./imgs/Footer/instagram.png"
    },
    {
      href: "https://www.linkedin.com/in/jos%C3%A9-d-33634b280",
      nome : "Linkdin",
      src :  "./imgs/Footer/linkedin.png"
    },
    {
      href: "https://www.instagram.com/ze.dio/",
      nome : "Instagram",
      src : "./imgs/Footer/whatsapp.png"
    },
    {
      href: "https://github.com/ZeDio",
      nome : "github",
    }
  ]

    const footer = document.querySelector("footer")
    for(i = 1; i <= 4; i++){
      const div = document.createElement("div")
      
      div.classList.add("wave")
      div.classList.add("wave"+[i])
      
      footer.appendChild(div)
    }


  }