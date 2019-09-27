# Fx Call back en JavaScript

## [Entendiendo Callbacks en JavaScript](https://www.youtube.com/watch?v=O6YT-JJZ3P8)

- **Callback** es una fx que se pasa como parámetro a otra función.
- **Función de orden superior** Es una función que recibe como parámetro otra función. Es decir, no recibe un valor, como un entero, una cadena, un booleano, etc.

Ejemplo:

```JavaScript
function fxABC( fxCallBack(){
    //do something
})
{
    //do something else
}
```

La función `fxABC` recibe como parámetro la función `fxCallBack` callback. Luego la función `fxCallBack`
solo se ejecutará fuando la función `fxABC` se ejecute. Sin embargo, la ejecución de la función `fxCallBack`
será asincróna.

## [Asynchronous JavaScript #3 - Callback Functions](https://youtu.be/QRq2zMHlBz4)

See `index.js` for see the example
