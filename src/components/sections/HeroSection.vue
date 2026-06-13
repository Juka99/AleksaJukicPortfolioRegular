<template>
  <section
    id="top"
    ref="heroRef"
    class="hero"
    @pointerleave="resetPointerParallax"
    @pointermove="updatePointerParallax"
  >
    <div class="hero__inner">
      <div class="hero__content">
        <p class="hero__eyebrow">
          {{ profile.location }} based {{ profile.role }}
        </p>

        <h1 class="hero__title">
          <span class="hero__title-line">
            Hey, I'm <span>{{ profile.name }}.</span>
          </span>
          <span class="hero__title-line">
            I turn frontend ideas into little worlds.
          </span>
        </h1>

        <p class="hero__text">
          {{ profile.intro }}
        </p>

        <div class="hero__actions" aria-label="Primary links">
          <a class="hero__button hero__button--primary" href="#projects">
            See projects
          </a>
          <a class="hero__button" href="#about"> About me </a>
        </div>
      </div>

      <div class="hero__visual" aria-label="Dragon Quest inspired portrait">
        <div class="hero__parallax-layer hero__parallax-layer--back">
          <div class="hero__visual-panel hero__visual-panel--mint"></div>
        </div>

        <div class="hero__parallax-layer hero__parallax-layer--mid">
          <div class="hero__visual-panel hero__visual-panel--amber"></div>
        </div>

        <div class="hero__parallax-layer hero__parallax-layer--front">
          <img
            class="hero__image"
            :src="heroImage"
            alt="Dragon Quest inspired illustration of Alex holding a keyboard"
          />
        </div>

        <div class="hero__parallax-layer hero__parallax-layer--caption">
          <div class="hero__caption">
            <span class="hero__caption-kicker">Class</span>
            <strong class="hero__caption-title">Frontend Adventurer</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import {onBeforeUnmount, onMounted, ref} from 'vue';
  import heroImage from '@/assets/images/dragonQuestInspiredMeTransparent.png';

  defineProps({
    profile: {
      type: Object,
      required: true,
    },
  });

  const heroRef = ref(null);
  const targetParallax = {
    scroll: 0,
    x: 0,
    y: 0,
  };
  const currentParallax = {
    scroll: 0,
    x: 0,
    y: 0,
  };
  let animationFrameId = 0;

  const setHeroParallaxVars = () => {
    const hero = heroRef.value;

    if (!hero) {
      return;
    }

    hero.style.setProperty('--hero-parallax-x', currentParallax.x.toFixed(3));
    hero.style.setProperty('--hero-parallax-y', currentParallax.y.toFixed(3));
    hero.style.setProperty(
      '--hero-scroll-depth',
      currentParallax.scroll.toFixed(3),
    );
  };

  const animateParallax = () => {
    currentParallax.x += (targetParallax.x - currentParallax.x) * 0.075;
    currentParallax.y += (targetParallax.y - currentParallax.y) * 0.075;
    currentParallax.scroll +=
      (targetParallax.scroll - currentParallax.scroll) * 0.09;

    setHeroParallaxVars();
    animationFrameId = window.requestAnimationFrame(animateParallax);
  };

  const updatePointerParallax = event => {
    const hero = heroRef.value;

    if (!hero || event.pointerType === 'touch') {
      return;
    }

    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    targetParallax.x = Math.max(-0.5, Math.min(0.5, x));
    targetParallax.y = Math.max(-0.5, Math.min(0.5, y));
  };

  const resetPointerParallax = () => {
    targetParallax.x = 0;
    targetParallax.y = 0;
  };

  const updateScrollParallax = () => {
    const hero = heroRef.value;

    if (!hero) {
      return;
    }

    const progress = Math.min(
      1,
      Math.max(0, window.scrollY / hero.offsetHeight),
    );

    targetParallax.scroll = progress;
  };

  onMounted(() => {
    updateScrollParallax();
    setHeroParallaxVars();
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
  .hero {
    position: relative;
    display: grid;
    min-height: 100svh;
    overflow: hidden;
    background:
      linear-gradient(135deg, rgba($color-sky, 0.18), transparent 34%),
      linear-gradient(315deg, rgba($color-amber, 0.24), transparent 32%),
      $color-paper;
    color: $color-ink;
  }

  .hero::before {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(rgba($color-ink, 0.055) 2px, transparent 2px),
      linear-gradient(90deg, rgba($color-ink, 0.055) 2px, transparent 2px);
    background-size: 72px 72px;
    content: '';
    mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0.72), transparent);
    pointer-events: none;
    transform: translate3d(
      calc(var(--hero-parallax-x, 0) * -8px),
      calc(
        (var(--hero-parallax-y, 0) * -5px) +
          (var(--hero-scroll-depth, 0) * -8px)
      ),
      0
    );
    animation:
      hero-grid-enter 0.9s ease both,
      hero-grid-drift 12s linear 1s infinite;
  }

  .hero__inner {
    @include container;
    position: relative;
    z-index: 1;
    display: grid;
    min-height: 100svh;
    grid-template-columns: minmax(0, 1.08fr) minmax(390px, 0.92fr);
    align-items: center;
    gap: 42px;
    padding: 32px 0;
  }

  .hero__content {
    max-width: 680px;
  }

  .hero__eyebrow {
    display: inline-flex;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    padding: 8px 12px;
    background: $color-mint;
    box-shadow: 4px 4px 0 $color-ink;
    font-size: 0.86rem;
    font-weight: 900;
    text-transform: uppercase;
    animation: hero-copy-enter 0.62s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;
  }

  .hero__title {
    margin-top: 28px;
    font-size: 4.1rem;
    line-height: 1.04;
    animation: hero-copy-enter 0.72s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;
  }

  .hero__title-line {
    display: block;
  }

  .hero__title-line span {
    display: inline-block;
    color: $color-coral;
    text-shadow: 3px 3px 0 rgba($color-ink, 0.16);
    animation: hero-name-pop 0.7s cubic-bezier(0.2, 1.35, 0.32, 1) 0.58s both;
  }

  .hero__text {
    margin-top: 24px;
    max-width: 610px;
    color: $color-muted;
    font-size: 1.2rem;
    animation: hero-copy-enter 0.72s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
    text-shadow: 1px 1px 1px rgba($color-ink, 0.15);
  }

  .hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 34px;
    animation: hero-copy-enter 0.72s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both;
  }

  .hero__button {
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    padding: 13px 18px;
    background: $color-white;
    color: $color-ink;
    font-weight: 900;
    box-shadow: 4px 4px 0 $color-ink;
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease;
  }

  .hero__button--primary {
    background: $color-ink;
    color: $color-white;
  }

  .hero__button:hover {
    box-shadow: 2px 2px 0 $color-ink;
    transform: translate(2px, 2px);
  }

  .hero__visual {
    position: relative;
    display: grid;
    height: 100%;
    min-height: 0;
    align-self: stretch;
    place-items: center;
  }

  .hero__visual::before {
    position: absolute;
    right: 5%;
    bottom: 42px;
    width: 76%;
    height: 44px;
    border-radius: 50%;
    background: rgba($color-ink, 0.18);
    filter: blur(5px);
    content: '';
    opacity: 0;
    animation: hero-shadow-enter 0.7s ease 0.78s both;
  }

  .hero__parallax-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    will-change: transform;
  }

  .hero__parallax-layer--back {
    transform: translate3d(
      calc(var(--hero-parallax-x, 0) * -7px),
      calc(
        (var(--hero-parallax-y, 0) * -5px) +
          (var(--hero-scroll-depth, 0) * -8px)
      ),
      0
    );
  }

  .hero__parallax-layer--mid {
    transform: translate3d(
      calc(var(--hero-parallax-x, 0) * -4px),
      calc(
        (var(--hero-parallax-y, 0) * -3px) +
          (var(--hero-scroll-depth, 0) * -5px)
      ),
      0
    );
  }

  .hero__parallax-layer--front {
    display: grid;
    place-items: center;
    transform: translate3d(
      calc(var(--hero-parallax-x, 0) * 8px),
      calc(
        (var(--hero-parallax-y, 0) * 6px) +
          (var(--hero-scroll-depth, 0) * -10px)
      ),
      0
    );
  }

  .hero__parallax-layer--caption {
    transform: translate3d(
      calc(var(--hero-parallax-x, 0) * 11px),
      calc(
        (var(--hero-parallax-y, 0) * 8px) +
          (var(--hero-scroll-depth, 0) * -12px)
      ),
      0
    );
  }

  .hero__visual-panel {
    position: absolute;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    box-shadow: 8px 8px 0 $color-ink;
  }

  .hero__visual-panel--mint {
    top: 54px;
    right: 4%;
    width: 70%;
    height: 72%;
    background:
      linear-gradient(90deg, rgba($color-white, 0.22) 1px, transparent 1px),
      linear-gradient(rgba($color-white, 0.22) 1px, transparent 1px),
      $color-mint;
    background-size: 24px 24px;
    transform: rotate(4deg);
    animation: hero-panel-mint-enter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.24s
      both;
  }

  .hero__visual-panel--amber {
    right: 18%;
    bottom: 42px;
    width: 66%;
    height: 48%;
    background: $color-amber;
    transform: rotate(-5deg);
    animation: hero-panel-amber-enter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.34s
      both;
  }

  .hero__image {
    position: relative;
    z-index: 2;
    width: min(88%, 520px);
    max-height: calc(100svh - 168px);
    object-fit: contain;
    filter: drop-shadow(18px 18px 0 rgba($color-ink, 0.16));
    opacity: 0;
    animation:
      hero-character-enter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both,
      hero-character-float 4.8s ease-in-out 1.45s infinite;
  }

  .hero__caption {
    position: absolute;
    right: 0;
    bottom: 58px;
    z-index: 3;
    max-width: 260px;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    padding: 14px 16px;
    background: $color-white;
    box-shadow: 5px 5px 0 $color-ink;
    opacity: 0;
    animation: hero-caption-enter 0.62s cubic-bezier(0.2, 1.35, 0.32, 1) 0.9s
      both;
  }

  .hero__caption-kicker {
    display: block;
    color: $color-coral;
    font-size: 0.78rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  .hero__caption-title {
    display: block;
    margin-top: 2px;
    font-size: 1.05rem;
    line-height: 1.2;
  }

  @keyframes hero-grid-enter {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes hero-grid-drift {
    from {
      background-position: 0 0;
    }

    to {
      background-position: 72px 72px;
    }
  }

  @keyframes hero-copy-enter {
    from {
      opacity: 0;
      transform: translate3d(-28px, 16px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes hero-name-pop {
    from {
      transform: translateY(12px) scale(0.9);
    }

    to {
      transform: translateY(0) scale(1);
    }
  }

  @keyframes hero-panel-mint-enter {
    from {
      opacity: 0;
      transform: translate3d(48px, -36px, 0) rotate(11deg) scale(0.96);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotate(4deg) scale(1);
    }
  }

  @keyframes hero-panel-amber-enter {
    from {
      opacity: 0;
      transform: translate3d(-34px, 42px, 0) rotate(-13deg) scale(0.96);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotate(-5deg) scale(1);
    }
  }

  @keyframes hero-character-enter {
    from {
      opacity: 0;
      filter: drop-shadow(18px 18px 0 rgba($color-ink, 0)) blur(3px);
      transform: translate3d(22px, 46px, 0) scale(0.96);
    }

    to {
      opacity: 1;
      filter: drop-shadow(18px 18px 0 rgba($color-ink, 0.16)) blur(0);
      transform: translate3d(0, 0, 0) scale(1);
    }
  }

  @keyframes hero-character-float {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }

    50% {
      transform: translate3d(0, -10px, 0);
    }
  }

  @keyframes hero-shadow-enter {
    from {
      opacity: 0;
      transform: scaleX(0.72);
    }

    to {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  @keyframes hero-caption-enter {
    from {
      opacity: 0;
      transform: translate3d(18px, 20px, 0) rotate(2deg) scale(0.94);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotate(0) scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero::before,
    .hero__eyebrow,
    .hero__title,
    .hero__title span,
    .hero__text,
    .hero__actions,
    .hero__visual::before,
    .hero__visual-panel,
    .hero__image,
    .hero__caption {
      animation: none;
      opacity: 1;
    }

    .hero::before,
    .hero__parallax-layer {
      transform: none;
      transition: none;
    }

    .hero__image {
      transform: none;
    }
  }

  @media (max-width: 1050px) {
    .hero__inner {
      grid-template-columns: minmax(0, 1fr) minmax(320px, 0.86fr);
      gap: 28px;
    }

    .hero__title {
      font-size: 3.25rem;
    }

    .hero__text {
      font-size: 1.08rem;
    }

    .hero__image {
      width: min(92%, 430px);
      max-height: calc(100svh - 190px);
    }

    .hero__caption {
      right: -2px;
      bottom: 52px;
    }
  }

  @media (max-width: 760px) {
    .hero {
      min-height: auto;
    }

    .hero__inner {
      min-height: auto;
      grid-template-columns: 1fr;
      gap: 24px;
      padding: 64px 0 0;
    }

    .hero__visual {
      min-height: 570px;
      align-self: auto;
    }

    .hero__image {
      width: min(78%, 480px);
      max-height: 560px;
    }

    .hero__visual-panel {
      box-shadow: 8px 8px 0 $color-ink;
    }

    .hero__caption {
      display: block;
    }
  }

  @include respond(phone) {
    .hero {
      min-height: auto;
    }

    .hero__inner {
      padding-top: 44px;
    }

    .hero__title {
      font-size: 2.55rem;
    }

    .hero__text {
      font-size: 1.05rem;
    }

    .hero__visual {
      min-height: 470px;
      overflow: hidden;
    }

    .hero__visual-panel--mint {
      top: 54px;
      right: 10%;
      width: 76%;
      height: 70%;
    }

    .hero__visual-panel--amber {
      right: 20%;
      bottom: 28px;
      width: 66%;
      height: 44%;
    }

    .hero__image {
      width: min(94%, 390px);
      max-height: 460px;
    }

    .hero__caption {
      right: 8px;
      bottom: 42px;
      max-width: 210px;
    }
  }
</style>
