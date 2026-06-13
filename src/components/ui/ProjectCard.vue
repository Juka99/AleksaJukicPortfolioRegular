<template>
  <article class="project-card" :class="`project-card--${project.accent}`">
    <span class="project-card__corner" aria-hidden="true"></span>

    <div class="project-card__topline">
      <span class="project-card__type">{{ project.type }}</span>
      <span class="project-card__marker" aria-hidden="true"></span>
    </div>

    <h3 class="project-card__title">{{ project.title }}</h3>
    <p class="project-card__description">{{ project.description }}</p>

    <ul class="project-card__tags" aria-label="Technologies">
      <li v-for="tag in project.tags" :key="tag" class="project-card__tag">
        {{ tag }}
      </li>
    </ul>

    <div class="project-card__actions">
      <a
        class="project-card__link project-card__link--primary"
        :href="project.liveUrl"
        target="_blank"
        rel="noreferrer"
      >
        View site
      </a>
      <a
        class="project-card__link"
        :href="project.codeUrl"
        target="_blank"
        rel="noreferrer"
      >
        View code
      </a>
    </div>
  </article>
</template>

<script setup>
  defineProps({
    project: {
      type: Object,
      required: true,
    },
  });
</script>

<style scoped lang="scss">
  .project-card {
    position: relative;
    display: flex;
    min-height: 360px;
    flex-direction: column;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    padding: 28px;
    background:
      linear-gradient(
        135deg,
        rgba($color-white, 0.96),
        rgba($color-surface-soft, 0.92)
      ),
      $color-surface;
    box-shadow: 7px 7px 0 $color-ink;
    overflow: hidden;
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease;
  }

  .project-card::before {
    position: absolute;
    inset: 0 0 auto;
    height: 9px;
    background: $color-mint;
    content: '';
  }

  .project-card::after {
    position: absolute;
    right: 26px;
    bottom: 24px;
    width: 120px;
    height: 120px;
    border: 2px solid rgba($color-ink, 0.12);
    background:
      linear-gradient(90deg, rgba($color-ink, 0.08) 1px, transparent 1px),
      linear-gradient(rgba($color-ink, 0.08) 1px, transparent 1px);
    background-size: 20px 20px;
    content: '';
    opacity: 0.6;
    pointer-events: none;
    transform: rotate(8deg);
  }

  .project-card:hover {
    box-shadow: 3px 3px 0 $color-ink;
    transform: translate(4px, 4px);
  }

  .project-card--coral::before {
    background: $color-coral;
  }

  .project-card--sky::before {
    background: $color-sky;
  }

  .project-card--amber::before {
    background: $color-amber;
  }

  .project-card__topline {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .project-card__type {
    border: 1px solid $color-border;
    border-radius: 999px;
    padding: 5px 9px;
    background: rgba($color-white, 0.76);
    color: $color-muted;
    font-size: 0.86rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  .project-card__marker {
    width: 18px;
    height: 18px;
    border: 2px solid $color-ink;
    background: currentColor;
    color: $color-mint;
    box-shadow: 5px 5px 0 $color-ink;
  }

  .project-card__corner {
    position: absolute;
    top: 22px;
    right: 22px;
    width: 52px;
    height: 52px;
    border-top: 3px solid rgba($color-ink, 0.2);
    border-right: 3px solid rgba($color-ink, 0.2);
    pointer-events: none;
  }

  .project-card--coral .project-card__marker {
    color: $color-coral;
  }

  .project-card--sky .project-card__marker {
    color: $color-sky;
  }

  .project-card--amber .project-card__marker {
    color: $color-amber;
  }

  .project-card__title {
    position: relative;
    z-index: 1;
    margin-top: 42px;
    font-size: 2rem;
    line-height: 1.1;
  }

  .project-card__description {
    position: relative;
    z-index: 1;
    margin-top: 18px;
    color: $color-muted;
    text-shadow: 1px 1px 1px rgba($color-ink, 0.15);
  }

  .project-card__tags {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 24px;
  }

  .project-card__tag {
    border: 1px solid rgba($color-ink, 0.14);
    border-radius: 999px;
    padding: 6px 10px;
    background: $color-surface-soft;
    font-size: 0.86rem;
    font-weight: 800;
  }

  .project-card__actions {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: auto;
    padding-top: 28px;
  }

  .project-card__link {
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    padding: 10px 14px;
    font-weight: 900;
    box-shadow: 3px 3px 0 $color-ink;
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease;
  }

  .project-card__link--primary {
    background: $color-ink;
    color: $color-white;
  }

  .project-card__link:hover {
    box-shadow: 1px 1px 0 $color-ink;
    transform: translate(2px, 2px);
  }

  @include respond(phone) {
    .project-card {
      min-height: auto;
      padding: 24px;
    }
  }
</style>
