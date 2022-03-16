const buildCount = i => {
    let count = i;
    const displayCount = () => {
      console.log(count++);
    };
    return displayCount;
  };


  //Desde esta variable podemos acceder a la utilidad de la función
  //iniciando la cuenta en 1
  const myCount = buildCount(1);
  myCount(); // 1
  myCount(); // 2
  myCount(); // 3
  
   //Desde esta segunda variable podemos acceder a la utilidad de la función
  //desde otra parte de cógigo iniciando la cuenta en 10
  const myOtherCount = buildCount(10);
  myOtherCount(); // 10
  myOtherCount(); // 11

