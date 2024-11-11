<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group mb-3">
      <label for="name" class="mb-2">Nazwa Kategorii</label>
      <input type="text" v-model="formData.name" class="form-control" id="name" required />
    </div>
    <button type="submit" class="btn btn-primary">Zapisz</button>
  </form>
</template>

<script>
export default {
  props: {
    category: Object
  },
  data() {
    return {
      formData: {
        name: this.category ? this.category.name : ''
      }
    };
  },
  methods: {
    handleSubmit() {
      const eventData = { ...this.category, ...this.formData };
      this.category ? this.$emit("submit-edit-category", eventData) : this.$emit("submit-add-category", eventData);
    }
  },
  watch: {
    category: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.formData.name = newValue.name;
        }
      }
    }
  }
};
</script>
