<template>
  <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-header">
            <h1>{{ modalHeader }}</h1>
        </div>
        <div class="modal-body">
            <div class="section">
              <form action="">
                  <label for="name">Name:</label>
                  <input type="text" v-model="nameInput">
              </form>
            </div>
            <file-uploader class="section" />
            <div class="section">
                <form action="">
                    <label for="desc">Description:</label>
                    <input type="text" v-model="descriptionInput">
                </form>
            </div>
            <custom-checkbox inputText="Show" class="section" />
        </div>
        <div class="modal-footer">
            <button disabled class="button-modal disabled">OK</button>
            <button v-on:click="close()" class="button-modal">Cancel</button>
        </div>
      </div>
  </div>
</template>

<script>
import Uploader from './Uploader.vue'
import Checkbox from './Checkbox.vue'

export default {
  name: 'Modal',
  components: {
      'file-uploader': Uploader,
      'custom-checkbox': Checkbox,
  },
  props: {
    modalHeader: String
  },
  data() {
    return {
        nameInput: '',
        descriptionInput: '',
        isCheckboxActive: false,
        isCheckboxSelected: false
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
}
</script>

<style scoped lang="scss">
</style>
