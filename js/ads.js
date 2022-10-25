let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myTable");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

class Table1 extends React.Component {
   constructor(props) {
      super(props) 
      this.state = { 
         componentes: [
            { id: 1, disciplina: 'Comunicação e Expressão', carga: 33.30, periodo: 'Noturno', semestre: 1 },
            { id: 2, disciplina: 'Arquitetura de Computadores', carga: 66.70, periodo: 'Noturno', semestre: 1 },
            { id: 3, disciplina: 'Inglês I', carga: 33.3, periodo: 'Noturno', semestre: 1 },
            { id: 4, disciplina: 'Algoritmos e Lógica de Programação', carga: 66.7, periodo: 'Noturno', semestre: 1 },
			      { id: 5, disciplina: 'Fundamentos Matemáticos para Computação', carga: 66.7, periodo: 'Noturno', semestre: 1 },
			      { id: 6, disciplina: 'Laboratório de Algoritmos e Programação', carga: 66.7, periodo: 'Noturno', semestre: 1 }
         ]
      }
   }

    renderTableHeader() {
      let header = Object.keys(this.state.componentes[0]).splice(1,3);      
      console.log(header);
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.componentes.map((componente, index) => {
         const { id, disciplina, carga, periodo } = componente
         return (
            <tr key={id}>               
               <td>{disciplina}</td>
               <td>{carga}</td>
               <td>{periodo}</td>
            </tr>
         )
      })
   }
  
   renderTableSemestre() {
      return this.state.componentes.slice(-1).map((componente, index) => { 
        const { semestre } = componente
        return (
          <b>{semestre}</b>
        )
      })
   }


   render() { 
      return (
         <div><center>
            <h2 id='title'>COMPONENTES CURRÍCULARES - {this.renderTableSemestre()}º SEMESTRE</h2>
            <table id='componentes'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </center></div>
      )
   }
}

class Table2 extends Table1 {
   constructor(props) {
      super(props) 
      this.state = { 
         componentes: [
            { id: 1, disciplina: 'Estruturas de Dados', carga: 66.70, periodo: 'Noturno', semestre: 2 },
            { id: 2, disciplina: 'Introdução a Banco de Dados', carga: 66.70, periodo: 'Noturno', semestre: 2 },
            { id: 3, disciplina: 'Sistemas Operacionais', carga: 33.3, periodo: 'Noturno', semestre: 2 },
            { id: 4, disciplina: 'Inglês II', carga: 33.3, periodo: 'Noturno', semestre: 2 },
			      { id: 5, disciplina: 'Introdução à Administração', carga: 33.3, periodo: 'Noturno', semestre: 2 },
			      { id: 6, disciplina: 'Laboratório de Estruturas de Dados e Programação', carga: 33.3, periodo: 'Noturno', semestre: 2 },
			      { id: 7, disciplina: 'Computadores e Sociedade', carga: 33.3, periodo: 'Noturno', semestre: 2 }
         ]
      }
   }
}

class Table3 extends Table1 {
   constructor(props) {
      super(props) 
      this.state = { 
         componentes: [
            { id: 1, disciplina: 'Programação Orientada a Objetos', carga: 66.70, periodo: 'Noturno', semestre: 3 },
            { id: 2, disciplina: 'Engenharia de Software', carga: 66.70, periodo: 'Noturno', semestre: 3 },	
            { id: 3, disciplina: 'Redes de Computadores I', carga: 66.70, periodo: 'Noturno', semestre: 3 },
            { id: 4, disciplina: 'Laboratório de Banco de Dados', carga: 33.3, periodo: 'Noturno', semestre: 3 },
			      { id: 5, disciplina: 'Laboratório de Programação Orientada a Objetos', carga: 33.3, periodo: 'Noturno', semestre: 3 },
			      { id: 6, disciplina: 'Sistemas de Informação Gerenciais', carga: 66.7, periodo: 'Noturno', semestre: 3 }
         ]
      }
   }
}

class Table4 extends Table1 {
   constructor(props) {
      super(props) 
      this.state = { 
         componentes: [
            { id: 1, disciplina: 'Metodologia de Pesquisa Científica e Tecnológica', carga: 33.30, periodo: 'Noturno', semestre: 4 },
            { id: 2, disciplina: 'Estatística Básica', carga: 33.30, periodo: 'Noturno', semestre: 4 },
            { id: 3, disciplina: 'Análise de Projeto Orientado a Objetos', carga: 66.7, periodo: 'Noturno', semestre: 4 },
            { id: 4, disciplina: 'Redes de Computadores II', carga: 66.7, periodo: 'Noturno', semestre: 4 },
			      { id: 5, disciplina: 'Desenvolvimento Web', carga: 66.7, periodo: 'Noturno', semestre: 4 },
			      { id: 6, disciplina: 'Programação e Administração de Banco de Dados', carga: 66.7, periodo: 'Noturno', semestre: 4 }
         ]
      }
   }
}

class Table5 extends Table1 {
   constructor(props) {
      super(props) 
      this.state = { 
         componentes: [
            { id: 1, disciplina: 'Gestão de Projetos', carga: 33.30, periodo: 'Noturno', semestre: 5 },
            { id: 2, disciplina: 'Interação Humano-Computador', carga: 66.70, periodo: 'Noturno', semestre: 5 },
            { id: 3, disciplina: 'Projeto Integrador', carga: 33.3, periodo: 'Noturno', semestre: 5 },
            { id: 4, disciplina: 'Introdução à Teoria da Computação', carga: 66.7, periodo: 'Noturno', semestre: 5 },
			      { id: 5, disciplina: 'Desenvolvimento de Sistemas Web', carga: 66.7, periodo: 'Noturno', semestre: 5 },
			      { id: 6, disciplina: 'Sistemas Distribuídos', carga: 66.7, periodo: 'Noturno', semestre: 5 }
         ]
      }
   }
}

class Table6 extends Table1 {
   constructor(props) {
      super(props) 
      this.state = { 
         componentes: [
            { id: 1, disciplina: 'Empreendedorismo', carga: 33.30, periodo: 'Noturno', semestre: 6 },
            { id: 2, disciplina: 'Teste e Qualidade de Software', carga: 66.70, periodo: 'Noturno', semestre: 6 },
            { id: 3, disciplina: 'Segurança e Auditoria de Sistemas', carga: 33.3, periodo: 'Noturno', semestre: 6 },
            { id: 4, disciplina: 'Serviços de Rede', carga: 66.7, periodo: 'Noturno', semestre: 6 },
			      { id: 5, disciplina: 'Tópicos Especiais', carga: 33.30, periodo: 'Noturno', semestre: 6 },
			      { id: 6, disciplina: 'Desenvolvimento para Dispositivos Móveis', carga: 66.7, periodo: 'Noturno', semestre: 6 }
         ]
      }
   }
}

ReactDOM.render(<Table1 />, document.getElementById('1sem'));
ReactDOM.render(<Table2 />, document.getElementById('2sem'));
ReactDOM.render(<Table3 />, document.getElementById('3sem'));
ReactDOM.render(<Table4 />, document.getElementById('4sem'));
ReactDOM.render(<Table5 />, document.getElementById('5sem'));
ReactDOM.render(<Table6 />, document.getElementById('6sem'));
