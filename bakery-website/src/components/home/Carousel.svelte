<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
  
    let currentSlide = 0;
    const slides = [
      {
        id: 1,
        image: "/images/p1.jpg",
        title: "¡Los mejores panes!",
        subtitle: "Disfruta de nuestros deliciosos panes artesanales.",
      },
      {
        id: 2,
        image: "/images/p2.jpg",
        title: "Postres irresistibles",
        subtitle: "Prueba nuestros exquisitos postres y pasteles.",
      },
      {
        id: 3,
        image: "/images/p3.jpg",
        title: "Empanadas y más",
        subtitle: "Saborea nuestras empanadas y bocadillos salados.",
      },
    ];
  
    onMount(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
  
      return () => clearInterval(interval);
    });
  
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
    };
  
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    };
  </script>
  
  <div class="relative w-full overflow-hidden">
    {#each slides as slide (slide.id)}
      {#if slide.id === currentSlide + 1}
        <div
          class="absolute inset-0 w-full h-full"
          in:fly={{ x: 200, duration: 500 }}
          out:fly={{ x: -200, duration: 500 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4"
          >
            <h2 class="text-4xl font-bold">{slide.title}</h2>
            <p class="text-lg mt-2">{slide.subtitle}</p>
          </div>
        </div>
      {/if}
    {/each}
  
    <button
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100"
      on:click={prevSlide}
    >
      &lt;
    </button>
    <button
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100"
      on:click={nextSlide}
    >
      &gt;
    </button>
  </div>