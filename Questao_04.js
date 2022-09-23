class Aluno {
    constructor(primeroNome, segundoNome, primeiraNota, segundaNota) {
      this.nome = primeroNome;
      this.sobrenome = segundoNome;
      this.n1 = primeiraNota;
      this.n2 = segundaNota;
    }

    get getCompleto(){
        return this.nomeCompleto()
    }
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }

    get getMedia(){
        return this.media();
    }
    media(){
        return (this.n1*0.6) + (this.n2*0.4)
    }

    get getSitaucao() {
        return this.situacao();
    }

    situacao(){
        return this.getMedia > 6 ? " Aprovado " : " Reprovado ";
    }
    
}
var a01 = new Aluno("João","da Silva",7,7);
var a02 = new Aluno("Maria","Clara",10,5);
var a03 = new Aluno("Rodrigo","Pereira",9,5.8);
var a04 = new Aluno("Marcelo","Caju",5,6.9);
var a05 = new Aluno("Tamires","Rosa",10,0);


const matriz = [[a01.getCompleto,a01.getMedia,a01.getSitaucao],
                [a02.getCompleto,a02.getMedia,a02.getSitaucao],
                [a03.getCompleto,a03.getMedia,a03.getSitaucao],
                [a04.getCompleto,a04.getMedia,a04.getSitaucao],
                [a05.getCompleto,a05.getMedia,a05.getSitaucao]]

for(var i = 0; i<1; i++) {
    for(var j = 0; j<5; j++) {
      alert(matriz[i,j]);
    }
}
  


