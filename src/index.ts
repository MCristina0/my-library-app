import {libro} from './models/libro';
import {libreria} from './models/libreria';
import { pedido } from './models/pedidos';

const librerias= new libreria();

const libro1 = new libro ("pricipito","antoine de saint","fitcion","español","80","tapadura","978-19864314480","un cuento magico que sigue las aventuras de un pequeño principe","nuevo","francia","1994-02-09","boka for you young",90,"11.43*3.18*18.42","100g",true);

const libro2 = new libro ("pricipitos","antoine de saint","fitcion","español","89","tapadura","978-19864314480","un cuento magico que sigue las aventuras de un pequeño principe","nuevo","francia","1994","boka for you young",96,"11.43*3.18*18.42","100g",true);

const libro3 = new libro ("pricipes","antoine de saint","fitcion","español","89","tapadura","978-19864314480","un cuento magico que sigue las aventuras de un pequeño principe","nuevo","francia","1994","boka for you young",98,"11.43*3.18*18.42","100g",true);

const pedido1 = new pedido ("07-08-2024",3105399262,"casa azul","principito")

function menu() {
    
    let  eleccion= "1"
    
    console.log (eleccion)
   
   
           switch(eleccion) {
               case '1': 
               librerias.addLibro(libro3)
            
                break;
                case '2': 
                librerias.removelibro()
             
                break;
                case '3': 
                librerias.listarlibros()
             
                break;
                case '4': 
            
                librerias.flitrarLibro("pricipitos")
             
                break;
                case '5': 
    
                librerias.ordenarLibros()
             
                break; 
                
                case '6': 
        
                librerias.addPedido(pedido1)
             
                break; 

               case '7':
           
                  console.log("termino la consulta")
                   break;
                 
               default:
                   console.log('Opción inválida, por favor elige de nuevo.');
                 
           };
       }
   
 menu() 
      

librerias.addLibro(libro1)
librerias.addLibro(libro2)

