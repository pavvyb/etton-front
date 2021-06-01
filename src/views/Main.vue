<template>
  <main class="main container">
    <div>
      <button type="button" class="button-main" @click="showModal">Add item</button>
      <custom-modal v-show="isModalVisible" @close="closeModal" modalHeader="Create new item" />
    </div>
  </main>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'Main',
  components: {
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
    }
}
</script>
