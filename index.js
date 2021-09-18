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

// Ejercicio #4
  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }

  async function demoGithubUser() {
    let user;
    while(true) {
      let name = prompt("Ingrese un nombre:", "iliakan");
  
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break; // sin error, salir del bucle
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          // bucle continúa después del alert
          alert("No existe tal usuario, por favor reingrese.");
        } else {
          // error desconocido, lo relanza
          throw err;
        }
      }
    }
    alert(`Nombre completo: ${user.name}.`);
    return user;
  }
  
  demoGithubUser();

  //Ejercicio #5
  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
  }
  
  function f() {
    wait().then(result => alert(result));
  }
  
  f();

  //Ejercicio #6
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);
  //No lo disparará, porque el error no es generado cuando el ejecutor está corriendo, sino después.

  // Ejercicio #7

  // 1. Utilizando setInterval
  function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  printNumbers(1, 10);

  // 2. Usando setTimeout anidado
  function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  
  printNumbers(1, 10);