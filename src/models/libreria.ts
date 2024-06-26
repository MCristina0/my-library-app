import {libro} from './libro';
import {pedido} from './pedidos';

export class libreria{


     private libro: libro[];
     private pedido: pedido[];


    constructor(){
        this.libro =[];
        this.pedido =[];
    }

addLibro(libro:libro):void
{
this.libro.push(libro);
 
}

removelibro():void{

    if (this.libro.length > 0) {
        this.libro.pop();
        console.table(libro)
        console.log("se elimino el ultimo libro.");
      } else {
          console.log("La pila está vacía.");
        }
}



flitrarLibro (nombre:string) {
    const fiterlibros = this.libro.filter((libro)=>{
        return libro.titulo === nombre;
    }).map((fiterlibros2) => {
        return{
           titulo:fiterlibros2.titulo,
           autor:fiterlibros2.autor,
           editorial:fiterlibros2.editorial,
           precio:fiterlibros2.precio,
        }
    
    })
    console.log("buscar por libro");
    console.table(fiterlibros);
}

    
ordenarLibros( ): void {
    const ordenarLibros= this.libro.sort((a,b) => b.paginas-a.paginas)
.map((librospagMayorMenor) => {
    return{
       titulo:librospagMayorMenor.titulo,
       autor:librospagMayorMenor.autor,
       editorial:librospagMayorMenor.editorial,
       paginas:librospagMayorMenor.paginas, 
    }
})

console.log("ordenal libros de mayor a menor ");
console.table(ordenarLibros);
    
}
listarlibros( ):void{
    const listar = this.libro.map((libro) =>{
        return{
            titulo:libro.titulo,
            autor:libro.autor,
            editorial:libro.editorial,
            descripcion:libro.descripcion,
        };


})
console.log("mostrar  libros");
console.table(listar);
}


addPedido(pedido:pedido):void
{
this.pedido.push(pedido);
 
}

}
