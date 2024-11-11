<template>
  <div class="container mt-5">
    <button @click="$router.push({ name: 'add-event' })" class="btn btn-success mb-3">Dodaj Wydarzenie +</button>
    <EventTable :events="events" @delete-event="$emit('delete-event', $event)" />
  </div>
</template>

<script>
import EventTable from '../components/EventsTable.vue';

export default {
  name: 'EventTimeline',
  components: {
    EventTable
  },
  props: {
    events: Array
  }
};
</script>
  