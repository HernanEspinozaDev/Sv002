<script>
  import { onMount } from "svelte";
  import { navigateTo } from "./utils/navigation";
  import Carousel from "./components/home/Carousel.svelte";
  import ProductsSection from "./components/products/ProductsSection.svelte";
  import CartModal from "./components/cart/CartModal.svelte";

  let showCartModal = false;

  const toggleCartModal = () => {
    showCartModal = !showCartModal;
  };
</script>

<header class="bg-white py-4 shadow-md">
  <div class="container mx-auto px-4 flex justify-between items-center">
    <img src="/logo.svg" alt="Bakery Logo" class="h-12" />
    <nav>
      <ul class="flex space-x-6">
        <li>
          <button
            class="hover:text-blue-500"
            on:click={() => navigateTo("products")}
            >Productos</button
          >
        </li>
        <li>
          <button
            class="hover:text-blue-500"
            on:click={() => navigateTo("contact")}
            >Contacto</button
          >
        </li>
        <li>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
            on:click={toggleCartModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cotización
          </button>
        </li>
      </ul>
    </nav>
  </div>
</header>

<main>
  <Carousel />
  <ProductsSection />
  <section id="contact" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Contacto</h2>
      <p class="text-center">
        ¡Contáctanos para cualquier consulta o pedido especial!
      </p>
    </div>
  </section>
</main>

<footer class="bg-gray-200 py-6 mt-12">
  <div class="container mx-auto px-4 text-center">
    <p>&copy; {new Date().getFullYear()} Panadería Delicias. Todos los derechos reservados.</p>
  </div>
</footer>

<div class="fixed bottom-4 left-4 z-50">
  <a
    href="https://wa.me/tunumerodetelefono"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full shadow-lg flex items-center"
    >
      <img src="/whatsapp.svg" alt="WhatsApp" class="h-6 mr-2" />
      WhatsApp
    </button>
  </a>
</div>

<CartModal bind:showCartModal />