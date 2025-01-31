"use client"
import { useState, createContext, useContext } from "react"
import React from "react"
import LightboxImage from "../ui/lightbox-image"

export interface LightboxProviderProps {
  open: ({ src, alt }: { src: string; alt: string }) => void
  isOpened: boolean
  close: () => void
  currentImage: { src: string; alt: string }
}

export const LightboxContext = createContext({
  open: () => {},
  isOpened: false,
  close: () => {},
  currentImage: { src: "", alt: "" },
} as LightboxProviderProps)

export const useLightbox = () => {
  const context = useContext(LightboxContext)
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider")
  }
  return context
}

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" })

  const open = ({ src = "", alt = "" }: { src: string; alt: string }) => {
    setCurrentImage({ src, alt })
    setIsOpened(true)
  }

  const close = () => {
    setIsOpened(false)
  }

  return (
    <LightboxContext.Provider value={{ open, isOpened, close, currentImage }}>
      <>
        {children}
        {isOpened && (
          <div
            className="top-0 left-0 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={close}>
            <div className="relative w-full h-full bg-background/50 p-40 flex items-center justify-center">
              <LightboxImage src={currentImage.src} alt={currentImage.alt} />
            </div>
          </div>
        )}
      </>
    </LightboxContext.Provider>
  )
}
