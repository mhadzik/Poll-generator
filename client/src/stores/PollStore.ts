import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    name: "First poll",
    question: "Nice question?",
    answers: {
      answer_1: "nice",
      answer_2: "not nice",
    },
  },
  {
    id: 2,
    name: "Second poll",
    question: "Nice question?",
    answers: {
      answer_1: "nice",
      answer_2: "not nice",
    },
  },
]);

export default PollStore;
