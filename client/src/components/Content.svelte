<script lang="ts">
  import Card from "./Card.svelte";
  import { apiData, pollStore } from '../stores/PollStore';


  // let polls: Array<object>;

  // PollStore.subscribe((data) => {
  //   console.log(data);
  //   polls = [...data];
  // });
  import { onMount } from 'svelte';

  let pollsList = [];

  // Get the data from the api, after the page is mounted.
  onMount(async () => {
    fetch("http://localhost:3000/api/polls")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      apiData.set(data);
    }).catch(err => {
      console.log(err)
      return [];
    })
  });
  console.log(pollStore);

</script>

<div class="content">
  <!-- {#each polls as poll}
    <Card {poll} />
  {/each} -->
  
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
