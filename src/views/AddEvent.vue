<template>
  <div class="container w-50">
    <h3 class="mb-5">Dodaj Nowe Wydarzenie</h3>
    <EventForm :categories="categories" @submit-add-event="$emit('add-event', $event)" />
  </div>
</template>

<script>
import EventForm from '../components/EventForm.vue';

export default {
  components: { EventForm },
  props: {
    categories: Array
  }
};
</script>
  