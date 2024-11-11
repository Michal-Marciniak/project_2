<template>
  <div class="container w-50 mt-5">
    <h2 class="mb-5">Edytuj Kategorię</h2>
    <CategoryForm :category="category" @submit-edit-category="$emit('update-category', $event)" />
  </div>
</template>

<script>
import CategoryForm from '../components/CategoryForm.vue';

export default {
  components: { CategoryForm },
  props: {
    categories: Array
  },
  data() {
    return {
      category: null
    };
  },
  mounted() {
    const categoryId = parseInt(this.$route.params.id, 10);
    this.category = this.categories.find(c => c.id === categoryId);
    
    if (!this.category) {
      console.error('Kategoria nie została znaleziona:', categoryId);
      this.$router.push({ name: 'manage-categories' });
    }
  }
};
</script>
