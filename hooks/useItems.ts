import { useItemsStore } from "@/store/useItemsStore";
import { useEffect } from "react";

export function useItems(id?: number) {
  const { items, currentItem, isLoading, error, fetchItems, fetchItemById } =
    useItemsStore();

  useEffect(() => {
    if (id !== undefined && !isNaN(id)) {
      fetchItemById(id);
    } else {
      fetchItems();
    }
  }, [id]);

  return {
    items,
    item: currentItem,
    isLoading,
    error,
    refetch: id ? () => fetchItemById(id) : fetchItems,
  };
}
