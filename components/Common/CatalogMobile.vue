<template>
  <div
    class="fixed top-32 left-0 bg-white w-full max-h-[calc(100svh-5rem)] transition-300 lg:block pt-8 overflow-auto"
  >
    <div>
      <div class="container h-full py-8 grid overflow-y-auto gap-y-4">
        <div>
          <BaseButton
            text="Войти"
            icon="icon-login"
            icon-position="left"
            size="small"
            wrapper-class="w-full sm:max-w-sm"
            @click="$emit('open-auth-modal')"
          />
        </div>
        <div v-for="item in catalogData" :key="item.id" class="overflow-hidden">
          <div class="flex-between py-1" @click="changeDropdownId(item.id)">
            <h2 class="font-semibold text-lg text-black">
              {{ $t(item.label) }}
            </h2>
            <i
              :class="
                currentDropdownId == item.id
                  ? 'icon-chevron-down text-red rotate-180 transition-300'
                  : 'icon-chevron-down transition-300'
              "
            />
          </div>
          <Transition name="fade" mode="in-out">
            <ul v-if="currentDropdownId === item.id">
              <li
                v-for="(link, index) in item.links"
                :key="index + link"
                class="my-1 text-base"
              >
                <NuxtLink to="#" class="text-black">
                  {{ $t(link) }}
                </NuxtLink>
              </li>
            </ul>
          </Transition>
        </div>
        <div>
          <a
            to="tel:+9998712007007"
            class="icon-phone-inc flex-y-center gap-1 text-gray hover-red"
          >
            <span class="text-base leading-130 font-semibold">
              {{ formatPhone("712007007") }}
            </span>
          </a>

          <a
            to="https://yandex.ru/maps/?ll=25.45,41.578&z=18"
            class="icon-map flex-y-center gap-1 text-gray hover-red"
          >
            <span class="text-base leading-130 font-semibold"
              >Ташкент, ул-ца Ойбек, 28/14</span
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { catalogData } from "~/data";

interface Emits {
  (e: "open-auth-modal"): void;
}

defineEmits<Emits>();

const currentDropdownId = ref(0);
const isOnTop = ref(true);

onMounted(() => {
  watch(
    () => window.scrollY,
    () => {
      isOnTop.value = window.scrollY <= 0;
      console.log(window.scrollY)
    }
  );
});

const changeDropdownId = (id: number) => (currentDropdownId.value = id);
</script>
