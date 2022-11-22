# ¿Cuántos adornos necesita el árbol?

> ¡Ay! Que llega la Navidad y no hemos decorado todavía el árbol. 🎄😱 ¡Tenemos que hacer algo lo antes posible!

¡Ay! Que llega la Navidad y no hemos decorado todavía el árbol. 🎄😱

Necesitamos una función que pasándole un árbol binario nos diga el número de decoraciones que necesitamos. Para ello tenemos un objeto que sería la representación del árbol y que nos indica en cada nivel el número de ramas a decorar.

Lo mejor es que veamos un ejemplo:

```javascript
// tenemos el árbol en forma de objeto
const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  }
};

/* Gráficamente sería así:
    1
  /   \
 2     3

1 + 2 + 3 = 6
*/

countDecorations(tree); // 6

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
};

/*
        1
      /   \
     5     6
    /     / \
   7     5   1
  /
 3
*/

countDecorations(bigTree); // 28
```

Por cierto, Bellf Gates me ha contado que este tipo de ejercicio es muy típico en las entrevistas de trabajo para programadores. ¿Lo sabías?
