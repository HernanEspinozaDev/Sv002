<script>
    import { onMount } from "svelte";
    import { navigateTo } from "../../utils/navigation";
    import { fly, fade } from "svelte/transition";
    import ProductCard from "./ProductCard.svelte";
    import ProductModal from "./ProductModal.svelte";
  
    let showModal = false;
    let selectedProduct;
    let isMounted = false;
  
    const products = {
      sweets: [
        {
          id: 1,
          name: "Pastel de Chocolate",
          price: 15.99,
          image: "/images/p2.jpg",
          description:
            "Delicioso pastel de chocolate con capas de crema y ganache.",
          type: "sweets",
        },
        {
          id: 2,
          name: "Tarta de Fresa",
          price: 12.99,
          image: "/images/p5.jpg",
          description:
            "Tarta de fresa fresca con una base crujiente y crema pastelera.",
          type: "sweets",
        },
      ],
      savory: [
        {
          id: 3,
          name: "Empanada de Pollo",
          price: 2.5,
          image: "/images/p3.jpg",
          description:
            "Empanada rellena de pollo, verduras y especias, horneada a la perfección.",
          type: "savory",
        },
        {
          id: 4,
          name: "Pan de Queso",
          price: 1.99,
          image: "/images/p6.jpg",
          description:
            "Panecillos de queso suaves y esponjosos, ideales para cualquier momento del día.",
          type: "savory",
        },
      ],
    };
  
    const openModal = (product) => {
      selectedProduct = product;
      showModal = true;
    };
  
    onMount(() => {
      isMounted = true;
    });
  </script>
  
  <section id="products" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Nuestros Productos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="bg-pink-200 p-6 rounded-lg shadow-md"
          in:fly={{ y: 50, duration: 500 }}
        >
          <h3 class="text-2xl font-semibold text-center mb-4">Dulces</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each products.sweets as product}
              {#if isMounted}
                <div in:fade={{ duration: 500 }}>
                  <ProductCard {product} category="Dulce" on:view={openModal} />
                </div>
              {/if}
            {/each}
          </div>
        </div>
        <div
          class="bg-yellow-200 p-6 rounded-lg shadow-md"
          in:fly={{ y: 50, duration: 500, delay: 200 }}
        >
          <h3 class="text-2xl font-semibold text-center mb-4">Salados</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each products.savory as product}
              {#if isMounted}
                <div in:fade={{ duration: 500 }}>
                  <ProductCard {product} category="Salado" on:view={openModal} />
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </div>
  
    <ProductModal {selectedProduct} bind:showModal on:added={() => (showModal = false)} />
  </section>