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
}
</script>

<style scoped lang="scss">
</style>
