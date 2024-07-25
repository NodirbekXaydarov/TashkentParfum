<template>
  <section>
    <h1 class="text-xl font-semibold text-black lg:text-2xl mb-5">Контактные данные</h1>

    <div class="lg:max-w-[21.7rem]">
      <FormInput
        id="order-contact-fullname"
        v-model="form.fullName"
        class="w-full"
        label="Ф.И.О"
        placeholder="Введите полное имя"
      />
    </div>
    <div class="flex-between !items-end flex-col lg:flex-row gap-4 mt-4">
      <FormInputPhone
        id="order-contact-detail-phone"
        v-model="form.phone"
        class="w-full"
      />
      <div class="w-full">
        <Transition name="phone" mode="out-in">
          <BaseButton
            v-if="!hasExtraPhone"
            class="!text-red !w-full"
            wrapper-class="bg-red-100 hover:!bg-red-200 hover:!shadow-none"
            text="Добавить доп. номер телефона"
            icon="icon-add-circle !text-red"
            icon-position="left"
            @click="toggleExtraPhone"
          />
          <div v-else class="relative">
            <FormInputPhone
              id="order-contact-detail-extra-phone"
              v-model="form.extraPhone"
              class="w-full"
            />

            <i
              class="icon-close-circle text-black absolute right-2 top-[calc(50%+5px)] cursor-pointer transition-300 hover:text-red"
              @click="toggleExtraPhone"
            />
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IOrderContact } from "@/types";

interface Props {
  contactForm: IOrderContact;
}

const { contactForm } = defineProps<Props>();
const emits = defineEmits(["update:modelValue", "validationStatus"]);

const form = unref(contactForm);
const hasExtraPhone = ref<boolean>(false);

watch(
  () => form,
  (newValue) => {
    emits("update:modelValue", newValue);
    console.log(Object.values(form));
    validateForm();
  },
  { deep: true }
);
watch(
  () => hasExtraPhone,
  () => {
    form.extraPhone = "";
  },
  { deep: true }
);

function validateForm() {
  const isValid = Object.values(form);
  emits("validationStatus", isValid);
}
const toggleExtraPhone = () => (hasExtraPhone.value = !hasExtraPhone.value);
</script>

<style scoped>
.phone-enter-active,
.phone-leave-active {
  transition: all 200ms ease;
}

.phone-enter-from,
.phone-leave-to {
  opacity: 0;
}
</style>
