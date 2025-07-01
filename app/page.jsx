import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Phone, Mail, MapPin, Clock, Play } from "lucide-react"
import ExperienceForm from "@/components/experience-form"
import MobileMenu from "@/components/mobile-menu"
import Link from "next/link"
import TestimonialsCarousel from "@/components/testimonials-carousel"

export default function FisioterapiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-[100]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                FisioVital
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="#inicio" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Servicios
              </a>
              <Link href="/videos" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Videos
              </Link>
              <a href="#contacto" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Contacto
              </a>
            </nav>

            {/* Mobile Menu Component */}
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200">✨ Recuperación y Vitalidad</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-600 bg-clip-text text-transparent">
            Tu Energía es Nuestra
            <br />
            <span className="text-red-600">Motivación</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Especialistas en fisioterapia con más de 10 años de experiencia. Tratamientos energizantes para tu
            recuperación completa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/videos">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-3"
              >
                <Play className="h-5 w-5 mr-2" />
                Ver Videos Educativos
              </Button>
            </Link>
           
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-4xl font-bold">+500</div>
              <div className="text-orange-100">Pacientes Recuperados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">+10</div>
              <div className="text-orange-100">Años de Experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-orange-100">Satisfacción del Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Preview Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">🎥 Contenido Educativo</Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Videos de Fisioterapia
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Aprende técnicas profesionales con nuestros videos especializados en ejercicios y tratamientos
          </p>

          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-12 mb-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-6 inline-block mb-4">
                      <Play className="h-12 w-12 text-white" />
                    </div>                   
              
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                      
                    </div>
                  </div>
                </div>
                <Link href="/videos">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg py-3"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Acceder a los Videos
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nuestros Servicios</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tratamientos especializados para cada necesidad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fisioterapia Deportiva",
                description: "Recuperación de lesiones deportivas y mejora del rendimiento",
                icon: "🏃‍♂️",
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Rehabilitación",
                description: "Programas personalizados de rehabilitación post-operatoria",
                icon: "🦴",
                color: "from-red-500 to-pink-500",
              },
              {
                title: "Terapia Manual",
                description: "Técnicas manuales para alivio del dolor y movilidad",
                icon: "👐",
                color: "from-yellow-500 to-orange-500",
              },
              {
                title: "Electroterapia",
                description: "Tratamientos con equipos de última generación",
                icon: "⚡",
                color: "from-amber-500 to-yellow-500",
              },
              {
                title: "Masoterapia",
                description: "Masajes terapéuticos para relajación y recuperación",
                icon: "💆‍♀️",
                color: "from-rose-500 to-red-500",
              },
              {
                title: "Pilates Terapéutico",
                description: "Ejercicios de fortalecimiento y flexibilidad",
                icon: "🧘‍♀️",
                color: "from-orange-400 to-red-400",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>

{/*
                  <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0">
                    Más información →
                  </Button>
*/}

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 
      testimonios
      <TestimonialsCarousel />
      */}

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contáctanos y Comparte</h3>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Estamos aquí para ayudarte y conocer tu experiencia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Teléfono</h4>
                  <p className="text-orange-100">300000000</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-orange-100">info@gmail.com.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Dirección</h4>
                  <p className="text-orange-100">cll 00 # 00-00</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Horarios</h4>
                  <p className="text-orange-100">Lun - Vie: 8:00 - 20:00</p>
                  <p className="text-orange-100">Sáb: 9:00 - 14:00</p>
                </div>
              </div>
            </div>

              {/*
              formulario opiniones
              <ExperienceForm /> 
              
              
              */}
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-full">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold">FisioVital</h1>
              </div>
              <p className="text-gray-400">Tu centro de confianza para la recuperación y el bienestar físico.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#inicio" className="hover:text-white transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <Link href="/videos" className="hover:text-white transition-colors">
                    Videos
                  </Link>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

{/*
            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <div className="bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                  <div className="h-5 w-5"></div>
                </div>
                <div className="bg-green-600 p-2 rounded-full cursor-pointer hover:bg-green-700 transition-colors">
                  <div className="h-5 w-5"></div>
                </div>
                <div className="bg-pink-600 p-2 rounded-full cursor-pointer hover:bg-pink-700 transition-colors">
                  <div className="h-5 w-5"></div>
                </div>
              </div>
            </div>
*/}

          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FisioVital. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
