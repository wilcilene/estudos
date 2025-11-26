/**
 * Representa uma pessoa física (CPF).
 */
public class Fisica extends Pessoa {
    private String cpf;

    public Fisica() {
        super();
        this.cpf = "000.000.000-00";
    }

    public Fisica(String nome, String cpf) {
        super(nome);
        this.cpf = cpf;
    }

    public String getCPF() {
        return cpf;
    }

    public void setCPF(String cpf) {
        this.cpf = cpf;
    }

    @Override
    public String getDocumento() {
        return cpf;
    }

    @Override
    public String toString() {
        return "Pessoa Física: " + nome + " | CPF: " + cpf;
    }
}
