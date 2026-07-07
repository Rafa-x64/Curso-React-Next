# 🚀 Nivel 2: El JavaScript que React Necesita (ES6+ a fondo)

En este nivel dominaremos el motor de nuestra arquitectura. React no es un lenguaje nuevo; es JavaScript moderno (ES6+) aplicado con rigor. Si entiendes cómo fluyen los datos aquí, el Nivel 3 (TypeScript) y el Nivel 4 (React) serán pan comido.

---

## 2.1. Inmutabilidad y Ámbito: let, const y Scopes

**Conceptos Clave:**
Olvida el uso de `var`. En el desarrollo profesional usamos `const` para proteger la referencia de nuestras variables y `let` solo cuando la reasignación es estrictamente necesaria [1, 2].
- **Block Scope:** A diferencia de `var`, tanto `let` como `const` respetan el ámbito de bloque (lo que esté entre llaves `{}`). Si declaras una variable dentro de un `if`, no existirá fuera de él [3, 4].

**Buenas Prácticas:**
- Usa `const` por defecto para todo. Esto evita "bugs silenciosos" donde una variable cambia de valor sin que te des cuenta.

---

## 2.2. Sintaxis Express: Arrow Functions

**Conceptos Clave:**
Las funciones de flecha (`=>`) proporcionan una sintaxis mucho más limpia y compacta [3]. 
- **Retorno Implícito:** Si la función solo tiene una línea, no necesitas la palabra `return` ni las llaves [5].
- **Contexto Léxico:** A diferencia de las funciones tradicionales, las *Arrow Functions* no crean su propio `this`, sino que heredan el del contexto donde fueron creadas, lo cual es vital para los componentes de React [3].

**Ejemplos de Código:**
```javascript
// Antes (ES5)
var sumar = function(a, b) { return a + b; };

// Ahora (ES6+ Pro)
const sumar = (a, b) => a + b;
```

---

## 2.3. Manipulación de Datos: Destructuring, Spread y Rest

**Conceptos Clave:**
- **Destructuring:** Permite "descomponer" objetos y arrays para asignar sus valores a variables individuales de forma rápida [6, 7].
- **Spread Operator (`...`):** Es la herramienta maestra de la inmutabilidad. Nos permite clonar arrays u objetos y añadir o modificar elementos sin alterar el original [8, 9].
- **Rest Parameters:** Permite agrupar un número indeterminado de argumentos en un solo array [6, 10].

**Planificación Proactiva:**
> Usar el *Spread Operator* para actualizar estados en lugar de métodos mutables como `.push()` asegura que el "Virtual DOM" de React detecte los cambios por referencia y repinte la interfaz eficientemente [8].

---

## 2.4. Template Literals Avanzados

**Conceptos Clave:**
Usamos las comillas invertidas (`` ` ``) para crear *Template Literals*. Esto permite inyectar variables directamente con la sintaxis `${variable}` y escribir strings multilínea sin concatenaciones pesadas con el signo `+` [6, 7].

**Enseñanza Comparativa:**
- **En PHP:** Es equivalente a usar comillas dobles `"Hola $nombre"`. En JS moderno es `` `Hola ${nombre}` ``.

---

## 2.5. Programación Funcional: Funciones Puras e Inmutabilidad

**Conceptos Clave:**
- **Funciones Puras:** Son funciones que, para una misma entrada, siempre devuelven el mismo resultado y no tienen efectos secundarios (no modifican nada fuera de ellas) [11].
- **Inmutabilidad:** En lugar de modificar (mutar) un dato existente, generamos una copia con los cambios aplicados [12, 13].

**Buenas Prácticas:**
- Procura que tus componentes y funciones de transformación sean puros. Esto hace que tu código sea "cacheable" (memoizable) y extremadamente fácil de testear [11, 14].

---

## 🛠️ Mini-Proyecto: "Transformador Inmutable de Productos"

Vamos a aplicar todo lo aprendido en un script de lógica pura (puedes verlo en tu `page.tsx`).

```javascript
export default function Home() {
  interface Producto {
    nombre: string;
    precio: number;
    descuento: number;
  }

  const productosBase: Producto[] = [
    { nombre: "harina", precio: 1.25, descuento: 0 },
    { nombre: "sal", precio: 0.65, descuento: 0 }
  ];

  // 1. Añadimos un producto de forma inmutable (Spread)
  const listaNueva = [...productosBase, { nombre: "agua", precio: 0.20, descuento: 0 }];

  // 2. Aplicamos descuento del 10% con .map (Función pura)
  const productosFinales = listaNueva.map(({ precio, ...resto }) => ({
    ...resto,
    precio,
    descuento: Number((precio * 0.9).toFixed(2))
  }));

  return (
    <main>
      {productosFinales.map((p, i) => (
        <p key={i}>🥞 {p.nombre}: ${p.descuento}</p>
      ))}
    </main>
  );
}
```

---

## 🧠 Trivia Challenge

1. **¿Cuál es la diferencia de ámbito entre `var` y `let`?** 
   - *Respuesta:* `var` tiene ámbito de función (o global) y sufre de hoisting, mientras que `let` tiene ámbito de bloque (solo vive dentro de `{}`) [3, 4].
2. **¿Por qué usamos el Spread Operator (`...`) al actualizar una lista en React?** 
   - *Respuesta:* Para crear una nueva referencia en memoria (clon), permitiendo que React detecte que los datos cambiaron y actualice la UI [8].
3. **¿Qué beneficio principal ofrecen las funciones puras para el Testing?** 
   - *Respuesta:* Al no depender de estados externos ni efectos secundarios, no requieren "mocks" complejos; solo pasas datos y esperas un resultado predecible [11, 15].

---
**¿Motor a punto? Es hora de blindarlo. Dime: "Siguiente nivel: TypeScript".**