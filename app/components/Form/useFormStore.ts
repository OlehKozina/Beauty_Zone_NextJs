import { create } from "zustand";

interface FormStore {
  isFormVisible: boolean;
  openForm: () => void;
  closeForm: () => void;
}

export const useFormStore = create<FormStore>((set) => ({
  isFormVisible: false,
  openForm: () => set({ isFormVisible: true }),
  closeForm: () => set({ isFormVisible: false }),
}));
