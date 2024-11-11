<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.name }}</td>
          <td>
            <button @click="$router.push({ name: 'edit-category', params: { id: category.id } })" class="btn btn-primary btn-sm edit-button">Edytuj</button>
            <button @click="$emit('delete-category', category.id)" class="btn btn-danger btn-sm">Usuń</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array
  }
};
</script>

<style scoped>
  .edit-button {
    margin-right: 5px;
  }
</style>
  