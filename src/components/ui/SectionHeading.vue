<template>
  <div class="section-heading" :class="`section-heading--${align}`">
    <p v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</p>
    <h2 class="section-heading__title">{{ title }}</h2>
    <p v-if="text" class="section-heading__text">{{ text }}</p>
  </div>
</template>

<script setup>
  defineProps({
    eyebrow: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: 'left',
    },
  });
</script>

<style scoped lang="scss">
  .section-heading {
    position: relative;
    max-width: 720px;
  }

  .section-heading--center {
    margin-inline: auto;
    text-align: center;
  }

  .section-heading__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    padding: 7px 11px;
    background: $color-amber;
    box-shadow: 4px 4px 0 $color-ink;
    color: $color-ink;
    font-size: 0.88rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  .section-heading__eyebrow::before {
    width: 9px;
    height: 9px;
    border: 2px solid $color-ink;
    border-radius: 2px;
    background: $color-coral;
    box-shadow: 2px 2px 0 $color-ink;
    content: '';
  }

  .section-heading__title {
    margin-top: 18px;
    color: $color-ink;
    font-size: 3rem;
    line-height: 1.08;
  }

  .section-heading__text {
    margin-top: 16px;
    color: $color-muted;
    font-size: 1.08rem;
    text-shadow: 1px 1px 1px rgba($color-ink, 0.15);
  }

  @include respond(phone) {
    .section-heading__title {
      font-size: 2.2rem;
    }

    .section-heading__eyebrow {
      font-size: 0.78rem;
    }
  }
</style>
