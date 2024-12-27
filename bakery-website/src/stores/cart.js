import { writable } from "svelte/store";

function createCart() {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    addItem: (item) =>
      update((items) => {
        const existingItem = items.find((i) => i.id === item.id);
        if (existingItem) {
          existingItem.quantity += item.quantity;
          return [...items];
        } else {
          return [...items, item];
        }
      }),
    removeItem: (itemId) =>
      update((items) => items.filter((i) => i.id !== itemId)),
    updateQuantity: (itemId, quantity) =>
      update((items) => {
        const item = items.find((i) => i.id === itemId);
        if (item) {
          item.quantity = quantity;
        }
        return [...items];
      }),
    clearCart: () => set([]),
  };
}

export const cart = createCart();