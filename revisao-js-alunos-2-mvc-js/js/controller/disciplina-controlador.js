class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserirDisciplina() {
        const codigoDisciplina = Number(document.querySelector("#codigo").value);
        const nomeDisciplina = document.querySelector("#nomeDisciplina").value;
        const disciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);
        if (disciplina) {
            this.mostrarDisciplinaNoHTML(codigoDisciplina, nomeDisciplina);
            alert('Disciplina inserida com sucesso!');
        } else {
            alert('Já existe uma Disciplina com este Código!');
        }
    }

    mostrarDisciplinaNoHTML(codigo, nome) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `O código da Disciplina: ${codigo} - O nome da Disciplina: ${nome}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplinaDaLista(codigo);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplinaDaLista(codigo) {
        this.disciplinaServico.remover(codigo);
    }

    adicionarAlunoADisciplina() {
        const codigoDisciplina = Number(document.querySelector("#codigo-disciplina").value);
        const nomeAluno = document.querySelector("#nome-aluno").value;
        let disciplina = null;
        if (codigoDisciplina) {
            disciplina = this.disciplinaServico.buscarPorCodigo(codigoDisciplina);
        }
        if (disciplina) {
            const aluno = new Aluno(nomeAluno);
            this.disciplinaServico.inserirAlunoNaDisciplina(disciplina, aluno);
            this.mostrarAlunoNaLista(codigoDisciplina, nomeAluno);
            console.log(disciplina)
            alert('Aluno adicionado com sucesso!');
        } else {
            alert('Disciplina não encontrada!');
        }
    }
    

    removerAlunoDaDisciplina(codigo, nome) {
        const disciplina = this.disciplinaServico.buscarPorCodigo(codigo);
        const aluno = new Aluno(nome);
        this.disciplinaServico.removerAlunoDaDisciplina(disciplina, aluno);
    }

    mostrarAlunoNaLista(codigo, nome) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `O código da Disciplina que o aluno está matriculado: ${codigo}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerAlunoDaDisciplina(event.target.parentElement.getAttribute("data-codigo"), nome);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        elementoP.setAttribute("data-codigo", codigo);
        document.body.appendChild(elementoP);
    }
}

