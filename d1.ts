import {parse} from 'https://deno.land/std@0.95.0/datetime/mod.ts';
import {bgYellow, black, red, white, bgBlack, bold, bgWhite} from 'https://deno.land/std@0.136.0/fmt/colors.ts';

function saludar(name:String):String {
    return `Hola, soy ${name}`;
}

//console.log(saludar('Fredy'));

//Punto 2 (fechas)
const fecha = parse("25-04-2022","dd-mm-yyyy");
//console.log(fecha);

//Punto 3 (color)
//console.log(bgYellow("Fredy"));

//Punto 4 (objeto global y variables de entorno)
//console.log(bgYellow(`${Deno.args.join()}`));

//console.log(Deno.env);

//Punto 5 (manejo de archivos)
let texto = Deno.args.join();
await Deno.writeTextFile("archivo1.txt",texto);