<template>
  <div class="container w-50 mt-5">
    <button @click="$router.push({ name: 'add-category' })" class="btn btn-success mb-3">Dodaj Kategorię +</button>
    <CategoriesTable 
      :categories="categories"
      @delete-category="$emit('delete-category', $event)" 
    />
  </div>
</template>

<script>
import CategoriesTable from '../components/CategoriesTable.vue';

export default {
  components: {
    CategoriesTable
  },
  props: {
    categories: Array
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 40px;
}
</style>
  