import { FiUserX } from "react-icons/fi";
import logo from "./assets/argilla-icon-light.png";
import { SiSpeedtest } from "react-icons/si";
import { MdHistoryToggleOff, MdMoneyOff } from "react-icons/md";

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
      <div className="bg-mist-900 py-8 px-96 text-center">
        <h2 className="text-3xl/relaxed font-bold">
          Los controladores actuales limitan tu producción
        </h2>
        <p className="text-gray-400">
          Los equipos importados no están pensados para los ceramistas. Te explicamos porqué:
        </p>

        {/* Explicacion Problemas */}
        <div className="text-start flex flex-row flex-wrap gap-4 mt-8">
          {/* Usabilidad limitada */}
          <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md">
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
          <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md">
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
          <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md">
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
          <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md">
            <span>
              <MdHistoryToggleOff className="size-6 text-red-500" />
            </span>
            <div>
              <h3 className="text-lg font-semibold flex flex-row gap-4 mb-2">
                Soporte sin trazabilidad
              </h3>
              <p className="text-gray-400">
                No existe registro de vida útil ni alertas sobre variaciones anormales, perdiendo oportunidades de prevención y mantenimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
