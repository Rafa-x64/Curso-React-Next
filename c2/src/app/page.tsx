import Image from "next/image";

export default function Home() {
  //interfaz
  interface Producto {
    nombre: string,
    precio: number,
    descuento: number
  }

  //array de objetos
  const productosBase: Producto[] = [
    {
      nombre: "harina",
      precio: 1.25,
      descuento: 0
    },
    {
      nombre: "sal",
      precio: 0.65,
      descuento: 0
    },
    {
      nombre: "agua",
      precio: 0.20,
      descuento: 0
    }
  ];

  const listaExtendida = [...productosBase, {nombre: 'queso', precio: 10, descuento: 0}];

  //funcion para aplicar descuentos
  const productos = listaExtendida.map(producto =>{//hacemos un map para iterar sobre cada producto
      const rebaja = producto.precio * 0.10;//calculamos la rebaja para cada producto
      return {...producto, descuento: Number ((producto.precio - rebaja).toFixed(2))}//modificamos el valor del descuento por el perio menos la rebaja
  })

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {
        productos.map((producto, index) => (//iteramos sobre cada producto del array
            <p key={index} className="text-zinc-800 dark:text-zinc-200">{/*imprimimos un p para cada producto*/}
              🥞 <strong>{producto.nombre}</strong>: Antes ${producto.precio} | Ahora con 10% desc: <span className="text-green-600 font-bold">${producto.descuento}</span>
            </p>
        ))
        }
      </main>
    </div>
  );
}
