<script lang="ts">
  export let poll;
  console.log(poll);
</script>

<div class="card">
  <h4>{poll.name}</h4>
  <h5>{poll.question}</h5>
  <h5>{poll.answers.answer_1}</h5>
  <h5>{poll.answers.answer_2}</h5>
</div>

<style>
  .card {
    margin: 2rem 0;
    width: 75%;
    background-color: white;
    padding: 0 1rem;
    border-radius: 10px;
    border: 1px solid white;
  }

  .card:nth-child(odd) {
    margin-bottom: 0;
  }
</style>
