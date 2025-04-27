"use client";
import React, { createContext, useContext, useState } from "react";

interface PreviewSliderType {
  isModalPreviewOpen: boolean;
  openPreviewModal: () => void;
  closePreviewModal: () => void;
}

const PreviewSlider = createContext<PreviewSliderType | undefined>(undefined);

export const usePreviewSlider = () => {
  const context = useContext(PreviewSlider);
  if (!context) {
    throw new Error("usePreviewSlider must be used within a ModalProvider");
  }
  return context;
};

export const PreviewSliderProvider = ({ children }) => {
  const [isModalPreviewOpen, setIsModalOpen] = useState(false);

  const openPreviewModal = () => {
    setIsModalOpen(true);
  };

  const closePreviewModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PreviewSlider.Provider
      value={{ isModalPreviewOpen, openPreviewModal, closePreviewModal }}
    >
      {children}
    </PreviewSlider.Provider>
  );
};
