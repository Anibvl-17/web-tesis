import { FiUserX } from "react-icons/fi";
import logo from "./assets/argilla-icon-light.png";
import { SiSpeedtest } from "react-icons/si";
import { MdHistoryToggleOff, MdMoneyOff } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

function App() {
  return (
    <>
      <nav className="w-full px-96 py-4 justify-between shadow-lg sticky border-b border-b-gray-800">
        <span className="flex flex-row gap-4 items-center text-white font-bold">
          <img src={logo} alt="Logo argilla" className="size-10" />
          <p className="italic text-xl">
            <span className="text-red-500">a</span>rgillá hornos
          </p>
        </span>
        <span>{/* Botones de navegacion */}</span>
      </nav>
      {/* HERO */}
      <div className="px-96 py-42 text-center">
        <h1 className="text-6xl/normal font-bold pb-12">
          El control de tu horno desde <br />
          <span className="text-red-500">la palma de tu mano</span>
        </h1>
        <p className="text-gray-400 text-xl px-32">
          Monitorea y controla tus quemas desde cualquier lugar, en cualquier momento. Mediciones en
          tiempo real, curvas ilimitadas y soporte técnico a tu alcance.
        </p>
      </div>
      {/* Problema */}
      <div className="bg-mist-900 py-24 px-96 text-center">
        <h2 className="text-3xl/relaxed font-bold">
          Los controladores actuales limitan tu producción
        </h2>
        <p className="text-gray-400">
          Los equipos importados no están pensados para los ceramistas. Te explicamos porqué:
        </p>
        {/* Explicacion Problemas */}
        <div className="text-start flex flex-row flex-wrap gap-8 mt-12">
          {/* Usabilidad limitada */}
          <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
            <span>
              <FiUserX className="size-6 text-red-500" />
            </span>
            <div>
              <h3 className="text-lg font-semibold flex flex-row gap-4 mb-2">
                Usabilidad limitada
              </h3>
              <p className="text-gray-400">
                Los controladores PID actuales utilizan interfaces poco intuitivas y configuraciones
                en inglés, lo que genera frustración y constantes llamados a soporte técnico.
              </p>
            </div>
          </div>

          {/* Limitacion tecnica */}
          <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
            <span>
              <SiSpeedtest className="size-6 text-red-500 scale-x-[-1]" />{" "}
              {/* scale-x-[-1] es para girar la imagen */}
            </span>
            <div>
              <h3 className="text-lg font-semibold flex flex-row gap-4 mb-2">
                Limitaciones técnicas
              </h3>
              <p className="text-gray-400">
                Programas de quema limitados y sin conectividad. El ceramista debe permanecer en el
                lugar durante los ciclos de quema que pueden tardar horas.
              </p>
            </div>
          </div>

          {/* Sin telemetría ni control de costos */}
          <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
            <span>
              <MdMoneyOff className="size-6 text-red-500" />
            </span>
            <div>
              <h3 className="text-lg font-semibold flex flex-row gap-4 mb-2">
                Sin telemetría ni control de costos
              </h3>
              <p className="text-gray-400">
                No entregan información sobre el consumo de energía, lo que dificulta la estimación
                del costo energético por cada ciclo de quema.
              </p>
            </div>
          </div>

          {/* Soporte sin trazabilidad */}
          <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
            <span>
              <MdHistoryToggleOff className="size-6 text-red-500" />
            </span>
            <div>
              <h3 className="text-lg font-semibold flex flex-row gap-4 mb-2">
                Soporte sin trazabilidad
              </h3>
              <p className="text-gray-400">
                No existe registro de vida útil ni alertas sobre variaciones anormales, perdiendo
                oportunidades de prevención y mantenimiento.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* /Explicacion Problemas */}
      </div>{" "}
      {/* /Problema */}
      {/* Propuesta */}
      <div className="py-24 px-96 flex flex-row justify-between items-center gap-24">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl/snug font-bold">
            Sistema IoT para Monitoreo y Control de Hornos Cerámicos Eléctricos
          </h2>
          <p className="max-w-lg text-pretty text-mist-400">
            Una plataforma conectada a un controlador personalizado en tu horno. Controla, monitorea
            y optimiza tus quemas desde cualquier lugar del mundo.
          </p>

          {/* Caracteristicas destacables */}
          <div className="flex flex-row gap-16 text-sm">
            <div className="flex flex-col gap-3">
              <span className="flex flex-row gap-2 items-center">
                <IoMdCheckmark className="text-red-500 size-5" /> Control remoto
              </span>

              <span className="flex flex-row gap-2 items-center">
                <IoMdCheckmark className="text-red-500 size-5" /> Interfaz gráfica amigable
              </span>

              <span className="flex flex-row gap-2 items-center">
                <IoMdCheckmark className="text-red-500 size-5" /> Alertas automáticas
              </span>

              <span className="flex flex-row gap-2 items-center">
                <IoMdCheckmark className="text-red-500 size-5" /> Programas de quema ilimitados
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <span className="flex flex-row gap-2 items-center">
                <IoMdCheckmark className="text-red-500 size-5" /> Telemetría en tiempo real
              </span>

              <span className="flex flex-row gap-2 items-center">
                <IoMdCheckmark className="text-red-500 size-5" /> Cálculo de costo energético
              </span>

              <span className="flex flex-row gap-2 items-center">
                <IoMdCheckmark className="text-red-500 size-5" /> Historial de quemas
              </span>

              <span className="flex flex-row gap-2 items-center">
                <IoMdCheckmark className="text-red-500 size-5" /> Soporte técnico integrado
              </span>
            </div>
          </div>
        </div>

        {/* Representacion visual */}
        <div className="bg-mist-900/35 border-2 border-mist-800 w-3xl p-12 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="text-sm text-mist-400">Horno argillá #30</span>
            <span className="bg-red-900/40 text-red-500 text-sm px-2 py-0.5 rounded-md">
              Activo
            </span>
          </div>
          <div className="border-t border-mist-700 my-2"></div>
          <div className="flex flex-col items-center gap-2 my-12">
            <span className="text-5xl font-bold flex justify-center">955 °C</span>
            <span className="text-sm text-mist-400">Temperatura actual</span>
          </div>
          <div className="flex flex-row justify-between items-center mb-4">
            <div className="flex flex-col items-center">
              <span className="font-bold">1260 °C</span>
              <span className="text-xs text-mist-400 flex justify-center">T° Objetivo</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">2:05 h</span>
              <span className="text-xs text-mist-400 flex justify-center">Tiempo restante</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">18.2 kWh</span>
              <span className="text-xs text-mist-400 flex justify-center">Consumo eléctrico</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-mist-700 mt-4 mb-8 py-2 text-center">
            <span className="text-mist-400 text-xs">Programa actual</span>
            <span className="text-mist-300 text-sm font-semibold">Esmaltado alta temperatura</span>
          </div>

          <div className="flex flex-row justify-around">
            <button className="text-sm bg-red-700 px-8 py-2 rounded-md transition-all hover:scale-105 hover:cursor-pointer hover:brightness-110">Detener</button>
            <button className="text-sm border-2 border-red-700 px-8 py-1 rounded-md transition-all hover:scale-105 hover:cursor-pointer hover:brightness-110 hover:bg-red-900/50">Detalles</button>
          </div>
        </div> {/* /Representacion visual */}

      </div>{" "}
      {/* /Propuesta */}
    </>
  );
}

export default App;
