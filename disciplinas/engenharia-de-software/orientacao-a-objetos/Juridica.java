/**
 * Representa uma pessoa jurídica (CNPJ).
 */
public class Juridica extends Pessoa {
    private String cnpj;

    public Juridica() {
        super();
        this.cnpj = "00.000.000/0001-00";
    }

    public Juridica(String nome, String cnpj) {
        super(nome);
        this.cnpj = cnpj;
    }

    public String getCNPJ() {
        return cnpj;
    }

    public void setCNPJ(String cnpj) {
        this.cnpj = cnpj;
    }

    @Override
    public String getDocumento() {
        return cnpj;
    }

    @Override
    public String toString() {
        return "Pessoa Jurídica: " + nome + " | CNPJ: " + cnpj;
    }
}
