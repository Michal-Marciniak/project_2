<template>
  <div id="app">
    <nav class="navbar navbar-expand-sm navbar-light bg-light mb-4 d-print-none">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Lista Wydarzeń</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/categories">Lista Kategorii</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div v-if="showErrorMessage" class="alert alert-danger alert-dismissible" role="alert">
      <strong>{{ this.informationModalMessage }}</strong>
    </div>
    <div v-if="showSuccessMessage" class="alert alert-success alert-dismissible" role="alert">
      <strong>{{ this.informationModalMessage }}</strong>
    </div>

    <router-view 
      id="app-container"
      :events="events" 
      :categories="categories"
      @add-event="addEvent" 
      @update-event="updateEvent"
      @delete-event="deleteEvent" 
      @add-category="addCategory" 
      @update-category="updateCategory"
      @delete-category="deleteCategory"
      @sorted-events="updateSortedEvents"
      @sorted-events-date-range="updateSortedEventsDateRange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: "Kategoria 1" },
        { id: 2, name: "Kategoria 2" },
        { id: 3, name: "Kategoria 3" }
      ],
      events: [
        {
          id: 1,
          name: "Wydarzenie 1",
          start_date: "2024-11-01",
          end_date: "2024-11-01",
          event_category_id: 1,
          event_category_name: "Kategoria 1",
          event_description: "Opis wydarzenia 1",
          event_image: ""
        },
        {
          id: 2,
          name: "Wydarzenie 2",
          start_date: "2024-11-02",
          end_date: "2024-11-02",
          event_category_id: 2,
          event_category_name: "Kategoria 2",
          event_description: "Opis wydarzenia 2",
          event_image: ""
        },
        {
          id: 3,
          name: "Wydarzenie 3",
          start_date: "2024-11-03",
          end_date: "2024-11-03",
          event_category_id: 3,
          event_category_name: "Kategoria 3",
          event_description: "Opis wydarzenia 3",
          event_image: ""
        }
      ],
      informationModalMessage: '',
      showErrorMessage: false,
      showSuccessMessage: false,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      const events = localStorage.getItem('events');
      const categories = localStorage.getItem('categories');

      if (events) this.events = JSON.parse(events);
      if (categories) this.categories = JSON.parse(categories);
    },
    saveEvents() {
      localStorage.setItem('events', JSON.stringify(this.events));
    },
    saveCategories() {
      localStorage.setItem('categories', JSON.stringify(this.categories));
    },
    addEvent(newEvent) {
      this.events.push(newEvent);
      this.saveEvents();
      this.$router.push('/');
      this.setInformationModalMessage('Wydarzenie dodane pomyślnie!');
    },
    updateEvent(updatedEvent) {
      const index = this.events.findIndex(event => event.id === updatedEvent.id);
      if (index !== -1) {
        this.events.splice(index, 1, updatedEvent);
        this.saveEvents();
      } 
      this.$router.push('/');
      this.setInformationModalMessage('Wydarzenie zaktualizowane pomyślnie!');
    },
    deleteEvent(eventId) {
      this.events = this.events.filter(event => event.id !== eventId);
      this.saveEvents();
      this.$router.push('/');
      this.setInformationModalMessage('Wydarzenie usunięte pomyślnie!');
    },
    addCategory(newCategory) {
      if(this.isCategoryNameUnique(newCategory.name) && newCategory.name.trim() !== '') {
        this.categories.push({ ...newCategory, id: Date.now() });
        this.saveCategories();
        this.$router.push({ name: 'categories' });
        this.setInformationModalMessage('Kategoria dodana pomyślnie!');
      } else if (!this.isCategoryNameUnique(newCategory.name)) {
        this.$router.push({ name: 'categories' });
        this.setInformationModalMessage('Kategoria o podanej nazwie już istnieje!', false);
      } else if(newCategory.name.trim() === '') {
        this.$router.push({ name: 'categories' });
        this.setInformationModalMessage('Nazwa kategorii nie może być pusta!', false);
      }
    },
    updateCategory(updatedCategory) {
      if(this.isCategoryNameUnique(updatedCategory.name) && updatedCategory.name.trim() !== '') {
        const index = this.categories.findIndex(category => category.id === updatedCategory.id);
        if (index !== -1) {
          this.categories.splice(index, 1, updatedCategory);
          this.saveCategories();

          this.events.forEach(event => {
            if (event.event_category_id === updatedCategory.id) {
              event.event_category_name = updatedCategory.name;
            }
          });
          this.saveEvents();
          this.$router.push({ name: 'categories' });
          this.setInformationModalMessage('Kategoria zaktualizowana pomyślnie!');
        } 
      } else if(!this.isCategoryNameUnique(updatedCategory.name)) {
        this.$router.push({ name: 'categories' });
        this.setInformationModalMessage('Kategoria o podanej nazwie już istnieje!', false);
      } else if(updatedCategory.name.trim() === '') {
        this.$router.push({ name: 'categories' });
        this.setInformationModalMessage('Nazwa kategorii nie może być pusta!', false);
      }
    },
    deleteCategory(categoryId) {
      let isCategoryInUse = false;

      this.events.forEach(event => {
        if (event.event_category_id === categoryId) {
          isCategoryInUse = true;
          return;
        }
      });

      if (!isCategoryInUse) {
        this.categories = this.categories.filter(category => category.id !== categoryId);
        this.saveCategories();
        this.setInformationModalMessage('Kategoria usunięta pomyślnie!');
      } else {
        this.setInformationModalMessage('Nie można usunąć tej kategorii, ponieważ jest ona używana przez jedno lub więcej wydarzeń!', false);
      }
    },
    setInformationModalMessage(message, isSuccessMessage = true) {
      this.informationModalMessage = message;
      if(isSuccessMessage) {
        this.showErrorMessage = false;
        this.showSuccessMessage = true;
      } else {
        this.showSuccessMessage = false;
        this.showErrorMessage = true;
      }
      setTimeout(() => {
        this.showErrorMessage = false;
        this.showSuccessMessage = false;
        this.informationModalMessage = '';
      }, 3000);
    },
    updateSortedEvents(sortedEvents) {
      this.events = sortedEvents;
      this.saveEvents();
    },
    updateSortedEventsDateRange(sortedEvents) {
      this.events = sortedEvents;
    },
    isCategoryNameUnique(newCategoryName) {
      return !this.categories.some(category => category.name.toLowerCase() === newCategoryName.toLowerCase());
    }
  }
};
</script>

<style scoped>
  #app-container {
    padding: 0px 20px 30px;
  }
  .alert {
    position: sticky;
    width: 50%;
    left: 25%;
    text-align: center;
  }
</style>
