import {libro} from './models/libro';
import {libreria} from './models/libreria';
import { pedido } from './models/pedidos';

const librerias= new libreria();

const libro1 = new libro ("pricipito","antoine de saint","fitcion","español","80","tapadura","978-19864314480","un cuento magico que sigue las aventuras de un pequeño principe","nuevo","francia","1994-02-09","boka for you young",90,"11.43*3.18*18.42","100g",true);

const libro2 = new libro ("pricipitos","antoine de saint","fitcion","español","89","tapadura","978-19864314480","un cuento magico que sigue las aventuras de un pequeño principe","nuevo","francia","1994","boka for you young",96,"11.43*3.18*18.42","100g",true);

const libro3 = new libro ("pricipes","antoine de saint","fitcion","español","89","tapadura","978-19864314480","un cuento magico que sigue las aventuras de un pequeño principe","nuevo","francia","1994","boka for you young",98,"11.43*3.18*18.42","100g",true);

const pedido1 = new pedido ("07-08-2024",3105399262,"casa azul","principito")



librerias.addLibro(libro1)
librerias.addLibro(libro2)

interface MenuItem {
    name: string;
    action: () => void;
}


interface MenuItem {
    name: string;
    action: () => void;
}

// Clase para representar el menú
class Menu {
    private items: MenuItem[];

    constructor() {
        this.items = [];
    }

    // Método para agregar elementos al menú
    addItem(item: MenuItem) {
        this.items.push(item);
    }

    // Método para mostrar el menú y ejecutar la acción seleccionada
    show() {
        console.log('Menú:');
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name}`);
        });

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(' elija una opcion por favor: \n 1. Agregar un libro \n 2. Quitar un libro \n 3. Mostrar libro \n 4.buscar por titulo \n 5. odenar libro\n 6.realizar pedido \n 7.Salir ', (option:string) => {
            const choice = parseInt(option);
            if (choice > 0 && choice <= this.items.length) {
                this.items[choice - 1].action();
            } else {
                console.log('Opción inválida.');
            }
            readline.close();
        });
    }
}

// Ejemplo de uso del menú
function main():void {
    const menu = new Menu();

    // Agregar elementos al menú
    menu.addItem({
        name: '1',
        action: () => {
            librerias.addLibro(libro3)
            main()
        }
    });

    menu.addItem({
        name: '2',
        action: () => {
            librerias.removelibro()
            main()
           
        }
    });
 
   menu.addItem({
    name: '3',
    action: () => {
        librerias.listarlibros()
        main()

    }
});

menu.addItem({
    name: '4',
    action: () => {
       
        librerias.flitrarLibro("pricipitos")
        main()
    }
});
   // Agregar elementos al menú
   menu.addItem({
    name: '5',
    action: () => {
        librerias.ordenarLibros()
        main()
      }
});

menu.addItem({
    name: '6',
    action: () => {
        librerias.addPedido(pedido1)
        main()
    }
});


    menu.addItem({
        name: '7',
        action: () => {
            console.log('Saliendo del menú.');
            
            process.exit(0);
        }
    });

    // Mostrar el menú
    menu.show();
}

// Llamar a la función principal para iniciar el programa
main();