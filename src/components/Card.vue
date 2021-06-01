<template lang="pug">
  .card
    h1.card-header
      | {{ cardHeader }}
    img.card-image(v-bind:src='cardImage' alt='')
    .card-description
      | {{ cardDescription }}
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardContent: Object
  },
  data() {
    return {
    //   uploadedFiles: [],
    }
  },
  computed: {
    cardHeader() {
        return this.cardContent.card.cardName;
    },
    cardImage() {
        return this.cardContent.card.cardImage;
    },
    cardDescription() {
        return this.cardContent.card.cardDescription;
    }
  },
  methods: {
    // reset() {
    //   this.currentStatus = STATUS_INITIAL;
    //   this.uploadedFiles = [];
    //   this.uploadError = null;
    // }
  },
  mounted() {
    // this.reset();
  },
}
</script>

<style scoped lang="scss">
</style>
