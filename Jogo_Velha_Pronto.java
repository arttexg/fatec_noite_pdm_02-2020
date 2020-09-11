//HTML

<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Document</title>
</head>
<body>
 <div id="root"></div>
</body>
</html>

==========================================

//CSS

.quadrado{
 background: #fff;
 border: 1px solid #999;
 font-size: 24px;
 float: left;
 font-weight: 34px;
 height: 34px;
 margin-right: -1px;
 margin-top: -1px;
 padding: 0;
 text-align: center;
 width: 34px;
}

.board-row:after{
 clear: both;
 content:"";
 display: block;
}

.game {
display: flex;
flex-direction: row;
}
.game-info {
margin-left: 20px;
}

============================================

//JavaScript

// function Quadrado(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//     {props.value}
//     </button>
//   )
// }

// ReactDOM.render(
// <Quadrado 
//   onClick={
//       ()=>{
//       alert ('Clicou!');
//     }
//    }
//   value={2+3}
//   />,
//   document.getElementById("root")
// );

class Quadrado extends React.Component {
  render() {
     return (
       <button
         className="quadrado"
         onClick={() => {this.props.onClick()}}>
         {this.props.value}
        </button>
     );
   }
   
 }
 
 class Tabuleiro extends React.Component {
   
   constructor(props){
     super(props);
     this.state={
       quadrados:Array(9).fill(null),
       xIsNext: true      
     };
   }
   renderizarQuadrado (i){
     return (
     <Quadrado
       value={this.state.quadrados[i]}
       onClick={() => this.handleClick(i)}
       />
     );
   }
   
   
   render (){
     const vencedor = calculateWinner (this.state.quadrados);
     const status = vencedor ? ('Vencedor: ' + vencedor) : ('Jogador: ' + (this.state.xIsNext ? 'X' :'O'))
     return (
       <div>
         <div> {status}</div>
       
         <div className="board-row">
           {this.renderizarQuadrado(0)}
           {this.renderizarQuadrado (1)}
           {this.renderizarQuadrado (2)}
         </div>
         <div className="board-row">
           {this.renderizarQuadrado (3)}
           {this.renderizarQuadrado (4)}
           {this.renderizarQuadrado (5)}
         </div>
         <div className="board-row">
           {this.renderizarQuadrado (6)}
           {this.renderizarQuadrado (7)}
           {this.renderizarQuadrado (8)}
         </div>
         <div className="button"> 
          <button onClick={() =>  this.resetClick()}>Reiniciar</button>
          <button onClick={() =>  this.randomPlay()}>Jogada IA</button>
        </div>  
       </div>
     );
   }
   
   handleClick(i) {
     const quadrados = this.state.quadrados.slice();
     if (calculateWinner (quadrados)) {
       alert ('Jogo já Acabou');
       return;
     }
     if (quadrados [i]) {
       alert ('Quadrado Ocupado!')
       return;
     }
     quadrados[i] = this.state.xIsNext? 'X':'O';
     this.setState({quadrados:quadrados, xIsNext:!this.state.xIsNext});
   }
   resetClick() {
     const quadrados = this.state.quadrados.fill(null);
     this.setState({quadrados:quadrados, value:null});
  }
  randomPlay() {
    const quadrados = this.state.quadrados.slice();
    var i = 0;
    while(quadrados [i]) {
      i = Math.floor(Math.random() * 9);
    }
    this.handleClick(i);
      return;
    
  }
 }
 
 
 
 // ReactDOM.render(
 // <Tabuleiro quadrados={Array(9).fill().map((value,pos) => pos)}/>,
 // document.getElementById("root")
 // );
 
 
 class Jogo extends React.Component {
   render() {
     return (
       <div className="game">
         <div className="game-board">
           <Tabuleiro/>
          </div>
         <div className="game-info">
           <ol>("Movimentos")</ol>
          </div>
         </div>
      );
   }
  
 }
 
 function calculateWinner(quadrados) {
   const lines = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
     const [a, b, c] = lines[i];
     if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
       return quadrados[a];
     }
   }
   return null;
 }
 
   
 ReactDOM.render (
 <Jogo/>,
 document.getElementById("root"));


