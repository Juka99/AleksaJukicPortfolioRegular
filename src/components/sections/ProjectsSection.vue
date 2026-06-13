<template>
  <section id="projects" class="page-section projects">
    <div class="page-section__inner projects__inner">
      <SectionHeading
        align="center"
        eyebrow="Projects"
        title="Things I'm proud of"
        text="that somehow managed to escape from my localhost."
      />

      <div class="projects__map">
        <div class="projects__map-line" aria-hidden="true"></div>

        <div class="projects__grid">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :project="project"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import ProjectCard from '@/components/ui/ProjectCard.vue';
  import SectionHeading from '@/components/ui/SectionHeading.vue';

  defineProps({
    projects: {
      type: Array,
      required: true,
    },
  });
</script>

<style scoped lang="scss">
  .projects {
    position: relative;
    background:
      linear-gradient(180deg, $color-surface-soft, rgba($color-amber, 0.12)),
      $color-surface-soft;
    overflow: hidden;
  }

  .projects::before {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba($color-ink, 0.055) 1px, transparent 1px),
      linear-gradient(rgba($color-ink, 0.055) 1px, transparent 1px);
    background-size: 42px 42px;
    content: '';
    mask-image: linear-gradient(
      180deg,
      transparent,
      #000 18%,
      #000 82%,
      transparent
    );
    pointer-events: none;
    animation: projects-grid-breathe 12s linear infinite;
  }

  .projects__inner {
    position: relative;
    z-index: 1;
  }

  .projects__map {
    position: relative;
    margin-top: 52px;
  }

  .projects__grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
  }

  .projects__map-line {
    position: absolute;
    inset: 9% 50% 9% auto;
    width: 3px;
    border-radius: 999px;
    background: linear-gradient(
      $color-mint,
      $color-sky,
      $color-coral,
      $color-amber
    );
    box-shadow: 0 0 0 3px rgba($color-white, 0.75);
  }

  @keyframes projects-grid-breathe {
    from {
      background-position: 0 0;
    }

    to {
      background-position: 42px 42px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .projects::before {
      animation: none;
    }
  }

  @include respond(tablet) {
    .projects__grid {
      grid-template-columns: 1fr;
    }

    .projects__map-line {
      display: none;
    }
  }
</style>
