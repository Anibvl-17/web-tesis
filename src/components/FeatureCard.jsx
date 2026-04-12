function FeatureCard({ icon, title, description, iconOptions }) {
  const Icon = icon;

  return (
    <div className="bg-black border border-gray-700 rounded-md transition-all hover:border-red-500 px-8 py-8 flex flex-row gap-4 flex-1 min-w-md hover:scale-104 shadow-lg">
      <span>
        <Icon className={"size-6 text-red-500 " + iconOptions} />
      </span>
      <div>
        <h3 className="text-lg font-semibold flex flex-row gap-4 mb-2">{title}</h3>
        <p className="text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;

/*
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
          </div> */
