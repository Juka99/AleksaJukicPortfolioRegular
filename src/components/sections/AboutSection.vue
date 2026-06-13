<template>
  <section id="about" ref="aboutRef" class="page-section about">
    <div class="page-section__inner about__inner">
      <SectionHeading
        eyebrow="About"
        title="Best button aligner in the business (me)."
        text=""
      />

      <div class="about__layout">
        <div class="about__copy-card">
          <div class="about__achievement">
            <span class="about__achievement-icon" aria-hidden="true">
              <i class="fa-solid fa-trophy"></i>
            </span>

            <span class="about__achievement-copy">
              <span class="about__achievement-kicker">
                Achievement unlocked
              </span>
              <strong class="about__achievement-title">
                Talk about yourself
              </strong>
            </span>
          </div>

          <div class="about__copy">
            <p>
              My name is {{ profile.fullName }}, and I am a frontend developer
              from {{ profile.location }}. I enjoy building things that are easy
              to use, easy to maintain, and hopefully a little fun to interact
              with.
            </p>
            <p>
              I like interfaces with personality, but I care just as much about
              the less exciting stuff behind them: structure, responsiveness,
              naming things properly, and all the tiny details that make
              everything feel polished.
            </p>
          </div>

          <!-- <div class="about__signature">
            <span class="about__signature-mark">AJ</span>
            <span class="about__signature-text"
              >Pixel energy. Production discipline.</span
            >
          </div> -->
        </div>

        <div class="about__side">
          <figure class="about__portrait-card">
            <div class="about__portrait-wrap">
              <div class="about__portrait-frame">
                <img
                  class="about__portrait"
                  :src="portraitImage"
                  alt="Aleksa Jukić smiling"
                />
              </div>

              <figcaption class="about__portrait-callout">
                Hey look, it's me!
              </figcaption>
            </div>
          </figure>
        </div>
      </div>

      <ul class="about__principles">
        <li
          v-for="principle in principles"
          :key="principle.title"
          class="about__principle"
        >
          <span class="about__principle-icon" aria-hidden="true">
            <i :class="principle.icon"></i>
          </span>

          <h3 class="about__principle-title">{{ principle.title }}</h3>
          <p class="about__principle-text">{{ principle.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
  import {onBeforeUnmount, onMounted, ref} from 'vue';
  import SectionHeading from '@/components/ui/SectionHeading.vue';
  import portraitImage from '@/assets/images/aleksaJukic.jpg';

  defineProps({
    profile: {
      type: Object,
      required: true,
    },
    principles: {
      type: Array,
      required: true,
    },
  });

  const aboutRef = ref(null);
  const targetParallax = {
    scroll: 0,
  };
  const currentParallax = {
    scroll: 0,
  };
  let animationFrameId = 0;

  const setAboutParallaxVars = () => {
    const about = aboutRef.value;

    if (!about) {
      return;
    }

    about.style.setProperty(
      '--about-scroll-depth',
      currentParallax.scroll.toFixed(3),
    );
  };

  const animateParallax = () => {
    currentParallax.scroll +=
      (targetParallax.scroll - currentParallax.scroll) * 0.08;

    setAboutParallaxVars();
    animationFrameId = window.requestAnimationFrame(animateParallax);
  };

  const updateScrollParallax = () => {
    const about = aboutRef.value;

    if (!about) {
      return;
    }

    const rect = about.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const visibleProgress =
      (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const progress = visibleProgress * 2 - 1;

    targetParallax.scroll = Math.max(-1, Math.min(1, progress));
  };

  onMounted(() => {
    updateScrollParallax();
    setAboutParallaxVars();
    animationFrameId = window.requestAnimationFrame(animateParallax);
    window.addEventListener('scroll', updateScrollParallax, {passive: true});
    window.addEventListener('resize', updateScrollParallax);
  });

  onBeforeUnmount(() => {
    window.cancelAnimationFrame(animationFrameId);
    window.removeEventListener('scroll', updateScrollParallax);
    window.removeEventListener('resize', updateScrollParallax);
  });
</script>

<style scoped lang="scss">
  .about {
    position: relative;
    background:
      linear-gradient(90deg, rgba($color-mint, 0.1), transparent 34%),
      $color-white;
    overflow: hidden;
  }

  .about::before {
    position: absolute;
    top: 70px;
    right: -120px;
    width: 420px;
    height: 420px;
    border: 2px solid rgba($color-ink, 0.08);
    background:
      linear-gradient(90deg, rgba($color-ink, 0.06) 1px, transparent 1px),
      linear-gradient(rgba($color-ink, 0.06) 1px, transparent 1px);
    background-size: 30px 30px;
    content: '';
    pointer-events: none;
    transform: translate3d(
        calc(var(--about-scroll-depth, 0) * -16px),
        calc(var(--about-scroll-depth, 0) * -24px),
        0
      )
      rotate(9deg);
  }

  .about::after {
    position: absolute;
    left: -86px;
    bottom: 58px;
    width: 260px;
    height: 180px;
    border: 2px solid rgba($color-ink, 0.1);
    border-radius: $radius-md;
    background:
      linear-gradient(90deg, rgba($color-white, 0.3) 1px, transparent 1px),
      linear-gradient(rgba($color-white, 0.3) 1px, transparent 1px),
      linear-gradient(135deg, rgba($color-coral, 0.86), rgba($color-amber, 0.7));
    background-size:
      22px 22px,
      22px 22px,
      auto;
    box-shadow: 12px 12px 0 rgba($color-ink, 0.08);
    content: '';
    opacity: 0.78;
    pointer-events: none;
    transform: translate3d(
        calc(var(--about-scroll-depth, 0) * 20px),
        calc(var(--about-scroll-depth, 0) * 28px),
        0
      )
      rotate(-8deg);
  }

  .about__inner {
    position: relative;
    z-index: 1;
  }

  .about__layout {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
    gap: 42px;
    margin-top: 48px;
  }

  .about__copy-card {
    position: relative;
    align-self: start;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    padding: 34px;
    background:
      linear-gradient(
        135deg,
        rgba($color-white, 0.97),
        rgba($color-surface-soft, 0.9)
      ),
      $color-white;
    box-shadow: 8px 8px 0 $color-ink;
  }

  .about__copy-card::after {
    position: absolute;
    right: 22px;
    bottom: 22px;
    width: 56px;
    height: 56px;
    border-right: 3px solid rgba($color-coral, 0.7);
    border-bottom: 3px solid rgba($color-coral, 0.7);
    content: '';
  }

  .about__achievement {
    display: inline-flex;
    position: relative;
    align-items: center;
    gap: 12px;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    padding: 9px 12px 10px 10px;
    background:
      linear-gradient(135deg, rgba($color-white, 0.42), transparent 54%),
      $color-amber;
    box-shadow: 4px 4px 0 $color-ink;
    overflow: hidden;
  }

  .about__achievement::after {
    position: absolute;
    inset: 5px 8px auto auto;
    width: 28px;
    height: 4px;
    border-radius: 999px;
    background: rgba($color-white, 0.58);
    content: '';
    transform: rotate(-18deg);
  }

  .about__achievement-icon {
    display: grid;
    width: 38px;
    height: 38px;
    flex: 0 0 auto;
    place-items: center;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    background: $color-ink;
    color: $color-amber;
    font-size: 1.05rem;
    box-shadow: 3px 3px 0 rgba($color-ink, 0.32);
  }

  .about__achievement-copy {
    display: grid;
    gap: 1px;
  }

  .about__achievement-kicker {
    color: rgba($color-ink, 0.7);
    font-size: 0.68rem;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 1;
    text-transform: uppercase;
  }

  .about__achievement-title {
    color: $color-ink;
    font-size: 0.98rem;
    line-height: 1.1;
  }

  .about__copy {
    display: grid;
    gap: 20px;
    margin-top: 22px;
    color: $color-muted;
    font-size: 1.08rem;
    text-shadow: 1px 1px 1px rgba($color-ink, 0.15);
  }

  .about__copy p {
    max-width: 650px;
  }

  .about__side {
    display: grid;
    gap: 18px;
  }

  .about__portrait-card {
    position: relative;
    display: grid;
    min-height: 330px;
    align-items: end;
    margin: 0;
  }

  .about__portrait-wrap {
    position: relative;
    width: min(72%, 360px);
    margin-left: auto;
  }

  .about__portrait-frame {
    position: relative;
    width: 100%;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    padding: 10px;
    background: $color-white;
    box-shadow: 8px 8px 0 $color-ink;
    transform: translate3d(
        calc(var(--about-scroll-depth, 0) * 26px),
        calc(var(--about-scroll-depth, 0) * -48px),
        0
      )
      rotate(3deg);
    will-change: transform;
  }

  .about__portrait-frame::before {
    position: absolute;
    inset: -18px auto auto -18px;
    z-index: -1;
    width: 72%;
    height: 72%;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    background:
      linear-gradient(90deg, rgba($color-white, 0.22) 1px, transparent 1px),
      linear-gradient(rgba($color-white, 0.22) 1px, transparent 1px),
      $color-mint;
    background-size: 18px 18px;
    content: '';
    transform: translate3d(
        calc(var(--about-scroll-depth, 0) * -42px),
        calc(var(--about-scroll-depth, 0) * -68px),
        0
      )
      rotate(-8deg);
    will-change: transform;
  }

  .about__portrait {
    width: 100%;
    border-radius: calc($radius-md - 2px);
    object-fit: cover;
    object-position: 50% 48%;
  }

  .about__portrait-callout {
    position: absolute;
    top: 9%;
    right: calc(100% - 50px);
    width: max-content;
    max-width: 260px;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    padding: 12px 14px;
    background: $color-amber;
    box-shadow: 5px 5px 0 $color-ink;
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.2;
    transform: translate3d(
        calc(var(--about-scroll-depth, 0) * -36px),
        calc(var(--about-scroll-depth, 0) * -78px),
        0
      )
      rotate(-4deg);
    will-change: transform;
  }

  .about__principles {
    display: grid;
    width: min(100%, 760px);
    gap: 16px;
    margin: 46px auto 0;
  }

  .about__principle {
    position: relative;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    padding: 24px;
    padding-left: 86px;
    background: rgba($color-white, 0.84);
    box-shadow: 5px 5px 0 rgba($color-ink, 0.86);
    backdrop-filter: blur(14px);
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease;
  }

  .about__principle:nth-child(1) {
    justify-self: start;
    width: min(100%, 620px);
  }

  .about__principle:nth-child(2) {
    justify-self: center;
    width: min(100%, 620px);
  }

  .about__principle:nth-child(3) {
    justify-self: end;
    width: min(100%, 620px);
  }

  .about__principle:hover {
    box-shadow: 2px 2px 0 rgba($color-ink, 0.86);
    transform: translate(3px, 3px);
  }

  .about__principle-icon {
    position: absolute;
    top: 22px;
    left: 24px;
    display: grid;
    width: 38px;
    height: 38px;
    place-items: center;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    background: $color-amber;
    box-shadow: 3px 3px 0 $color-ink;
    color: $color-ink;
    font-size: 1rem;
    font-weight: 900;
  }

  .about__principle:nth-child(2) .about__principle-icon {
    background: $color-sky;
  }

  .about__principle:nth-child(3) .about__principle-icon {
    background: $color-mint;
  }

  .about__principle-title {
    font-size: 1.2rem;
  }

  .about__principle-text {
    margin-top: 8px;
    color: $color-muted;
    text-shadow: 1px 1px 1px rgba($color-ink, 0.15);
  }

  .about__signature {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 28px;
  }

  .about__signature-mark {
    display: grid;
    width: 42px;
    height: 42px;
    place-items: center;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    background: $color-coral;
    color: $color-white;
    font-weight: 900;
    box-shadow: 3px 3px 0 $color-ink;
  }

  .about__signature-text {
    color: $color-ink;
    font-weight: 900;
  }

  @media (prefers-reduced-motion: reduce) {
    .about::before {
      transform: rotate(9deg);
    }

    .about::after {
      transform: rotate(-8deg);
    }

    .about__portrait-frame {
      transform: rotate(3deg);
    }

    .about__portrait-frame::before {
      transform: rotate(-8deg);
    }

    .about__portrait-callout {
      transform: rotate(-4deg);
    }
  }

  @include respond(tablet) {
    .about__layout {
      grid-template-columns: 1fr;
    }

    .about__portrait-card {
      min-height: 300px;
    }

    .about__portrait-wrap {
      width: min(54%, 320px);
      margin: 0 auto;
    }

    .about__principles {
      width: min(100%, 700px);
    }
  }

  @include respond(phone) {
    .about__copy-card {
      padding: 26px;
    }

    .about__achievement {
      align-items: center;
    }

    .about__achievement-title {
      font-size: 0.92rem;
    }

    .about__principle {
      justify-self: stretch;
      width: auto;
      padding: 22px;
      padding-left: 74px;
    }

    .about__principle:nth-child(1),
    .about__principle:nth-child(2),
    .about__principle:nth-child(3) {
      justify-self: stretch;
      width: auto;
    }

    .about__principle-icon {
      left: 20px;
    }

    .about__portrait-card {
      min-height: auto;
      padding-top: 74px;
    }

    .about__portrait-wrap {
      width: min(82%, 320px);
      margin-inline: auto;
    }

    .about__portrait-callout {
      top: -15px;
      right: auto;
      left: 0;
      width: auto;
      max-width: 190px;
      font-size: 0.94rem;
    }
  }
</style>
