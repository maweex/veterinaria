const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="text-center font-black text-3xl">Formulario </h2>
      <p className="text-lg mt-5 text-center mb-5">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold"> Administralos </span>
      </p>

      {/* Formulario */}

      <form className="bg-white shadow-md rounded-lg py-5 px-5 mb-10">
        {/* Input de la mascota */}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block  uppercase font-gray-700 text-gray-700 font-bold mb-2 text-center"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border w-full p-2 m-2 placeholder-gray-500 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
          />
        </div>

        {/* Input del propietario */}

        <div className="mb-5">
          <label
            htmlFor="dueño"
            className="block  uppercase font-gray-700 text-gray-700 font-bold mb-2 text-center"
          >
            Nombre Dueño
          </label>
          <input
            id="dueño"
            className="border w-full p-2 m-2 placeholder-gray-500 rounded-md"
            type="text"
            placeholder="Dueño de la mascota"
          />
        </div>

        {/* Input de Email */}

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block  uppercase font-gray-700 text-gray-700 font-bold mb-2 text-center"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border w-full p-2 m-2 placeholder-gray-500 rounded-md"
            placeholder="Ingrese Email"
          />
        </div>

        {/* Input de Fecha de alta */}

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block  uppercase font-gray-700 text-gray-700 font-bold mb-2 text-center"
          >
            Fecha de alta
          </label>
          <input
            id="alta"
            className="border w-full p-2 m-2 rounded-md"
            type="date"
          />
        </div>

        {/* Input de sintomas  */}

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block  uppercase font-gray-700 text-gray-700 font-bold mb-2 text-center"
          >
            Síntomas observados
          </label>
          <textarea
            id="sintomas"
            className="border w-full p-2 m-2 placeholder-gray-500 rounded-md"
            placeholder="Describa los síntomas de la mascota"
          />
        </div>
        <input
          type="submit"
          value="Registrar Paciente"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors rounded-sm"
        />
      </form>
    </div>
  );
};

export default Formulario;
