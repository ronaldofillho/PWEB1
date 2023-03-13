class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplina = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplina);
        return disciplina;
    }

    removerDisciplina(codigo) {
        this.repositorio.remover(codigo);
    }

    listarDisciplinas() {
        return this.repositorio.listar();
    }

    buscarPorCodigo(codigo) {
        return this.repositorio.buscarPorCodigo(codigo);
    }

    buscarPorNome(nome) {
        return this.repositorio.buscarPorNome(nome);
    }

    inserirAlunoNaDisciplina(disciplina, aluno) {
        this.repositorio.inserirAlunoNaDisciplina(disciplina, aluno);
    }

    removerAlunoDaDisciplina(disciplina, aluno) {
        this.repositorio.removerAlunoDaDisciplina(disciplina, aluno);
    }
}