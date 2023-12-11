import Box from "../../../components/box";
import Card from "../../../components/card";
import Command from "../../../components/command";

function Home() {
  return (
    <div className="h-screen">
      <Box>
        <main className="mx-auto text-center">
          <h1 className="text-gray-700 dark:text-gray-200 font-semibold text-lg text-center">
            Nogx Template
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Una plantilla Vite + React
          </p>
          <p className="text-gray-700 dark:text-gray-200 mt-4">
            ¡Bienvenido a Nogx - Una forma más rápida de comenzar con React,
            Vite, React Icons y Tailwind CSS!
          </p>
          <p className="text-gray-700 dark:text-gray-200 mt-4">
            Para comenzar, a usar esta platilla solo tiene que clonar el{" "}
            <a
              href="https://github.com/Nogthings/vrt-template-ts-nogx"
              target="_blank"
              className="font-bold text-purple-700 dark:text-purple-300 hover:text-purple-300 dark:hover:text-purple-700"
            >
              repositorio git
            </a>{" "}
            en el directorio de su eleccion o bien puede usar el siguiente
            comando en su terminal para poder iniciar un proyecto con un
            repositorio limpio (Cambia my-project por el nombre que le quieras
            dar a tu proyecto).{" "}
          </p>
          <div className="flex items-center justify-center m-4">
            <Command>
              npx degit Nogthings/vrt-template-ts-nogx my-proyect
            </Command>
          </div>
        </main>

        <Card title="Vite" to="/store" button="Ir a la tienda">
          Vite es un nuevo compilador de frontend que sirve como reemplazo de
          desarrollo para webpack.
        </Card>
      </Box>
    </div>
  );
}

export default Home;
