# Make It Real - Reto 1 JavaScript

This is a solution to the first project of the Make It Real course.

## Table of contents

- [Comprobar si la propiedad existe en el objeto](#Comprobar-si-la-propiedad-existe-en-el-objeto)
- [Fix Error: manipulación de arreglos](#Fix-Error:-manipulación-de-arreglos)


## Comprobar si la propiedad existe en el objeto
Comprobar si la propiedad existe en el objeto
```js
function myFunction(a, b) {

  return
}
```
| Test Case                                 | Expected |
|-------------------------------------------|----------|
| myFunction({a:1,b:2,c:3},'b')             | `true`   |
| myFunction({x:'a',y:'b',z:'c'},'a')       | `false`  |
| myFunction({x:'a',y:'b',z:undefined},'z') | `false`  |

## Fix Error: manipulación de arreglos
¡Ayuda a corregir todos los errores en la función incrementItems! ¡Está destinado a agregar 1 a cada elemento en el arreglo!
```js
function incrementItems(arr) {
  for (let i = 0; i < array.length; i++) {
    arr[i] === arr[i] + 1
  }

  return array
}
```
| Test Case                        | Expected        |
|----------------------------------|-----------------|
| incrementItems([0, 1, 2, 3])     | [1, 2, 3, 4]    |
| incrementItems([2, 4, 6, 8])     |  [3, 5, 7, 9]   |
| incrementItems([-1, -2, -3, -4]) | [0, -1, -2, -3] |