import { Api, Item } from "@/services/api/items";
import { create } from "zustand";

interface ItemsState {
  items: Item[];
  currentItem: Item | null;
  isLoading: boolean;
  error: string | null;
  fetchItems: () => Promise<void>;
  fetchItemById: (id: number) => Promise<void>;
}

export const useItemsStore = create<ItemsState>((set) => {
  const api = new Api();

  return {
    items: [],
    currentItem: null,
    isLoading: false,
    error: null,
    fetchItems: async () => {
      set({ isLoading: true });
      try {
        const items = await api.fetchItems();
        set({ items, error: null });
      } catch (error) {
        set({ error: (error as Error).message });
      } finally {
        set({ isLoading: false });
      }
    },
    fetchItemById: async (id: number) => {
      set({ isLoading: true });
      try {
        const item = await api.fetchItemById(id);
        set({ currentItem: item, error: null });
      } catch (error) {
        set({ error: (error as Error).message });
      } finally {
        set({ isLoading: false });
      }
    },
  };
});
