"use client";

import { create } from "zustand";

export type ModalType = "tag-create";

type ModalStateType = {
  modal: string | null;
  setModal: (modal: string | null) => void;
};

const useModalStore = create<ModalStateType>((set) => ({
  modal: null,
  setModal: (modal) => set({ modal }),
}));


export function useModal() {
  const { modal, setModal } = useModalStore();
  const openModal = (modal: ModalType) => setModal(modal);
  const closeModal = () => setModal(null);

  return { modal, openModal, closeModal };
}
