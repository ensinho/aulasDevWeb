 const pokemons = [
    {
        nome: "Koraidon",
        tipo: "Dragão e Lutador",
        imagem: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/11/pokemon_sv_koraidon_banner.jpeg"
    },
    {
        nome: "Miraidon",
        tipo: "Dragão e Elétrico",
        imagem: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/most-powerful-legendary-pokemon-miraidon.jpg"
    },  
];

const container = document.getElementById('pokemons-container');

            for (let i = 0; i < pokemons.length; i++) {
                const p = pokemons[i];

                const section = document.createElement('section');
                section.id = p.nome.toLowerCase();
                section.className = 'secao';

                const h2 = document.createElement('h2');
                h2.className = 'subTitle';

                const a = document.createElement('a');
                a.href = `https://www.google.com/search?q=${encodeURIComponent(p.nome)}`;
                a.target = '_blank';
                a.textContent = `${p.nome} - o ${p.tipo.toLowerCase()}`;

                h2.appendChild(a);

                const imgDiv = document.createElement('div');
                imgDiv.className = 'imagem-container';

                const img = document.createElement('img');
                img.className = 'imagem';
                img.alt = `imagem ${p.nome}`;
                img.src = p.imagem;

                imgDiv.appendChild(img);

                const p1 = document.createElement('p');
                p1.textContent = 'Gosto muito desse pokémon, um dos meus favoritos';

                const p2 = document.createElement('p');
                p2.textContent = 'Ele também é muito forte competitivamente';

                section.appendChild(h2);
                section.appendChild(imgDiv);
                section.appendChild(p1);
                section.appendChild(p2);

                container.appendChild(section);
            }
