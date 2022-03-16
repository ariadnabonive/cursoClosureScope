//al realizar el ciclo con var todas las iteraciones va a traer el número 10

const anotherFunction = () => {
    for (var i=0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        },1000)
    }
};

anotherFunction();

//al realizar el ciclo con let en lugar de var
// va a correr correctamente sin cortar el ciclo

const anotherFunction = () => {
    for (let i=0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        },1000)
    }
};

anotherFunction();