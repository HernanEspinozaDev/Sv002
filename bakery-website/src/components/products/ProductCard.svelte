<script>
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";
  
    export let product;
    export let category;
  
    const dispatch = createEventDispatcher();
  
    const handleView = () => {
      dispatch("view", product);
    };
  </script>
  
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
    in:fade
  >
    <div class="p-4">
      <h3 class="text-xl font-semibold">{product.name}</h3>
      <p class="text-gray-600 text-sm mt-1">{category}</p>
      <p class="mt-2">${product.price.toFixed(2)}</p>
    </div>
    <div class="flex-grow"></div>
    <button
      class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 flex items-center justify-center"
      on:click={handleView}
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
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    </button>
  </div>