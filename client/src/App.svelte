<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import Content from "./components/Content.svelte";
</script>

<main>
  <h1>Random Poll Generator</h1>
  <Content />
</main>
<Footer author="autor" />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap");

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90vh;
    font-family: "Open Sans", sans-serif;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
