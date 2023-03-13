class DisciplinaRepositorio {
    constructor() {
        this._disciplinas = [];
    }

    inserir(disciplina) {
        this._disciplinas.push(disciplina);
        return disciplina;
    }

    remover(codigo) {
        const indxRemocao = this._disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        this._disciplinas.splice(indxRemocao, 1);
    }

    listar() {
        return this._disciplinas;
    }

    buscarPorCodigo(codigo) {
        return this._disciplinas.find(disciplina => disciplina.codigo === codigo);
    }

    buscarPorNome(nome) {
        return this._disciplinas.filter(disciplina => disciplina.nome === nome);
    }

    inserirAlunoNaDisciplina(disciplina, aluno) {
        const alunos = disciplina.alunos;
        alunos.push(aluno);
        disciplina.alunos = alunos;
    }

    removerAlunoDaDisciplina(disciplina, aluno) {
        const alunos = disciplina.alunos;
        const index = alunos.indexOf(aluno);
        if (index !== -1) {
          alunos.splice(index, 1);
          disciplina.alunos = alunos;
        }
    }
}
