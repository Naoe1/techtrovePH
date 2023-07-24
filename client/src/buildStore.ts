import { create } from 'zustand'

type Description = {
    uid: string;
    full_name: string;
    price: number | null;
    product_link: string;
}

interface PCBuilderState {
    processor: Description | null;
    motherboard: Description | null;
    videoCard: Description | null;
    powerSupply: Description | null;
    storage: Description[] | [];
    memory: Description[] | [];
    cooler: Description | null;
    chassis: Description | null;
    linkID: string | null;
    setProcessor: (processor: Description) => void;
    setMotherboard: (motherboard: Description) => void;
    setVideoCard: (videoCard: Description) => void;
    setPowerSupply: (powerSupply: Description) => void;
    setStorage: (storage: Description) => void;
    setMemory: (memory: Description) => void;
    setCooler: (cooler: Description) => void;
    setChassis: (chassis: Description) => void;

    removeProcessor: () => void;
    removeMotherboard: () => void;
    removeVideoCard: () => void;
    removePowerSupply: () => void;
    removeStorage: (index: number) => void;
    removeMemory: (index: number) => void;
    removeCooler: () => void;
    removeChassis: () => void;

    getTotalPrice: () => number;
    setLinkID: (linkId: string) => void;
}


const usePCBuilderStore = create<PCBuilderState>((set, get) => ({
    processor: null,
    motherboard: null,
    videoCard: null,
    powerSupply: null,
    storage: [],
    memory: [],
    cooler: null,
    chassis: null,
    linkID: null,
    setProcessor: (processor: Description) => set(() => ({ processor: processor })),
    setMotherboard: (motherboard: Description) => set(() => ({ motherboard: motherboard })),
    setVideoCard: (videoCard: Description) => set(() => ({ videoCard: videoCard })),
    setPowerSupply: (powerSupply: Description) => set(() => ({ powerSupply: powerSupply })),
    setStorage: (storage: Description) => set((state) => ({
        storage: [...state.storage, storage],
    })),
    setMemory: (memory: Description) => set((state) => ({
        memory: [...state.memory, memory],
    })),
    setCooler: (cooler: Description) => set(() => ({ cooler: cooler })),
    setChassis: (chassis: Description) => set(() => ({ chassis: chassis })),

    removeProcessor: () => set(() => ({ processor: null })),
    removeMotherboard: () => set(() => ({ motherboard: null })),
    removeVideoCard: () => set(() => ({ videoCard: null })),
    removePowerSupply: () => set(() => ({ powerSupply: null })),
    removeStorage: (index: number) => set((state) => ({
        storage: state.storage.filter((_, i) => i !== index),
    })),
    removeMemory:(index: number) => set((state) => ({
        memory: state.memory.filter((_, i) => i !== index),
      })),
    removeCooler: () => set(() => ({ cooler: null })),
    removeChassis: () => set(() => ({ chassis: null })),
    getTotalPrice: () => {
        const selectedComponents: Description[] = [
            get().processor,
            get().motherboard,
            get().videoCard,
            get().powerSupply,
            ...get().storage,
            ...get().memory,
            get().cooler,
            get().chassis,
        ].filter((component) => component !== null) as Description[];

        const totalPrice = selectedComponents.reduce(
            (acc, component) => acc + (component.price || 0),
            0
        );
        return totalPrice;
    },
    setLinkID: (linkID: string) => set(() => ({ linkID: linkID })),
}));

export default usePCBuilderStore;

