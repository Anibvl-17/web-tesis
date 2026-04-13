import { FiUserX } from "react-icons/fi";
import logo from "./assets/argilla-icon-light.png";
import { SiSpeedtest } from "react-icons/si";
import { MdHistoryToggleOff, MdMoneyOff, MdOutlineNotificationsActive } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { RiRemoteControlLine } from "react-icons/ri";
import { LuChartSpline, LuLink, LuX } from "react-icons/lu";
import { PiPulseBold } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import FeatureCard from "./components/FeatureCard";
import AnchorLink from "./components/AnchorLink";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { FaExternalLinkAlt } from "react-icons/fa";

function App() {
  const [simulationStatus, toggleSimulationStatus] = useState(true);

  const handleToggleSimulationStatus = () => toggleSimulationStatus(!simulationStatus);

  const handleDetailsClick = () => toast("¡Próximamente disponible!", {});

  return (
    <>
      <Toaster theme="dark" />
      <nav className="bg-black w-full md:px-48 lg:px-64 py-4 shadow-lg fixed border-b border-b-gray-800 flex flex-row justify-between items-center z-10">
        <span className="flex flex-row gap-4 items-center text-white font-bold">
          <img src={logo} alt="Logo argilla" className="size-10" />
          <p className="italic text-xl">
            <span className="text-red-500">a</span>rgillá hornos
          </p>
        </span>
        <div className="flex flex-row gap-8 text-sm text-mist-400">
          <AnchorLink href="#problema" text="Problema" />
          <AnchorLink href="#propuesta" text="Propuesta" />
          <AnchorLink href="#funcionalidades" text="Funcionalidades" />
          <AnchorLink href="#tabla" text="Tabla comparativa" />
          <AnchorLink href="https://www.argillahornos.cl/contact" text="Contacto" external={true} />
        </div>
      </nav>

      {/* HERO */}
      <div className="flex flex-col items-center md:px-48 lg:px-64 pt-42 pb-18 text-center" id="inicio">
        <h1 className="text-6xl/normal font-bold pb-12 mt-24">
          El control de tu horno desde <br />
          <span className="text-red-500">la palma de tu mano</span>
        </h1>
        <p className="text-gray-400 text-xl px-32 mb-20">
          Monitorea y controla tus quemas desde cualquier lugar, en cualquier momento. Mediciones en
          tiempo real, curvas ilimitadas y soporte técnico a tu alcance.
        </p>
        <a
          href="https://www.argillahornos.cl/contact"
          target="_blank"
          className="flex flex-row items-center gap-2 font-bold text-sm bg-red-700 px-12 py-3 rounded-md transition-all hover:cursor-pointer hover:brightness-110"
        >
          Contáctanos <FaExternalLinkAlt className="h-3 w-3" />
        </a>
      </div>

      {/* Problema */}
      <div className="bg-mist-900 py-24 md:px-48 lg:px-64 text-center" id="problema">
        <h2 className="text-3xl/relaxed font-bold">
          Los controladores actuales limitan tu producción
        </h2>
        <p className="text-gray-400">
          Los equipos importados no están pensados para los ceramistas. Te explicamos porqué:
        </p>
        {/* Explicacion Problemas */}
        <div className="text-start flex flex-row flex-wrap gap-8 mt-12">
          {/* Usabilidad limitada */}
          <FeatureCard
            icon={FiUserX}
            title="Usabilidad limitada"
            description="Los controladores PID actuales utilizan interfaces poco intuitivas y configuraciones
                en inglés, lo que genera frustración y constantes llamados a soporte técnico."
          />

          <FeatureCard
            icon={SiSpeedtest}
            iconOptions="scale-x-[-1]" /* scale-x-[-1] es para girar la imagen */
            title="Limitaciones técnicas"
            description="Programas de quema limitados y sin conectividad. El ceramista debe permanecer en el
                lugar durante los ciclos de quema que pueden tardar horas."
          />

          <FeatureCard
            icon={MdMoneyOff}
            title="Sin telemetría ni control de costos"
            description="No entregan información sobre el consumo de energía, lo que dificulta la estimación
                del costo energético por cada ciclo de quema."
          />

          <FeatureCard
            icon={MdHistoryToggleOff}
            title="Soporte sin trazabilidad"
            description="No existe registro de vida útil ni alertas sobre variaciones anormales, perdiendo
                oportunidades de prevención y mantenimiento."
          />
        </div>
        {/* /Explicacion Problemas */}
      </div>
      {/* /Problema */}

      {/* Propuesta */}
      <div
        className="md:px-48 py-24 lg:px-64 flex flex-row justify-between items-center gap-24"
        id="propuesta"
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl/snug font-bold">
            Sistema IoT para Monitoreo y Control de Hornos Cerámicos Eléctricos
          </h2>
          <p className="max-w-lg text-pretty text-mist-400">
            Una plataforma conectada a un controlador personalizado en tu horno. Controla, monitorea
            y optimiza tus quemas desde cualquier lugar del mundo.
          </p>

          {/* Caracteristicas destacables */}
          <div className="flex flex-row gap-8 text-sm">
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
            {simulationStatus ? (
              <span className="bg-red-900/40 text-red-500 text-sm px-2 py-0.5 rounded-md">
                Activo
              </span>
            ) : (
              <span className="bg-mist-800 text-mist-400 text-sm px-2 py-0.5 rounded-md">
                Inactivo
              </span>
            )}
          </div>
          <div className="border-t border-mist-700 my-2"></div>
          <div className="flex flex-col items-center gap-2 my-12">
            <span className="text-5xl font-bold flex justify-center">955 °C</span>
            <span className="text-sm text-mist-400">Temperatura actual</span>
          </div>
          <div className="flex flex-row items-center mb-4 flex-1">
            <div className="flex-1 flex flex-col items-center me-auto">
              <span className="font-bold">1260 °C</span>
              <span className="text-xs text-mist-400 flex justify-center">T° Objetivo</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="font-bold">{simulationStatus ? "2:05 h" : "-:-- h"}</span>
              <span className="text-xs text-mist-400 flex justify-center">Tiempo restante</span>
            </div>
            <div className="flex-1 flex flex-col items-center ms-auto">
              <span className="font-bold">18.2 kWh</span>
              <span className="text-xs text-mist-400 flex justify-center">Consumo</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-mist-700 mt-4 mb-8 py-2 text-center">
            <span className="text-mist-400 text-xs">Programa actual</span>
            <span className="text-mist-300 text-sm font-semibold">Esmaltado alta temperatura</span>
          </div>

          <div className="flex flex-row justify-around flex-wrap gap-2">
            <button
              onClick={handleToggleSimulationStatus}
              className="text-sm bg-red-700 px-8 py-2 rounded-md transition-all hover:scale-105 hover:cursor-pointer hover:brightness-110"
            >
              {simulationStatus ? "Detener" : "Iniciar"}
            </button>
            <button
              onClick={handleDetailsClick}
              className="text-sm border-2 border-red-800 px-8 py-1 rounded-md transition-all hover:scale-105 hover:cursor-pointer hover:brightness-110 hover:bg-red-900/50"
            >
              Detalles
            </button>
          </div>
        </div>
        {/* /Representacion visual */}
      </div>
      {/* /Propuesta */}

      {/* Funcionalidades */}
      <div className="bg-mist-900 py-24 md:px-48 lg:px-64 text-center" id="funcionalidades">
        <h2 className="text-3xl/relaxed font-bold">Todo lo que necesitas, en un solo lugar.</h2>
        <p className="text-gray-400">
          Un ecosistema que te da autonomía, seguridad y control sobre tu producción.
        </p>
        {/* Cards funcionalidades */}
        <div className="text-start flex flex-row flex-wrap gap-8 mt-12">
          {/* Control remoto */}
          <FeatureCard
            icon={RiRemoteControlLine}
            title="Control remoto"
            description="Inicia, detén o modifica tus programas de quema desde tu teléfono o computador, sin
                necesidad de estar presente."
          />

          {/* Telemetría en tiempo real */}
          <FeatureCard
            icon={PiPulseBold}
            title="Telemetría en tiempo real"
            description="Monitorea temperatura, voltaje, amperaje y consumo eléctrico con estimación de
                costos incluida."
          />

          {/* Programas ilimitados */}
          <FeatureCard
            icon={LuChartSpline}
            title="Programas ilimitados"
            description="Supera las limitaciones de los controladores tradicionales. Almacena y gestiona
                todos los programas que necesites."
          />

          {/* Alertas inteligentes */}
          <FeatureCard
            icon={MdOutlineNotificationsActive}
            title="Alertas inteligentes"
            description="Recibe notificaciones sobre niveles anormales de corriente y posibles fallas antes
                de que ocurran."
          />

          {/* Reportes detallados */}
          <FeatureCard
            icon={TbReportAnalytics}
            title="Reportes detallados"
            description="Historial completo de quemas con consumo, reparaciones y mantenciones realizadas al
                equipo."
          />

          {/* Soporte Técnico */}
          <FeatureCard
            icon={TbReportAnalytics}
            title="Soporte técnico integrado"
            description="Realiza consultas o solicitudes al equipo técnico de manera fácil y rápida, con
                envío automático de reportes."
          />
        </div>
        {/* /Cards funcionalidades */}
      </div>
      {/* /Funcionalidades */}

      {/* Tabla comparativa */}
      <div className="py-24 md:px-48 lg:px-64 text-center flex flex-col" id="tabla">
        <h2 className="text-4xl/relaxed font-bold">La diferencia es clara</h2>
        <p className="text-gray-400">
          Compara las características de los controladores tradicionales con el sistema IoT de
          Argillá:
        </p>
        <table className="min-w-2x mt-16">
          <thead>
            <tr className="border-b border-mist-700">
              <th className="font-normal text-mist-400 text-start w-2/5 pb-4 ps-4">
                Característica
              </th>
              <th className="font-normal text-mist-400 text-center pb-4">
                Controlador Tradicional
              </th>
              <th className="font-semibold text-red-500 text-center pb-4">Controlador Argillá</th>
            </tr>
          </thead>
          <tbody className="[&>tr]:hover:bg-mist-900/50 [&>tr]:transition-all">
            <tr className="border-b border-mist-800">
              <td className="ps-4 py-4 font-normal text-start">Interfaz</td>
              <td className="py-4 font-normal text-sm text-center text-mist-400">
                Display de 7 segmentos
              </td>
              <td className="py-4 font-normal text-sm text-center">Pantalla táctil + App Web</td>
            </tr>
            <tr className="border-b border-mist-800">
              <td className="ps-4 py-4 font-normal text-start">Idioma</td>
              <td className="py-4 font-normal text-sm text-center text-mist-400">
                Inglés abreviado
              </td>
              <td className="py-4 font-normal text-sm text-center">Español</td>
            </tr>
            <tr className="border-b border-mist-800">
              <td className="ps-4 py-4 font-normal text-start">Programas de cocción</td>
              <td className="py-4 font-normal text-sm text-center text-mist-400">Máximo 4</td>
              <td className="py-4 font-normal text-sm text-center">Ilimitados</td>
            </tr>
            <tr className="border-b border-mist-800">
              <td className="ps-4 py-4 font-normal text-start">Control remoto</td>
              <td className="py-4 font-normal text-sm">
                <span className="flex flex-row justify-center">
                  <LuX className="size-5 text-mist-400" />
                </span>
              </td>
              <td className="py-4 font-normal text-sm">
                <span className="flex flex-row justify-center">
                  <IoMdCheckmark className="size-5 text-red-500" />
                </span>
              </td>
            </tr>
            <tr className="border-b border-mist-800">
              <td className="ps-4 py-4 font-normal text-start">Telemetría en tiempo real</td>
              <td className="py-4 font-normal text-sm">
                <span className="flex flex-row justify-center">
                  <LuX className="size-5 text-mist-400" />
                </span>
              </td>
              <td className="py-4 font-normal text-sm">
                <span className="flex flex-row justify-center">
                  <IoMdCheckmark className="size-5 text-red-500" />
                </span>
              </td>
            </tr>
            <tr className="border-b border-mist-800">
              <td className="ps-4 py-4 font-normal text-start">Alertas automáticas</td>
              <td className="py-4 font-normal text-sm">
                <span className="flex flex-row justify-center">
                  <LuX className="size-5 text-mist-400" />
                </span>
              </td>
              <td className="py-4 font-normal text-sm">
                <span className="flex flex-row justify-center">
                  <IoMdCheckmark className="size-5 text-red-500" />
                </span>
              </td>
            </tr>
            <tr className="border-b border-mist-800">
              <td className="ps-4 py-4 font-normal text-start">Reportes e historial</td>
              <td className="py-4 font-normal text-sm">
                <span className="flex flex-row justify-center">
                  <LuX className="size-5 text-mist-400" />
                </span>
              </td>
              <td className="py-4 font-normal text-sm">
                <span className="flex flex-row justify-center">
                  <IoMdCheckmark className="size-5 text-red-500" />
                </span>
              </td>
            </tr>
            <tr>
              <td className="ps-4 py-4 font-normal text-start">Soporte técnico</td>
              <td className="py-4 font-normal text-sm">
                <span className="flex flex-row justify-center">
                  <LuX className="size-5 text-mist-400" />
                </span>
              </td>
              <td className="py-4 font-normal text-sm">
                <span className="flex flex-row justify-center">
                  <IoMdCheckmark className="size-5 text-red-500" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* /Tabla comparativa */}

      <span className="bg-mist-600 w-full"></span>

      {/* Footer */}
      <footer className="py-12 md:px-48 lg:px-64 flex flex-row justify-around border-t border-t-gray-800">
        <div className="max-w-sm text-pretty">
          <span className="text-lg font-semibold italic">
            <span className="text-red-500">a</span>rgillá hornos
          </span>
          <p className="text-sm text-mist-400 mt-4">
            Diseño, manufactura y comercialización de hornos eléctricos para cerámica. Soluciones
            personalizadas para ceramistas en Chile y el mundo.
          </p>
        </div>
        <div>
          <span className="font-semibold">Navegación</span>
          <div className="mt-4 text-sm flex flex-row gap-24">
            <div className="flex flex-col gap-4 text-mist-400">
              <AnchorLink href="#inicio" text="Inicio" />
              <AnchorLink href="#problema" text="Problema" />
              <AnchorLink href="#propuesta" text="Propuesta" />
            </div>
            <div className="flex flex-col gap-4 text-mist-400">
              <AnchorLink href="#funcionalidades" text="Funcionalidades" />
              <AnchorLink href="#tabla" text="Tabla comparativa" />
              <AnchorLink href="https://www.argillahornos.cl/contact" target="_blank" text="Contacto" external={true}/>
            </div>
          </div>
        </div>
      </footer>
      {/* /Footer */}
    </>
  );
}

export default App;
