"use client"

import { useState } from "react"
import Link from "next/link"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <div
            className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></div>
          <div
            className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </div>
      </button>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden fixed left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "top-[72px] opacity-100" : "top-[-300px] opacity-0"
        }`}
        style={{ marginTop: "0px" }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col space-y-4">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-orange-50 border-b border-gray-100"
              onClick={closeMenu}
            >
              🏠 Inicio
            </a>
            <a
              href="#servicios"
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-orange-50 border-b border-gray-100"
              onClick={closeMenu}
            >
              🏥 Servicios
            </a>
            <Link
              href="/videos"
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-orange-50 border-b border-gray-100"
              onClick={closeMenu}
            >
              🎥 Videos
            </Link>
            <a
              href="#contacto"
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-orange-50"
              onClick={closeMenu}
            >
              📞 Contacto
            </a>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar el menú */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={closeMenu} style={{ top: "72px" }}></div>
      )}
    </>
  )
}
