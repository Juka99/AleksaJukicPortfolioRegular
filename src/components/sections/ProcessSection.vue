<template>
  <section id="process" class="page-section process">
    <div class="page-section__inner process__inner">
      <SectionHeading
        align="center"
        eyebrow="Process"
        title="How I keep the fun parts usable."
        text="A little personality is great. A layout that works everywhere is better."
      />

      <div class="process__path">
        <ol class="process__steps">
          <li v-for="step in steps" :key="step.title" class="process__step">
            <span class="process__icon" aria-hidden="true">
              <i :class="step.icon"></i>
            </span>

            <div class="process__copy">
              <h3 class="process__title">{{ step.title }}</h3>
              <p class="process__text">{{ step.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
  import SectionHeading from '@/components/ui/SectionHeading.vue';

  defineProps({
    steps: {
      type: Array,
      required: true,
    },
  });
</script>

<style scoped lang="scss">
  .process {
    position: relative;
    background:
      linear-gradient(135deg, rgba($color-amber, 0.22), transparent 36%),
      linear-gradient(225deg, rgba($color-mint, 0.13), transparent 34%),
      $color-paper;
    overflow: hidden;
  }

  .process::before {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba($color-ink, 0.05) 1px, transparent 1px),
      linear-gradient(rgba($color-ink, 0.05) 1px, transparent 1px);
    background-size: 54px 54px;
    content: '';
    pointer-events: none;
    animation: process-grid-breathe 14s linear infinite;
  }

  .process__inner {
    position: relative;
    z-index: 1;
  }

  .process__path {
    position: relative;
    margin-top: 52px;
  }

  .process__steps {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
    list-style: none;
    padding: 0;
  }

  .process__step {
    position: relative;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 18px;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    padding: 26px;
    background: rgba($color-white, 0.86);
    box-shadow: 7px 7px 0 $color-ink;
  }

  .process__step::after {
    position: absolute;
    top: 50%;
    right: -22px;
    z-index: -1;
    width: 22px;
    height: 3px;
    background: $color-ink;
    content: '';
  }

  .process__step:last-child::after {
    display: none;
  }

  .process__icon {
    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    background: $color-mint;
    color: $color-ink;
    font-size: 1.2rem;
    font-weight: 900;
    box-shadow: 3px 3px 0 $color-ink;
  }

  .process__step:nth-child(2) .process__icon {
    background: $color-sky;
  }

  .process__step:nth-child(3) .process__icon {
    background: $color-coral;
    color: $color-white;
  }

  .process__title {
    font-size: 1.25rem;
  }

  .process__text {
    margin-top: 10px;
    color: $color-muted;
    text-shadow: 1px 1px 1px rgba($color-ink, 0.15);
  }

  @keyframes process-grid-breathe {
    from {
      background-position: 0 0;
    }

    to {
      background-position: 54px 54px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .process::before {
      animation: none;
    }
  }

  @include respond(tablet) {
    .process__steps {
      grid-template-columns: 1fr;
    }

    .process__step::after {
      top: auto;
      right: auto;
      bottom: -22px;
      left: 49px;
      width: 3px;
      height: 22px;
    }
  }

  @include respond(phone) {
    .process__step {
      grid-template-columns: 1fr;
    }

    .process__step::after {
      left: 48px;
    }
  }
</style>
