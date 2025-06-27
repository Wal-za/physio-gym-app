"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Send, Heart } from "lucide-react"

export default function ExperienceForm() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    recommendation: "",
  })

  const handleRatingClick = (value) => {
    setRating(value)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se manejaría el envío del formulario
    console.log("Experiencia enviada:", { ...formData, rating })
    alert("¡Gracias por compartir tu experiencia!")
  }

  return (
    <Card className="bg-white/95 backdrop-blur-sm border-0">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full inline-block mb-4">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <h4 className="text-2xl font-bold text-gray-800">Comparte tu Experiencia</h4>
          <p className="text-gray-600 mt-2">Tu opinión nos ayuda a mejorar nuestros servicios</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Calificación con estrellas */}
          <div className="text-center">
            <label className="block text-sm font-medium text-gray-700 mb-3">¿Cómo calificarías tu experiencia?</label>
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none transition-transform hover:scale-110"
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= (hoveredRating || rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-sm text-gray-600 mt-2">
                {rating === 1 && "Necesita mejorar"}
                {rating === 2 && "Regular"}
                {rating === 3 && "Bueno"}
                {rating === 4 && "Muy bueno"}
                {rating === 5 && "Excelente"}
              </p>
            )}
          </div>

          {/* Información personal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email (opcional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          {/* Experiencia */}
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Cuéntanos tu experiencia
            </label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Describe tu experiencia con nuestros servicios, tratamientos recibidos, resultados obtenidos..."
            />
          </div>

         

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg py-3"
            disabled={rating === 0 || !formData.name || !formData.experience}
          >
            <Send className="h-5 w-5 mr-2" />
            Enviar Experiencia
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Tu experiencia nos ayuda a brindar un mejor servicio a todos nuestros pacientes
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
