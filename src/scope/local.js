//-------EJEMPLO 1
const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
// si tratamos de acceder a la variable afuera de la función
//retornara un error en consola ya que la variable está definida en el scope local 
console.log(hello);

//-------EJEMPLO 2
let scope = 'I am global';

const functionScope = () => {
    let scope = 'I am local';
    const func = () => {
        return scope
    }
    console.log(func()); 
};

functionScope();
console.log(scope); 