<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between d-print-none">
      <div>
        <button @click="$router.push({ name: 'add-event' })" class="btn btn-success mb-3">Dodaj Wydarzenie +</button>
      </div>
      <div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sortuj Wydarzenia
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="sortEvents('name')">Nazwa</a></li>
            <li><a class="dropdown-item" @click="sortEvents('startDateAsc')">Data początkowa - Rosnąco</a></li>
            <li><a class="dropdown-item" @click="sortEvents('startDateDesc')">Data początkowa - Malejąco</a></li>
            <li><a class="dropdown-item" @click="sortEvents('endDateAsc')">Data końcowa - Rosnąco</a></li>
            <li><a class="dropdown-item" @click="sortEvents('endDateDesc')">Data końcowa - Malejąco</a></li>
            <li><a class="dropdown-item" @click="sortEvents('dateRange')">Zakres dat (od - do)</a></li>
            <li><a class="dropdown-item" @click="sortEvents('categoryName')">Kategoria</a></li>
          </ul>
        </div>
        <div v-if="selectedSortingType === 'dateRange'" class="mt-3">
          <label>Data początkowa:</label>
          <input type="date" v-model="selectedDateRange.from" @change="applyDateRangeSort" class="form-control" required/>
          <label class="mt-2">Data końcowa:</label>
          <input type="date" v-model="selectedDateRange.to" @change="applyDateRangeSort" class="form-control" required/>
        </div>
      </div>
    </div>
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
  },
  data() {
    return {
      selectedSortingType: "name",
      selectedDateRange: { 
        from: "", 
        to: "" 
      },
      sortedEvents: [...this.events]
    }
  },
  methods: {
    sortEvents(sortingType) {
      this.selectedSortingType = sortingType;
      
      if(sortingType !== 'dateRange') {
        switch (sortingType) {
          case "name":
            this.sortedEvents.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case "startDateAsc":
            this.sortedEvents.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
            break;
          case "startDateDesc":
            this.sortedEvents.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
            break;
          case "endDateAsc":
            this.sortedEvents.sort((a, b) => new Date(a.end_date) - new Date(b.end_date));
            break;
          case "endDateDesc":
            this.sortedEvents.sort((a, b) => new Date(b.end_date) - new Date(a.end_date));
            break;
          case "categoryName":
            this.sortedEvents.sort((a, b) => a.event_category_name.localeCompare(b.event_category_name));
            break;
        }
        this.$emit('sorted-events', this.sortedEvents);
      }
    },
    applyDateRangeSort() {
      if (this.selectedSortingType === 'dateRange' && this.selectedDateRange.from && this.selectedDateRange.to) {
        const sortedDateRange = this.sortedEvents.filter(event => {
          const eventStartDate = new Date(event.start_date);
          const eventEndDate = new Date(event.end_date);
          const rangeFrom = new Date(this.selectedDateRange.from);
          const rangeTo = new Date(this.selectedDateRange.to);
          return eventStartDate >= rangeFrom && eventEndDate <= rangeTo;
        });
        this.$emit('sorted-events-date-range', sortedDateRange);
      }
    }
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
}
li:hover a {
  color: black;
  font-weight: 500;
}
</style>