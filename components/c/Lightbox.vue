<template>
  <transition name="fade">
  <!-- 
    tabindex="0"
    @keydown.esc="close"
    @click.self="close"
  -->
    <div v-show="show" class="Lightbox">
      <div class="Lightbox__close" @click="close"></div>
      <div class="Lightbox__slot">
        <div class="Lightbox__close" @click="close"></div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  /*
    mounted() {
      const self = this
      document.body.addEventListener('keydown', function (e) {
        e.keyCode === 27 && self.show && self.close()
      })
    },
    beforeDestroy() {
      const self = this
      document.body.removeEventListener('keydown', function (e) {
        e.keyCode === 27 && self.show && self.close()
      })
    },
  */
  methods: {
    close() {
      this.$emit('update:show', false)
      // document.body.style = ''
    },
  },
}
</script>


<style>
/* 
.Lightbox {
  cursor: pointer;
  user-select: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: #FFF url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none' stroke='RoyalBlue'><line x1='2' y1='2' x2='18' y2='18' /><line x1='18' y1='2' x2='2' y2='18' /></svg>") calc(100% - 18px) 18px no-repeat;
  display: flex;
}

.Lightbox__slot {
  cursor: default;
  margin: auto;

  display: flex;
  align-items: center;

  max-width: 90%;
  height: 100%;
  max-height: 90vh;
}

.Lightbox__slot * {
  @apply shadow-lg;
  border-radius: 16px;
  height: 100%;
  object-fit: cover;
} 
*/
</style>


<style>
.Lightbox {
  /* cursor: pointer; */
  user-select: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: #e8e8e8f1;
    /* url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none' stroke='RoyalBlue' stroke-width='2'><line x1='2' y1='2' x2='18' y2='18' /><line x1='18' y1='2' x2='2' y2='18' /></svg>")
    calc(100% - 18px) 18px no-repeat; */
  display: flex;
}

.Lightbox__close {
  cursor: pointer;
  @apply right-1 top-1 absolute;
  width: 40px;
  height: 40px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none' stroke='RoyalBlue' stroke-width='2'><line x1='2' y1='2' x2='18' y2='18' /><line x1='18' y1='2' x2='2' y2='18' /></svg>")
    center no-repeat;
}

.Lightbox__slot {
  position: relative;
  @apply shadow-lg p-8 rounded-lg;
  background: #fff;
  cursor: default;
  margin: auto;
  max-width: 90%;
  /* height: 100%; */
  max-height: 90vh;
}
</style>