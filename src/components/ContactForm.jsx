import React from 'react'

const ContactForm = () => {
    return (
        <div className="min-h-screen flex items-start justify-center">
            <form className="bg-white p-8 rounded-lg shadow-md w-screen max-w-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre Completo.</label>
                        <input type="text" id="nombre" name="nombre" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Número de Teléfono.</label>
                        <input type="tel" id="telefono" name="telefono" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha Tentativa.</label>
                        <input type="date" id="fecha" name="fecha" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-700">Presupuesto Ideal.</label>
                        <input type="number" id="presupuesto" name="presupuesto" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="tipo-evento" className="block text-sm font-medium text-gray-700">Tipo de Evento.</label>
                    <input type="text" id="tipo-evento" name="tipo-evento" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Describe un poco más sobre tu evento.</label>
                    <textarea id="descripcion" name="descripcion" rows="4" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required></textarea>
                </div>
                <div className="form-group mt-6">
                    <button type="submit" className="w-full bg-gray-800 text-white p-2 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
