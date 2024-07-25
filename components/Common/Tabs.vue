<template>
  <div>
    <div class="w-fit h-8.5 bg-gray-200 flex-between self-start rounded-10 my-5 p-1 overflow-hidden">
      <!-- tab element -->
      <div
        v-for="(tab, key) in tabs"
        :key="key"
        class="h-full flex gap-1"
        @click="$emit('change-tab', tab.id)"
      >
        <span
          class="w-full h-full flex-center rounded text-sm text-gray cursor-pointer p-2 transition-300"
          :class="{
            'rounded-s-md': key === 0,
            'rounded-e-md': key === tabs.length - 1,
            'bg-white shadow-dark !text-black': activeTabId === tab.id,
          }"
        >
          {{ tab.text }}
        </span>
      </div>
    </div>
    <!-- Tab content -->
    <Transition name="fade" mode="out-in">
      <slot />
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface Props {
  tabs: {
    id: number;
    text: string;
  }[];
  activeTabId: number;
}

interface Emits { 
  (e: 'change-tab', id: number): void;
}

const { tabs, activeTabId } = defineProps<Props>();

defineEmits<Emits>();
</script>
