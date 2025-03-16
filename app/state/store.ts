import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type StoreState = {
    leadId: string;
    productId: string;
}

type StoreActions = {
    setLeadId: (lead: string) => void;
    setProductId: (product: string) => void;
}

type Store = StoreState & StoreActions;

export const useStore = create<Store>()(
    persist(
        (set) => ({
            leadId: '',
            productId: '',
            setLeadId: (lead) => set({ leadId: lead }),
            setProductId: (product) => set({ productId: product })
        }),
        { name: 'store' }
    )
);