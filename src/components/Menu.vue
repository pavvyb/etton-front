<template>
  <div class="menu">
      <button class="menu-button" @click="manipulateMenu">
          <img src="@/assets/images/cross.svg" v-if="isOpened" class="menu-button-image close-image">
          <img src="@/assets/images/burger.svg" v-else class="menu-button-image open-image">
      </button>
      <div class="fader" @click="isOpened = false" v-if="isOpened">
      </div>
      <div v-if="isOpened" id="menutoggler" v-bind:class="{ active: isOpened }">
          <div @click="redirectTo('/')" class="menu-link flyer">
            <span>
              Main page
            </span>
          </div>
          <div @click="redirectTo('/catalog')" class="menu-link flyer">
            <span>
              Cards page
            </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
        isOpened: false,
    }
  },
  methods: {
    hasClass(el, className) {
        if (el.classList)
            return el.classList.contains(className);
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    },
    addClass(el, className) {
        if (el.classList)
            el.classList.add(className)
        else if (!this.hasClass(el, className))
            el.className += " " + className;
    },
    removeClass(el, className) {
        if (el.classList)
            el.classList.remove(className)
        else if (this.hasClass(el, className))
        {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    },
    manipulateMenu() {
      const body = document.getElementsByTagName('body')[0];
      if (!this.isOpened) {
        this.addClass(body, 'noscroll');
      }
      else {
        this.removeClass(body, 'noscroll');
      }
      this.isOpened = !this.isOpened;
    },
    redirectTo(link) {
      this.manipulateMenu();
      this.$router.push(link);
    }
  },
}
</script>
