<template>
  <section id="contact" class="page-section contact">
    <div class="page-section__inner contact__inner">
      <span
        class="contact__spark contact__spark--one"
        aria-hidden="true"
      ></span>
      <span
        class="contact__spark contact__spark--two"
        aria-hidden="true"
      ></span>

      <div class="contact__content">
        <p class="contact__eyebrow">Contact</p>
        <h2 class="contact__title">
          Want to build something with a little soul?
        </h2>
        <p class="contact__text">
          Send a message, check the code, or just look around!
        </p>
      </div>

      <div class="contact__actions">
        <div class="contact__email-wrap">
          <Transition name="contact-notice">
            <p v-if="copyMessage" class="contact__notice" aria-live="polite">
              {{ copyMessage }}
            </p>
          </Transition>

          <button
            type="button"
            class="contact__button contact__button--primary"
            @click="copyEmail"
          >
            <i class="fa-solid fa-copy" aria-hidden="true"></i>
            <span>My email</span>
          </button>
        </div>

        <a
          class="contact__button"
          :href="profile.github"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github" aria-hidden="true"></i>
          <span>GitHub</span>
        </a>
      </div>

      <figure class="contact__mascot">
        <img
          class="contact__mascot-image"
          :src="sittingCharacter"
          alt="Sitting Dragon Quest inspired Aleksa character"
        />

        <figcaption class="contact__bubble">
          See? I'm even coding inside my own portfolio's contact section!
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
  import {onBeforeUnmount, ref} from 'vue';
  import sittingCharacter from '@/assets/images/dragonQuestInspiredMeSitTransparent.png';

  const props = defineProps({
    profile: {
      type: Object,
      required: true,
    },
  });

  const copyMessage = ref('');
  let copyTimeoutId = 0;

  const fallbackCopyEmail = async () => {
    const textArea = document.createElement('textarea');

    textArea.value = props.profile.email;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.top = '-999px';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const copyEmail = async () => {
    window.clearTimeout(copyTimeoutId);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(props.profile.email);
      } else {
        await fallbackCopyEmail();
      }

      copyMessage.value = 'Email copied. Smooth.';
    } catch {
      copyMessage.value = 'Could not copy. Use the email app link below.';
    }

    copyTimeoutId = window.setTimeout(() => {
      copyMessage.value = '';
    }, 2600);
  };

  onBeforeUnmount(() => {
    window.clearTimeout(copyTimeoutId);
  });
</script>

<style scoped lang="scss">
  .contact {
    background:
      linear-gradient(180deg, $color-white, rgba($color-sky, 0.12)),
      $color-white;
  }

  .contact__inner {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 42px;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    padding: 44px;
    background:
      linear-gradient(135deg, rgba($color-amber, 0.94), rgba($color-mint, 0.5)),
      $color-amber;
    box-shadow: 10px 10px 0 $color-ink;
    overflow: hidden;
  }

  .contact__inner::before {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba($color-white, 0.22) 1px, transparent 1px),
      linear-gradient(rgba($color-white, 0.2) 1px, transparent 1px);
    background-size: 26px 26px;
    content: '';
    pointer-events: none;
  }

  .contact__content,
  .contact__actions,
  .contact__mascot {
    position: relative;
    z-index: 1;
  }

  .contact__spark {
    position: absolute;
    z-index: 0;
    width: 68px;
    height: 68px;
    border: 2px solid $color-ink;
    background: $color-white;
    box-shadow: 5px 5px 0 $color-ink;
    transform: rotate(12deg);
  }

  .contact__spark--one {
    top: 28px;
    right: 38%;
  }

  .contact__spark--two {
    right: 32px;
    bottom: 28px;
    width: 42px;
    height: 42px;
    background: $color-coral;
    transform: rotate(-10deg);
  }

  .contact__eyebrow {
    display: inline-flex;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    padding: 6px 10px;
    background: $color-white;
    box-shadow: 3px 3px 0 $color-ink;
    font-size: 0.88rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  .contact__title {
    max-width: 680px;
    margin-top: 8px;
    font-size: 2.7rem;
    line-height: 1.1;
  }

  .contact__text {
    max-width: 660px;
    margin-top: 16px;
    color: rgba($color-ink, 0.78);
    text-shadow: 1px 1px 1px rgba($color-ink, 0.15);
  }

  .contact__actions {
    display: grid;
    width: min(100%, 300px);
    min-width: 0;
    gap: 10px;
  }

  .contact__email-wrap {
    position: relative;
    min-width: 0;
  }

  .contact__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 270px;
    gap: 8px;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    padding: 12px 16px;
    background: $color-white;
    font-weight: 900;
    text-align: center;
    box-shadow: 3px 3px 0 $color-ink;
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease;
    cursor: pointer;
  }

  .contact__button span {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  .contact__button--primary {
    background: $color-ink;
    color: $color-white;
  }

  .contact__button:hover {
    box-shadow: 1px 1px 0 $color-ink;
    transform: translate(2px, 2px);
  }

  .contact__notice {
    position: absolute;
    right: 16px;
    bottom: calc(100% + 12px);
    z-index: 2;
    border: 2px solid $color-ink;
    border-radius: $radius-sm;
    padding: 8px 11px;
    background: $color-white;
    box-shadow: 4px 4px 0 $color-ink;
    color: $color-ink;
    font-size: 0.82rem;
    font-weight: 900;
    line-height: 1;
    white-space: nowrap;
    transform: translate3d(0, 0, 0) scale(1) rotate(-2deg);
    pointer-events: none;
  }

  .contact__notice::after {
    position: absolute;
    right: 22px;
    bottom: -8px;
    width: 14px;
    height: 14px;
    border-right: 2px solid $color-ink;
    border-bottom: 2px solid $color-ink;
    background: $color-white;
    content: '';
    transform: rotate(45deg);
  }

  .contact-notice-enter-active {
    transition:
      opacity 0.22s ease,
      transform 0.28s cubic-bezier(0.2, 1.35, 0.32, 1);
  }

  .contact-notice-leave-active {
    transition:
      opacity 0.2s ease,
      transform 0.24s ease;
  }

  .contact-notice-enter-from {
    opacity: 0;
    transform: translate3d(0, 8px, 0) rotate(-2deg);
  }

  .contact-notice-enter-to,
  .contact-notice-leave-from {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(-2deg);
  }

  .contact-notice-leave-to {
    opacity: 0;
    transform: translate3d(0, -10px, 0) rotate(-2deg);
  }

  .contact__mascot {
    display: flex;
    grid-column: 1 / -1;
    justify-self: start;
    gap: 8px;
    margin: 6px 0 -18px;
  }

  .contact__bubble {
    position: relative;
    max-width: 330px;
    border: 2px solid $color-ink;
    border-radius: $radius-md;
    padding: 16px 18px;
    background: $color-white;
    box-shadow: 6px 6px 0 $color-ink;
    color: $color-ink;
    font-size: 1.05rem;
    font-weight: 900;
    line-height: 1.18;
    transform: rotate(-2deg);
    align-self: baseline;
  }

  .contact__bubble::after {
    position: absolute;
    left: -11px;
    bottom: 26px;
    width: 20px;
    height: 20px;
    border-left: 2px solid $color-ink;
    border-bottom: 2px solid $color-ink;
    background: $color-white;
    content: '';
    transform: rotate(45deg);
  }

  .contact__mascot-image {
    width: min(24vw, 160px);
    min-width: 112px;
    max-width: none;
    filter: drop-shadow(10px 12px 0 rgba($color-ink, 0.16));
    transform: scaleX(-1);
  }

  @include respond(tablet) {
    .contact__inner {
      grid-template-columns: 1fr;
      padding: 32px;
    }

    .contact__title {
      font-size: 2.25rem;
    }

    .contact__spark--one {
      top: 2px;
      right: 4px;
      width: 74px;
      height: 74px;
      transform: rotate(14deg);
    }

    .contact__notice {
      left: 110px;
      right: unset;
      bottom: calc(100% + 8px);
      font-size: 0.78rem;
    }

    .contact__button {
      min-width: 0;
    }
  }

  @include respond(phone) {
    .contact__inner {
      padding: 24px;
    }

    .contact__title {
      font-size: 1.9rem;
    }

    .contact__spark--one {
      top: auto;
      right: 34px;
      bottom: 134px;
      width: 56px;
      height: 56px;
      transform: rotate(12deg);
    }

    .contact__spark--two {
      right: 92px;
      bottom: 20px;
      width: 40px;
      height: 40px;
    }

    .contact__mascot {
      display: grid;
      justify-items: start;
      gap: 8px;
      margin-bottom: -8px;
    }

    .contact__bubble {
      max-width: 280px;
      font-size: 0.96rem;
      text-align: left;
    }

    .contact__bubble::after {
      left: 44px;
      top: -11px;
      border-right: 2px solid $color-ink;
      border-left: 0;
      transform: rotate(224deg);
    }

    .contact__mascot-image {
      width: 132px;
    }

    .contact__notice {
      left: 60px;
    }
  }
</style>
