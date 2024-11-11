<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Data Początkowa</th>
          <th>Data Końcowa</th>
          <th>Kategoria</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        <tr class="event-row" v-for="event in events" :key="event.id" @click="showEventDetails(event)">
          <td>{{ event.name }}</td>
          <td>{{ event.start_date }}</td>
          <td>{{ event.end_date }}</td>
          <td>{{ event.event_category_name }}</td>
          <td>
            <button @click="$router.push({ name: 'edit-event', params: { id: event.id } })" class="btn btn-primary btn-sm edit-button">Edytuj</button>
            <button @click="$emit('delete-event', event.id)" class="btn btn-danger btn-sm">Usuń</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="isModalVisible" class="modal">
      <div class="modal-content">
        <div class="d-flex justify-content-between mb-3">
          <h4>Szczegóły Wydarzenia</h4>
          <button class="btn-close" @click="closeModal"></button>
        </div>
        <img v-if="selectedEvent.event_image !== ''" :src="selectedEvent.event_image" class="mb-3" />
        <p><strong>Nazwa:</strong> {{ selectedEvent.name }}</p>
        <p><strong>Data rozpoczęcia:</strong> {{ selectedEvent.start_date }}</p>
        <p><strong>Data zakończenia:</strong> {{ selectedEvent.end_date }}</p>
        <p><strong>Kategoria:</strong> {{ selectedEvent.event_category_name }}</p>
        <p><strong>Opis:</strong> {{ selectedEvent.event_description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false,
      selectedEvent: null
    }
  },
  props: {
    events: Array
  },
  methods: {
    showEventDetails(event) {
      this.selectedEvent = event;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedEvent = null;
    }
  }
}
</script>

<style scoped>
  .edit-button {
    margin-right: 5px;
  }
  tr.event-row {
    height: 50px;
    vertical-align: middle;
    cursor: pointer;
  }
  img {
    width: 150px;
    height: 150px;
  }

  .modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    max-width: 90%;
  }
</style>
  