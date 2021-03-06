<template lang="pug">
  .uploader
    form(enctype='multipart/form-data' novalidate='')
      label(for='file')
        | Image:
      .uploader-button
        .uploader-button-text(v-if='isSuccess')
          | Success!
        .uploader-button-text(v-if='isFailed')
          | Upload failed
        .uploader-button-text(v-if='isInitial')
          | Upload image
        .uploader-button-text(v-if='isSaving')
          | Uploading...
        input.uploader-input(type='file' :name='uploadFieldName' :disabled='isSaving' @change='filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length' accept='image/*' v-if='isInitial || isSaving')
</template>

<script>
import { upload } from './scripts/mockuploader.js'
import { wait } from './scripts/delayer.js'
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export default {
  name: 'Uploader',
  data() {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos'
    }
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;
      upload(formData)
        .then(wait(1500)) // DEV ONLY: wait for 1.5s 
        .then(x => {
          this.uploadedFiles = [].concat(x);
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch(err => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();
      if (!fileList.length) return;
      // append the files to FormData
      Array
        .from(Array(fileList.length).keys())
        .map(x => {
          formData.append(fieldName, fileList[x], fileList[x].name);
        });
      // save it
      this.save(formData);
    }
  },
  mounted() {
    this.reset();
  },
}
</script>

<style scoped lang="scss">
</style>
