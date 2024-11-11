<template>
  <div class="container w-50">
    <h2 class="mb-5">Edytuj Wydarzenie</h2>
    <EventForm :event="event" :categories="categories" @submit-edit-event="$emit('update-event', $event)" />
  </div>
</template>

<script>
import EventForm from '../components/EventForm.vue';

export default {
  components: { EventForm },
  props: {
    categories: Array,
    events: Array
  },
  data() {
    return {
      event: null
    };
  },
  created() {
    const eventId = parseInt(this.$route.params.id, 10);
    this.event = this.events.find(e => e.id === eventId);
  }
};
</script>
  