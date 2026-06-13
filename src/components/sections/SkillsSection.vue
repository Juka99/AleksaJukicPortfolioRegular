<template>
  <section id="skills" class="page-section skills">
    <div class="page-section__inner skills__inner">
      <div class="skills__header">
        <SectionHeading
          eyebrow="Skills"
          :title="'My everexpanding toolkit\u00a0🧰'"
          text=""
        />

        <div class="skills__header-extras">
          <aside class="skills__award" aria-label="Award badge">
            <span class="skills__award-ribbon" aria-hidden="true">
              <i class="fa-solid fa-award"></i>
            </span>

            <span class="skills__award-copy">
              <span class="skills__award-kicker">Officially certified</span>
              <strong class="skills__award-title">
                Biggest frontend nerd of the year
              </strong>
            </span>
          </aside>
        </div>
      </div>

      <div class="skills__groups">
        <article
          v-for="(group, groupIndex) in skills"
          :key="group.group"
          class="skills__group"
        >
          <div class="skills__group-head">
            <span class="skills__group-icon" aria-hidden="true">
              {{ groupIndex + 1 }}
            </span>
            <h3 class="skills__group-title">{{ group.group }}</h3>
          </div>

          <ul class="skills__list">
            <li v-for="item in group.items" :key="item" class="skills__item">
              <span class="skills__item-dot" aria-hidden="true"></span>
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
  import SectionHeading from '@/components/ui/SectionHeading.vue';

  defineProps({
    skills: {
      type: Array,
      required: true,
    },
  });
</script>

<style scoped lang="scss">
  .skills {
    position: relative;
    background:
      linear-gradient(135deg, rgba($color-coral, 0.08), transparent 30%),
      linear-gradient(225deg, rgba($color-sky, 0.14), transparent 28%),
      $color-white;
    overflow: hidden;
  }

  .skills::before {
    position: absolute;
    left: -80px;
    bottom: 52px;
    width: 300px;
    height: 300px;
    border: 2px solid rgba($color-ink, 0.08);
    background:
      linear-gradient(90deg, rgba($color-ink, 0.06) 1px, transparent 1px),
      linear-gradient(rgba($color-ink, 0.06) 1px, transparent 1px);
    background-size: 28px 28px;
    content: '';
    pointer-events: none;
    transform: rotate(-8deg);
  }

  .skills::after {
    position: absolute;
    top: 44px;
    right: -74px;
    width: 250px;
    height: 210px;
    border: 2px solid rgba($color-ink, 0.1);
    border-radius: 28px 0 0 28px;
    background:
      linear-gradient(90deg, rgba($color-white, 0.24) 1px, transparent 1px),
      linear-gradient(rgba($color-white, 0.24) 1px, transparent 1px),
      linear-gradient(135deg, rgba($color-sky, 0.72), rgba($color-mint, 0.62));
    background-size:
      24px 24px,
      24px 24px,
      auto;
    box-shadow: -12px 12px 0 rgba($color-ink, 0.07);
    content: '';
    opacity: 0.8;
    pointer-events: none;
    transform: rotate(7deg);
  }

  .skills__inner {
    position: relative;
    z-index: 1;
  }

  .skills__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 28px;
  }

  .skills__header-extras {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 20px;
  }

  .skills__mascot {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    margin: 0;
    padding-top: 4px;
  }

  .skills__mascot-bubble {
    position: relative;
    max-width: 220px;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    padding: 12px 14px;
    background: $color-white;
    box-shadow: 4px 4px 0 $color-ink;
    color: $color-ink;
    font-size: 0.86rem;
    font-weight: 900;
    line-height: 1.18;
    transform: rotate(-2deg);
  }

  .skills__mascot-bubble::after {
    position: absolute;
    right: -9px;
    bottom: 18px;
    width: 16px;
    height: 16px;
    border-right: 2px solid $color-ink;
    border-bottom: 2px solid $color-ink;
    background: $color-white;
    content: '';
    transform: rotate(-45deg);
  }

  .skills__mascot-image {
    width: 92px;
    max-width: none;
    flex: 0 0 auto;
    filter: drop-shadow(7px 8px 0 rgba($color-ink, 0.16));
  }

  .skills__award {
    position: relative;
    display: grid;
    width: 286px;
    flex: 0 0 286px;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 12px;
    align-items: center;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    padding: 14px;
    background:
      linear-gradient(135deg, rgba($color-white, 0.5), transparent 48%),
      $color-amber;
    box-shadow: 6px 6px 0 $color-ink;
    transform: rotate(2deg);
  }

  .skills__award::before,
  .skills__award::after {
    position: absolute;
    bottom: -17px;
    width: 18px;
    height: 24px;
    border: 2px solid $color-ink;
    border-top: 0;
    background: $color-coral;
    content: '';
  }

  .skills__award::before {
    left: 34px;
    transform: skewX(-14deg);
  }

  .skills__award::after {
    left: 53px;
    background: $color-sky;
    transform: skewX(14deg);
  }

  .skills__award-ribbon {
    position: relative;
    z-index: 1;
    display: grid;
    width: 50px;
    height: 50px;
    place-items: center;
    border: 2px solid $color-ink;
    border-radius: 50%;
    background: $color-ink;
    color: $color-amber;
    font-size: 1.45rem;
    box-shadow: 3px 3px 0 rgba($color-ink, 0.28);
  }

  .skills__award-copy {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 3px;
  }

  .skills__award-kicker {
    color: rgba($color-ink, 0.68);
    font-size: 0.7rem;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
  }

  .skills__award-title {
    color: $color-ink;
    font-size: 1.02rem;
    line-height: 1.12;
  }

  .skills__groups {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    margin-top: 48px;
  }

  .skills__group {
    position: relative;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    padding: 26px;
    background:
      linear-gradient(
        180deg,
        rgba($color-white, 0.94),
        rgba($color-surface-soft, 0.9)
      ),
      $color-surface;
    box-shadow: 7px 7px 0 $color-ink;
    overflow: hidden;
  }

  .skills__group::before {
    position: absolute;
    inset: 0 0 auto;
    height: 8px;
    background: $color-mint;
    content: '';
  }

  .skills__group:nth-child(2)::before {
    background: $color-sky;
  }

  .skills__group:nth-child(3)::before {
    background: $color-amber;
  }

  .skills__group-head {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .skills__group-icon {
    display: grid;
    width: 40px;
    height: 40px;
    place-items: center;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    background: $color-coral;
    color: $color-white;
    font-weight: 900;
    box-shadow: 3px 3px 0 $color-ink;
  }

  .skills__group-title {
    font-size: 1.25rem;
  }

  .skills__list {
    display: grid;
    gap: 10px;
    margin-top: 22px;
  }

  .skills__item {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid rgba($color-ink, 0.12);
    border-radius: $radius-sm;
    padding: 10px 12px;
    background: rgba($color-white, 0.72);
    color: $color-ink;
    font-size: 0.92rem;
    font-weight: 800;
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
  }

  .skills__item:hover {
    background: $color-white;
    transform: translateX(4px);
  }

  .skills__item-dot {
    width: 9px;
    height: 9px;
    border: 2px solid $color-ink;
    border-radius: 2px;
    background: $color-mint;
    box-shadow: 2px 2px 0 $color-ink;
  }

  .skills__group:nth-child(2) .skills__item-dot {
    background: $color-sky;
  }

  .skills__group:nth-child(3) .skills__item-dot {
    background: $color-amber;
  }

  @include respond(tablet) {
    .skills__header {
      display: grid;
      gap: 24px;
    }

    .skills__header-extras {
      justify-content: flex-start;
      margin-top: 4px;
    }

    .skills__groups {
      grid-template-columns: 1fr;
    }
  }

  @include respond(phone) {
    .skills__header-extras {
      display: grid;
      gap: 20px;
    }

    .skills__mascot {
      margin-top: 0;
    }

    .skills__award {
      width: min(100%, 286px);
      flex-basis: auto;
      margin-top: 0;
    }

    .skills__mascot-image {
      width: 82px;
    }
  }
</style>
