<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="name" class="form-label">Nazwa Wydarzenia</label>
      <input type="text" v-model="formData.name" class="form-control" required />
    </div>
    <div class="mb-3">
      <label for="start_date" class="form-label">Data Początkowa</label>
      <input type="date" v-model="formData.start_date" class="form-control" required @input="validateDates"/>
    </div>
    <div class="mb-3">
      <label for="end_date" class="form-label">Data Końcowa</label>
      <input type="date" v-model="formData.end_date" class="form-control" required @input="validateDates"/>
    </div>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    <div class="mb-3">
      <label for="event_image" class="form-label">Zdjęcie Wydarzenia</label>
      <input type="file" @change="onFileChange" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="event_category_name" class="form-label">Kategoria</label>
      <select v-model="formData.event_category_name" class="form-control" style="cursor: pointer;" required>
        <option v-for="category in categories" :key="category.id" :value="category.name">
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Opis</label>
      <textarea v-model="formData.event_description" class="form-control" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Zapisz</button>
  </form>
</template>

<script>
export default {
  props: {
    event: Object,
    categories: Array
  },
  data() {
    return {
      formData: {
        id: this.event ? this.event.id : Date.now(),
        name: this.event ? this.event.name : '',
        start_date: this.event ? this.event.start_date : '',
        end_date: this.event ? this.event.end_date : '',
        event_category_id: this.event ? this.event.event_category_id : null,
        event_category_name: this.event ? this.event.event_category_name : '',
        event_description: this.event ? this.event.event_description : '',
        event_image: this.event ? this.event.event_image : '',
      },
      errorMessage: ''
    };
  },
  methods: {
    validateDates() {
      if (this.formData.start_date && this.formData.end_date) {
        const start = new Date(this.formData.start_date);
        const end = new Date(this.formData.end_date);

        if (end < start) {
          this.errorMessage = 'Data końcowa nie może być wcześniejsza niż data początkowa.';
        } else {
          this.errorMessage = '';
        }
      } else {
        this.errorMessage = '';
      }
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.formData.event_image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    submitForm() {
      if(this.errorMessage === '') {
        const selectedCategory = this.categories.filter(category => category.name === this.formData.event_category_name);
        const eventData = { ...this.formData, event_category_id: selectedCategory[0].id };
        this.event ? this.$emit("submit-edit-event", eventData) : this.$emit("submit-add-event", eventData);
      }
    }
  },
  watch: {
    event: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.formData.name = newValue.name;
          this.formData.start_date = newValue.start_date;
          this.formData.end_date = newValue.end_date;
          this.formData.event_category_id = newValue.event_category_id;
          this.formData.event_category_name = newValue.event_category_name;
          this.formData.event_description = newValue.event_description;
          this.formData.event_image = newValue.event_image;
        }
      }
    }
  }
};
</script>
