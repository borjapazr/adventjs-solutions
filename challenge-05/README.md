# Contando los días para los regalos

> ¡Qué ganas de abrir los regalos 🎁! Estoy tan nervioso que no paro de contar los días que faltan 🤣. ¿Me ayudas creando un programita? ¡Venga!

Con la emoción, ya estamos empezando a **contar los días del calendario hasta el 25 de diciembre** 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de `Date` nos diga el número de días que faltan.

Veamos unos ejemplos:

```javascript
const date1 = new Date('Dec 1, 2021');
daysToXmas(date1); // 24
const date2 = new Date('Dec 24, 2021 00:00:01');
daysToXmas(date2); // 1
const date3 = new Date('Dec 24, 2021 23:59:59');
daysToXmas(date3); // 1
const date4 = new Date('December 20, 2021 03:24:00');
daysToXmas(date4); // 5
```

El resultado tiene que ser **un número entero** y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.

**¡Pero ojo!** También hay que indicar si la fecha es del mismo día (devolveríamos `0`) o si es una fecha futura (devolveríamos el número de días en negativo `-`):

```javascript
const date = new Date('Dec 25, 2021');
daysToXmas(date); // 0
const date1 = new Date('Dec 26, 2021');
daysToXmas(date1); // -1
const date2 = new Date('Dec 31, 2021');
daysToXmas(date2); // -6
const date3 = new Date('Jan 1, 2022 00:00:01');
daysToXmas(date3); // -7
const date4 = new Date('Jan 1, 2022 23:59:59');
daysToXmas(date4); // -7
```

Por cierto, la fecha de referencia para saber si es 25 de diciembre es `Dec 25, 2021`.
