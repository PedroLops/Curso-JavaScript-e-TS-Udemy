class Empregado{
    gerarDev(nome, salario){
        class Developer{
            constructor(nome, salario){
                this.nome = nome;
                this.salario = salario;
            }

            escreverCodigo(){
                console.log(`O código está sendo escrito pelo desenvolvedor ${this.nome}`);
            }
        }

        return new Developer(nome, salario);
    }


    gerarTester(nome, salario){
        class Tester{
            constructor(nome, salario){
                this.nome = nome;
                this.salario = salario;
            }

            testarCodigo(){
                console.log(`O código está sendo testado pelo tester ${this.nome}`);
            }
        }
        return new Tester(nome, salario);
    }
}


const fabricaEmpregado = new Empregado();
const dev1 = fabricaEmpregado.gerarDev('Pedro', 4000);
const tester1 = fabricaEmpregado.gerarTester('Otávio', 3800);

dev1.escreverCodigo();
tester1.testarCodigo();

