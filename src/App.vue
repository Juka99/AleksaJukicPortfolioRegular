<template>
  <main>
    <HeroSection :profile="profile" />
    <AboutSection :principles="principles" :profile="profile" />
    <ProjectsSection :projects="projects" />
    <SkillsSection :skills="skills" />
    <ProcessSection :steps="processSteps" />
    <ContactSection :profile="profile" />
  </main>
</template>

<script setup>
  import AboutSection from '@/components/sections/AboutSection.vue';
  import ContactSection from '@/components/sections/ContactSection.vue';
  import HeroSection from '@/components/sections/HeroSection.vue';
  import ProcessSection from '@/components/sections/ProcessSection.vue';
  import ProjectsSection from '@/components/sections/ProjectsSection.vue';
  import SkillsSection from '@/components/sections/SkillsSection.vue';
  import { principles, processSteps, profile, projects, skills } from '@/data/portfolio';
</script>
