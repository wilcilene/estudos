/**
 * Classe principal para testar o sistema.
 */
public class Principal {
    public static void main(String[] args) {

        // Criando uma pessoa física
        Fisica pessoaFisica = new Fisica("Daniel", "123.456.789-10");
        System.out.println(pessoaFisica);
        System.out.println("Documento: " + pessoaFisica.getDocumento());

        System.out.println("------------------------------");

        // Criando uma pessoa jurídica
        Juridica empresa = new Juridica("OpenAI Brasil", "11.222.333/0001-44");
        System.out.println(empresa);
        System.out.println("Documento: " + empresa.getDocumento());

        System.out.println("------------------------------");

        // Polimorfismo
        Pessoa p1 = pessoaFisica;
        Pessoa p2 = empresa;

        System.out.println("Polimorfismo:");
        System.out.println(p1.getNome() + " -> " + p1.getDocumento());
        System.out.println(p2.getNome() + " -> " + p2.getDocumento());
    }
}
