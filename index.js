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
  