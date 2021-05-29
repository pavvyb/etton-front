<template>
  <div class="catalog container">
    <div>
      <button type="button" class="btn" @click="showModal">Add item</button>
      <custom-modal v-show="isModalVisible" @close="closeModal" modalHeader="Create new item" />
    </div>
    <div class="card-list">
      <div v-for="card in cardsGenerated" :key="card.cardImage">
        <card-component :cardContent="{ card }" />
      </div>
    </div>
  </div>
</template>

<script>
import { createCards } from '../components/scripts/cards.js'
import Modal from '@/components/Modal.vue'
import Card from '../components/Card'

export default {
  name: 'Catalog',
  components: {
    'card-component': Card,
    'custom-modal': Modal,
  },
  data() {
    return {
      isModalVisible: false,
      cards : [
        {}
      ]
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  computed:  {
    cardsGenerated: function () {
      return createCards()
    }
  } 
}
</script>
