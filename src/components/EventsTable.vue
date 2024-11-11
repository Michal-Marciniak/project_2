<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Data Początkowa</th>
          <th>Data Końcowa</th>
          <th>Kategoria</th>
          <th>Opis</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.id">
          <td>{{ event.name }}</td>
          <td>{{ event.start_date }}</td>
          <td>{{ event.end_date }}</td>
          <td>{{ event.event_category_name }}</td>
          <td>{{ event.event_description }}</td>
          <td>
            <button @click="$router.push({ name: 'edit-event', params: { id: event.id } })" class="btn btn-primary btn-sm edit-button">Edytuj</button>
            <button @click="$emit('delete-event', event.id)" class="btn btn-danger btn-sm">Usuń</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    events: Array
  }
}
</script>

<style scoped>
  .edit-button {
    margin-right: 5px;
  }
</style>
  