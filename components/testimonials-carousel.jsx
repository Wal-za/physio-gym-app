"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "María González",
    text: "Excelente atención y profesionalismo. Me recuperé completamente de mi lesión de rodilla.",
    rating: 5,    
  },
  {
    name: "Carlos Rodríguez",
    text: "El mejor centro de fisioterapia de la ciudad. Equipos modernos y trato personalizado.",
    rating: 5,    
  },
  {
    name: "Ana Martínez",
    text: "Muy recomendado. Los fisioterapeutas son muy profesionales y el ambiente es muy agradable.",
    rating: 5,   
  },
  {
    name: "Luis Fernández",
    text: "Increíble recuperación después de mi cirugía. El equipo es excepcional y muy dedicado.",
    rating: 5,    
  },
  {
    name: "Carmen López",
    text: "Los ejercicios de pilates terapéutico me ayudaron muchísimo con mi postura y dolor de espalda.",
    rating: 5,    
  },
  {
    name: "Roberto Silva",
    text: "Tratamiento de electroterapia muy efectivo. Noté mejoras desde la primera sesión.",
    rating: 5,    
  },
  {
    name: "Patricia Morales",
    text: "El masaje terapéutico es excelente. Me siento renovada después de cada sesión.",
    rating: 5,   
  },
  {
    name: "Diego Herrera",
    text: "Como deportista, encontré aquí la mejor atención para mis lesiones. Altamente recomendado.",
    rating: 5,    
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const getVisibleTestimonials = () => {
    const testimonials = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % TESTIMONIALS.length
      testimonials.push(TESTIMONIALS[index])
    }
    return testimonials
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Lo Que Dicen Nuestros Pacientes</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 500 pacientes satisfechos comparten su experiencia
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Botones de navegación */}
          <div className="flex justify-between items-center mb-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              
            </Button>

            <div className="text-sm text-gray-500">
              {currentIndex + 1} - {Math.min(currentIndex + 3, TESTIMONIALS.length)} de {TESTIMONIALS.length}{" "}
              testimonios
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
            >
              
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Grid de testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${currentIndex}-${index}`}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-orange-600">{testimonial.treatment}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Indicadores de puntos */}
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index >= currentIndex && index < currentIndex + 3
                    ? "bg-orange-500"
                    : "bg-gray-300 hover:bg-orange-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
