// Ejercicio #0
let promise = new Promise(
    function(resolve, reject) {
    resolve(1);
     setTimeout(() => resolve(2), 1000);
    });
    promise.then(alert);
// El resultado sería "1"

// Ejercicio #1
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => alert('runs after 3 seconds'));

  // Ejercicio #2
  promise.then(f1).catch(f2);
  vs
  promise.then(f1, f2);
  //No son iguales, porque con el primero, al ocurrir un error, es procesado con catch y de la segunda manera el error no sería manejado.

  // Ejercicio #3
  async function loadJson(url) {
    let response = await fetch(url);
  
    if (response.status == 200) {
      let json = await response.json();
      return json;
    }
  
    throw new Error(response.status);
  }
  
  loadJson('no-such-user.json')
    .catch(alert); // Error: 404