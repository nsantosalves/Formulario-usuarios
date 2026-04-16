let dados = [];

        const salvar = () => {
            const nome = document.getElementById('nome').value;
            const idade = document.getElementById('idade').value;
            const email = document.getElementById('email').value;

            dados.push({nome, idade, email});

            const tabela = document.getElementById('Minha-tabela');
            tabela.innerHTML +="<tr><td>" + nome + "</td><td>" + idade + "</td><td>" + email + "</td></tr>";

            document.getElementById('nome').value = "";
            document.getElementById('idade').value = "";
            document.getElementById('email').value = "";
        }