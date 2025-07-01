"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, CheckCircle, Clock, Eye } from "lucide-react"

const SESSIONS_DATA = {
  bicicleta_estatica: {
    title: "Bicicleta Estática",
    videos: [
      {
        id: "bicicleta-1",
        title: "Recuperación cardiovascular tras lesión de rodilla",
        description: "Ejercicio controlado en bicicleta estática para mejorar la circulación y fortalecer sin impacto articular.",
        duration: "8:30",
        category: "Rehabilitación",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "bicicleta-2",
        title: "Movilización suave para mejorar la flexión de rodilla",
        description: "Ejercicios con bicicleta estática para recuperar movilidad articular después de cirugía.",
        duration: "10:00",
        category: "Movilidad",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  leg_press: {
    title: "Leg Press",
    videos: [
      {
        id: "legpress-1",
        title: "Rehabilitación de fuerza en pierna tras lesión de ligamento",
        description: "Ejercicios adaptados en leg press para fortalecer sin sobrecargar articulaciones.",
        duration: "12:00",
        category: "Rehabilitación",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "legpress-2",
        title: "Progresión controlada para recuperar movilidad de cadera",
        description: "Uso del leg press para aumentar rango de movimiento después de inmovilización.",
        duration: "13:40",
        category: "Movilidad",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "legpress-3",
        title: "Fortalecimiento de glúteos y cuádriceps post-lesión muscular",
        description: "Entrenamiento para mejorar estabilidad y función muscular.",
        duration: "14:10",
        category: "Fortalecimiento",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  banco_pesas: {
    title: "Banco de Pesas",
    videos: [
      {
        id: "banco-1",
        title: "Recuperación de fuerza en hombro post-luxación",
        description: "Ejercicios con banco de pesas para fortalecer rotadores y mejorar estabilidad.",
        duration: "15:00",
        category: "Rehabilitación",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "banco-2",
        title: "Ejercicios para mejorar rango articular tras cirugía de brazo",
        description: "Movilización activa asistida con pesas ligeras para recuperar funcionalidad.",
        duration: "13:30",
        category: "Movilidad",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  eliptica: {
    title: "Elíptica",
    videos: [
      {
        id: "eliptica-1",
        title: "Entrenamiento de bajo impacto para rehabilitación de cadera",
        description: "Sesiones en elíptica para mejorar fuerza y movilidad sin dolor.",
        duration: "10:15",
        category: "Rehabilitación",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "eliptica-2",
        title: "Mejora de resistencia cardiovascular tras lesión de pierna",
        description: "Ejercicio aeróbico adaptado para evitar sobrecarga articular.",
        duration: "12:00",
        category: "Resistencia",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "eliptica-3",
        title: "Técnicas de respiración y relajación para reducir fatiga",
        description: "Estrategias para controlar la respiración y favorecer la recuperación.",
        duration: "9:40",
        category: "Relajación",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  remo_indoor: {
    title: "Remo Indoor",
    videos: [
      {
        id: "remo-1",
        title: "Recuperación de fuerza en espalda baja tras lesión",
        description: "Ejercicios de remo para fortalecer la zona lumbar sin impacto.",
        duration: "12:30",
        category: "Rehabilitación",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  prensa_hombros: {
    title: "Prensa de Hombros",
    videos: [
      {
        id: "prensa-1",
        title: "Rehabilitación tras lesión de manguito rotador",
        description: "Ejercicios para fortalecer hombro con carga progresiva segura.",
        duration: "13:40",
        category: "Rehabilitación",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "prensa-2",
        title: "Mejora de rango articular y movilidad activa",
        description: "Técnicas para recuperar flexibilidad y control motor.",
        duration: "12:30",
        category: "Movilidad",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "prensa-3",
        title: "Fortalecimiento funcional para actividades diarias",
        description: "Ejercicios para mejorar la fuerza y resistencia del hombro.",
        duration: "15:20",
        category: "Fortalecimiento",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
};



export default function VideoSection() {
  const searchParams = useSearchParams()
  const router = useRouter()
 // const currentSession = searchParams.get("session") || "basico"
 const currentSession = searchParams.get("session")

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [watchedVideos, setWatchedVideos] = useState([])
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true) 

  const sessionData = SESSIONS_DATA.hasOwnProperty(currentSession)
  ? SESSIONS_DATA[currentSession]
  : Object.values(SESSIONS_DATA)[0];
  const videos = sessionData.videos;

  // Cargar videos vistos desde localStorage al inicializar
  useEffect(() => {
    setIsLoading(true) // Empezar cargando

    const savedWatchedVideos = localStorage.getItem(`fisio-watched-videos-${currentSession}`)
    let watchedList = []

    if (savedWatchedVideos) {
      watchedList = JSON.parse(savedWatchedVideos)
      setWatchedVideos(watchedList)
    } else {
      setWatchedVideos([])
    }

    // Encontrar el primer video no visto
    const firstUnwatchedIndex = videos.findIndex((video) => !watchedList.includes(video.id))

    // Si todos los videos han sido vistos, empezar desde el primero
    // Si hay videos no vistos, empezar desde el primero no visto
    const targetIndex = firstUnwatchedIndex === -1 ? 0 : firstUnwatchedIndex
    setCurrentVideoIndex(targetIndex)

    // Pequeño delay para asegurar que todo esté listo
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }, [currentSession, videos])

  // Guardar videos vistos en localStorage
  const saveWatchedVideos = (videosArray) => {
    localStorage.setItem(`fisio-watched-videos-${currentSession}`, JSON.stringify(videosArray))
    setWatchedVideos(videosArray)
  }

  // Marcar video como visto
  const markVideoAsWatched = (videoId) => {
    if (!watchedVideos.includes(videoId)) {
      const updatedWatchedVideos = [...watchedVideos, videoId]
      saveWatchedVideos(updatedWatchedVideos)
    }
  }

  // Cambiar sesión
  const changeSession = (sessionKey) => {
    router.push(`/videos?session=${sessionKey}`)
  }

  // Navegar al video anterior
  const goToPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      markVideoAsWatched(videos[currentVideoIndex].id)
      setCurrentVideoIndex(currentVideoIndex - 1)
      setIsVideoPlaying(false)
    }
  }

  // Navegar al video siguiente
  const goToNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      markVideoAsWatched(videos[currentVideoIndex].id)
      setCurrentVideoIndex(currentVideoIndex + 1)
      setIsVideoPlaying(false)
    }
  }

  // Seleccionar video específico
  const selectVideo = (index) => {
    if (currentVideoIndex !== index) {
      markVideoAsWatched(videos[currentVideoIndex].id)
    }
    setCurrentVideoIndex(index)
    setIsVideoPlaying(false)
  }

  // Manejar cuando el video empieza a reproducirse
  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
    // No marcar como visto aquí, solo cuando se reproduzca completamente
  }

  const handleVideoEnded = () => {
    setIsVideoPlaying(false)
    markVideoAsWatched(videos[currentVideoIndex].id)
  }

  const currentVideo = videos[currentVideoIndex]
  const isCurrentVideoWatched = watchedVideos.includes(currentVideo.id)

  // Mostrar loading mientras se determina el video correcto
  if (isLoading) {
    return (
      <section id="video" className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">🎥 Videos Educativos</Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Ejercicios y Tratamientos
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aprende técnicas profesionales de fisioterapia con nuestros videos especializados
            </p>
          </div>

          {/* Menú Simple de Sesiones */}
          <div className="flex justify-center mb-8">
  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
    
    {/* Móvil: SELECT más ancho */}
    <select
      value={currentSession}
      onChange={(e) => changeSession(e.target.value)}
      className="block sm:hidden min-w-[200px] px-4 py-2 rounded-full text-sm font-medium 
                 bg-white text-gray-700 shadow-inner focus:outline-none focus:ring-2 
                 focus:ring-orange-400 transition duration-200"
    >
      {Object.entries(SESSIONS_DATA).map(([key, session]) => (
        <option key={key} value={key}>
          {session.title}
        </option>
      ))}
    </select>

    {/* Escritorio: BOTONES */}
    <div className="hidden sm:flex space-x-2">
      {Object.entries(SESSIONS_DATA).map(([key, session]) => (
        <button
          key={key}
          onClick={() => changeSession(key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            currentSession === key
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
              : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
          }`}
        >
          {session.title}
        </button>
      ))}
    </div>

  </div>
</div>


          {/* Loading State */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-teal-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-lg">Cargando video...</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                    <div className="flex justify-between">
                      <div className="h-10 bg-gray-200 rounded w-24"></div>
                      <div className="h-10 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Loading para la lista de videos */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="h-6 bg-gray-200 rounded w-48 animate-pulse"></div>
              <div className="flex space-x-4">
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-4">
                    <div className="flex justify-between mb-2">
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                      <div className="h-4 bg-gray-200 rounded w-12"></div>
                    </div>
                    <div className="h-5 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="video" className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">🎥 Videos Educativos</Badge>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Ejercicios y Tratamientos
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aprende técnicas profesionales de fisioterapia con nuestros videos especializados
          </p>
        </div>

        {/* Menú Simple de Sesiones */}
        <div className="flex justify-center mb-8">
  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
    
    {/* Móvil: SELECT más ancho */}
    <select
      value={currentSession}
      onChange={(e) => changeSession(e.target.value)}
      className="block sm:hidden min-w-[200px] px-4 py-2 rounded-full text-sm font-medium 
                 bg-white text-gray-700 shadow-inner focus:outline-none focus:ring-2 
                 focus:ring-orange-400 transition duration-200"
    >
      {Object.entries(SESSIONS_DATA).map(([key, session]) => (
        <option key={key} value={key}>
          {session.title}
        </option>
      ))}
    </select>

    {/* Escritorio: BOTONES */}
    <div className="hidden sm:flex space-x-2">
      {Object.entries(SESSIONS_DATA).map(([key, session]) => (
        <button
          key={key}
          onClick={() => changeSession(key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            currentSession === key
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
              : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
          }`}
        >
          {session.title}
        </button>
      ))}
    </div>

  </div>
</div>


        {/* Reproductor de Video Principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* Video Player */}
              <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-teal-900">
                <video
                  key={currentVideo.id}
                  className="w-full h-full object-cover"
                  controls
                  poster={currentVideo.thumbnail}
                  onPlay={handleVideoPlay}
                  onEnded={handleVideoEnded}
                  preload="metadata"
                >
                  <source src={currentVideo.videoUrl} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>

                {/* Overlay de información */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="flex justify-between items-start">
                    <Badge
                      className={`${isCurrentVideoWatched ? "bg-green-500 text-white" : "bg-orange-500 text-white"}`}
                    >
                      {isCurrentVideoWatched ? (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Visto
                        </>
                      ) : (
                        <>
                          <Clock className="h-3 w-3 mr-1" />
                          {currentVideo.duration}
                        </>
                      )}
                    </Badge>
                    <Badge className="bg-red-500 text-white">{currentVideo.category}</Badge>
                  </div>
                </div>
              </div>

              {/* Información del Video */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    {sessionData.title}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">{currentVideo.description}</p>

                {/* Botones de Navegación */}
                <div className="flex justify-between items-center">
                  <Button
                    onClick={goToPreviousVideo}
                    disabled={currentVideoIndex === 0}
                    className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                  
                  </Button>

                  <div className="text-center">
                    <span className="text-sm text-gray-500">
                      Video {currentVideoIndex + 1} de {videos.length}
                    </span>
                  </div>

                  <Button
                    onClick={goToNextVideo}
                    disabled={currentVideoIndex === videos.length - 1}
                    className="bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Videos */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-2xl font-bold text-gray-800">Videos de {sessionData.title}</h4>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span>Vistos ({watchedVideos.length})</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                <span>Pendientes ({videos.length - watchedVideos.length})</span>
              </div>
            </div>
          </div>

          {/* Grid de Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => {
              const isWatched = watchedVideos.includes(video.id)
              const isCurrent = index === currentVideoIndex

              return (
                <Card
                  key={video.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                    isCurrent
                      ? "ring-2 ring-blue-500 shadow-lg"
                      : isWatched
                        ? "bg-green-50 border-green-200"
                        : "bg-white hover:bg-gray-50"
                  }`}
                  onClick={() => selectVideo(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          isWatched ? "border-green-300 text-green-700" : "border-orange-300 text-orange-700"
                        }`}
                      >
                        {video.category}
                      </Badge>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">{video.duration}</span>
                        {isWatched ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Clock className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                    </div>

                    <h5 className={`font-semibold mb-2 ${isWatched ? "text-green-800" : "text-gray-800"}`}>
                      {video.title}
                    </h5>

                    <p className={`text-sm ${isWatched ? "text-green-600" : "text-gray-600"}`}>{video.description}</p>

                    {isCurrent && (
                      <Badge className="bg-red-500 text-white mt-2">
                        <Eye className="h-3 w-3 mr-1" />
                        Reproduciendo
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Estadísticas de Progreso */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
            <CardContent className="p-6">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-4">Progreso en {sessionData.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{watchedVideos.length}</div>
                    <div className="text-orange-100">Videos Completados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">
                      {Math.round((watchedVideos.length / videos.length) * 100)}%
                    </div>
                    <div className="text-orange-100">Progreso Total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{videos.length - watchedVideos.length}</div>
                    <div className="text-orange-100">Videos Pendientes</div>
                  </div>
                </div>

                {/* Barra de Progreso */}
                <div className="mt-6">
                  <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-white h-full transition-all duration-500 ease-out"
                      style={{
                        width: `${(watchedVideos.length / videos.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
