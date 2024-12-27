<script>
    import { createEventDispatcher, onMount } from "svelte";
    import { cart } from "../../stores/cart";
    import { fly } from "svelte/transition";
  
    export let product;
    export let showModal;
  
    let quantity = 25;
  
    const dispatch = createEventDispatcher();
  
    const addToCart = () => {
      cart.addItem({ ...product, quantity });
      dispatch("added");
    };
  
    const closeModal = () => {
      showModal = false;
    };
  
    onMount(() => {
      quantity = product.type === "savory" ? 25 : 1;
    });
  </script>
  
  {#if showModal}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      in:fly={{ y: -20, duration: 300 }}
      out:fly={{ y: 20, duration: 300 }}
    >
      <div class="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        <div class="flex justify-end">
          <button
            class="text-gray-500 hover:text-gray-700"
            on:click={closeModal}
          >
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
        <div class="flex flex-col md:flex-row">
          <img
            src={product.image}
            alt={product.name}
            class="w-full md:w-1/2 object-cover rounded-lg"
          />
          <div class="p-4 md:ml-4">
            <h2 class="text-2xl font-bold">{product.name}</h2>
            <p class="text-gray-600 text-sm mt-1">{product.type}</p>
            <p class="mt-2">{product.description}</p>
            <p class="mt-2 font-semibold">
              Precio: ${product.price.toFixed(2)}
            </p>
            {#if product.type === "savory"}
              <div class="mt-4">
                <label for="quantity" class="block text-sm font-medium text-gray-700"
                  >Cantidad (mínimo 25):</label
                >
                <input
                  type="number"
                  id="quantity"
                  min="25"
                  bind:value={quantity}
                  class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            {/if}
            <p class="mt-2">Total: ${(product.price * quantity).toFixed(2)}</p>
            <button
              class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              on:click={addToCart}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}