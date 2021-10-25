<script lang="ts">
  import Card from "./Card.svelte";
  import PollStore from "../stores/PollStore";

  let polls: Array<object>;

  PollStore.subscribe((data) => {
    console.log(data);
    polls = [...data];
  });
</script>

<div class="content">
  {#each polls as poll}
    <Card {poll} />
  {/each}
</div>

<style>
  .content {
    border-radius: 10px;
    border: 1px solid white;
    width: 95%;
    background-color: grey;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
