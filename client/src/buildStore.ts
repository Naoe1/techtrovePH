import { create } from 'zustand'

type Description = {
    uid: string;
    full_name: string;
    price: number;
}

interface PCBuilderState {
    processor: Description | null;
    motherboard: Description | null;
    videoCard: Description | null;
    storage: Description[] | [];
    setProcessor: (processor: Description) => void;
    setMotherboard: (motherboard: Description) => void;
    setVideoCard: (videoCard: Description) => void;
    setStorage: (storage: Description) => void;
    removeProcessor: () => void;
    removeMotherboard: () => void;
    removeVideoCard: () => void;
    removeStorage: (uid: string) => void;
}


const usePCBuilderStore = create<PCBuilderState>((set) => ({
    processor: null,
    motherboard: null,
    videoCard: null,
    storage: [],
    setProcessor: (processor: Description) => set(() => ({ processor: processor })),
    setMotherboard: (motherboard: Description) => set(() => ({ motherboard: motherboard })),
    setVideoCard: (videoCard: Description) => set(() => ({ videoCard: videoCard })),
    setStorage: (storage: Description) => set((state) => ({
        storage: [...state.storage, storage],
    })),
    removeProcessor: () => set(() => ({ processor: null })),
    removeMotherboard: () => set(() => ({ motherboard: null })),
    removeVideoCard: () => set(() => ({ videoCard: null })),
    removeStorage: (uid: string) => set((state) => ({
        storage: state.storage.filter((item) => item.uid !== uid),
    })),
}));

export default usePCBuilderStore;

