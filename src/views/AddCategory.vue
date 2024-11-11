<template>
  <div class="container w-50">
    <h3 class="mb-4">Dodaj Nową Kategorię</h3>
    <CategoryForm @submit-add-category="$emit('add-category', $event)" />
  </div>
</template>

<script>
import CategoryForm from '../components/CategoryForm.vue';

export default {
  components: { CategoryForm }
};
</script>
  