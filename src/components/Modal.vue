<template>
  <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-header">
            <span>{{ modalHeader }}</span>
        </div>
        <div class="modal-body">
            <div>
              <form action="">
                  <label for="name">Name:</label>
                  <input type="text" v-model="nameInput">
              </form>
            </div>
            <file-uploader />
            <div>
                <form action="">
                    <label for="desc">Description:</label>
                    <input type="text" v-model="descriptionInput">
                </form>
            </div>
            <custom-checkbox inputText="Show" />
        </div>
        <div class="modal-footer">
            <button disabled class="disabled">OK</button>
            <button v-on:click="close()">Cancel</button>
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
