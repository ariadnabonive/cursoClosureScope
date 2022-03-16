const person =() =>{
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

newPerson = person();
//traemos el valor que se encuentra almacenado en la variable
console.log(newPerson.getName());
//asignamos un nuevo valor a newPerson
newPerson.setName('Oscar');
//volver a imprimir la variable newPerson
console.log(newPerson.getName());
