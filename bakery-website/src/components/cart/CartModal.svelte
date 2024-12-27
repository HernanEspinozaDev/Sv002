<script>
    import { createEventDispatcher } from "svelte";
    import { cart } from "../../stores/cart";
    import { fly } from "svelte/transition";
  
    export let showCartModal;
  
    const dispatch = createEventDispatcher();
  
    const getTotal = () => {
      return $cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    const updateQuantity = (item, quantity) => {
      cart.updateQuantity(item.id, quantity);
    };
  
    const removeItem = (itemId) => {
      cart.removeItem(itemId);
    };
  
    const closeCartModal = () => {
      showCartModal = false;
    };
  
    const handleSubmit = () => {
      // Aquí puedes manejar el envío del formulario de contacto
      alert(
        "Formulario de contacto enviado. ¡Gracias por tu interés! (Simulación)"
      );
      cart.clearCart();
      showCartModal = false;
    };
  </script>
  
  {#if showCartModal}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-10"
      in:fly={{ y: -20, duration: 300 }}
      out:fly={{ y: 20, duration: 300 }}
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Carrito de Cotización</h2>
          <button class="text-gray-500 hover:text-gray-700" on:click={closeCartModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
  
        {#if $cart.length === 0}
          <p class="text-gray-500">No hay productos en el carrito.</p>
        {:else}
          <div class="overflow-y-auto max-h-60">
          {#each $cart as item (item.id)}
            <div class="flex items-center justify-between border-b py-2">
              <div>
                <h3 class="font-semibold">{item.name}</h3>
                <p class="text-sm text-gray-600">{item.type}</p>
              </div>
              <div class="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  on:input={($event) =>
                    updateQuantity(item, parseInt($event.target.value))}
                  class="w-16 border rounded px-2 py-1 text-center"
                />
                <span class="mx-2">x</span>
                <span>${item.price.toFixed(2)}</span>
                <button
                  class="ml-4 text-red-500 hover:text-red-700"
                  on:click={() => removeItem(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          {/each}
          </div>
          <div class="mt-4">
            <p class="font-bold">Total: ${getTotal().toFixed(2)}</p>
          </div>
        {/if}
  
        <form class="mt-6" on:submit|preventDefault={handleSubmit}>
          <h3 class="text-lg font-semibold mb-2">Información de Contacto</h3>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Nombre:</label
            >
            <input
              type="text"
              id="name"
              class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Correo Electrónico:</label
            >
            <input
              type="email"
              id="email"
              class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Mensaje (Opcional):</label
            >
            <textarea
              id="message"
              rows="3"
              class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div class="mt-6">
            <button
              type="submit"
              class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Solicitar Cotización
            </button>
          </div>
        </form>
      </div>
    </div>
  {/if}