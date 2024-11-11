import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/EventsList.vue';
import AddEvent from './views/AddEvent.vue';
import EditEvent from './views/EditEvent.vue';
import ManageCategories from './views/CategoriesList.vue';
import AddCategory from './views/AddCategory.vue';
import EditCategory from './views/EditCategory.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/add-event', component: AddEvent, name: 'add-event' },
  { path: '/edit-event/:id', component: EditEvent, name: 'edit-event', props: true },
  { path: '/categories', component: ManageCategories, name: 'categories' },
  { path: '/add-category', component: AddCategory, name: 'add-category' },
  { path: '/edit-category/:id', component: EditCategory, name: 'edit-category', props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
