/**
 * Classe base abstrata para representar uma pessoa.
 * Não pode ser instanciada diretamente.
 */
public abstract class Pessoa {
    protected String nome;

    protected Pessoa() {
        this.nome = "Sem nome";
    }

    protected Pessoa(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    /**
     * Método abstrato que deve ser implementado
     * pelas subclasses para retornar um documento específico.
     */
    public abstract String getDocumento();
}
