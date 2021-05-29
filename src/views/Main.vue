<template>
  <div class="main container">
    <span>Main Component</span>
    <div>
      <button type="button" class="btn" @click="showModal">Add item</button>
      <custom-modal v-show="isModalVisible" @close="closeModal" modalHeader="Create new item" />
    </div>
  </div>
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
