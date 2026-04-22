let dados = [];

        const salvar = (event) => {
              event.preventDefault();

            const nome = document.getElementById('nome').value;
            const idade = document.getElementById('idade').value;
            const email = document.getElementById('email').value;

            dados.push({nome, idade, email});

            const tabela = document.getElementById('Minha-tabela');
           tabela.innerHTML += `<tr>
            <td>${nome}</td>
            <td>${idade}</td>
            <td><a href="mailto:${email}">${email}</a></td>
            <td><button onclick="deletar(this)">Deletar</button></td>
            </tr>`;

            document.getElementById('nome').value = "";
            document.getElementById('idade').value = "";
            document.getElementById('email').value = "";
        }

            function deletar(botao) {
            const linha = botao.closest("tr");
            linha.remove();
        }