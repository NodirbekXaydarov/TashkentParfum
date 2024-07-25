<template>
  <section>
    <h2 class="text-xl font-semibold text-black lg:text-2xl mb-5">{{ $t('delivery_address') }}</h2>

    <div class="flex flex-col lg:flex-row gap-4 mb-4">
      <FormSelect
        v-model="form.region"
        label="Регион"
        placeholder="Выберите регион"
        :options="regions"
      />
      <FormSelect
        v-model="form.district"
        label="Район/город"
        placeholder="Выберите Район/город"
        :options="filteredDistricts"
      />
    </div>
    <FormInput
      id="location-address"
      v-model="form.location"
      label="Адрес"
      placeholder="enter_address_delivery"
      wrapper-class="lg:max-w-[22.2rem] h-10"
    />

    <div
      class="flex items-center p-2 border border-green gap-2 rounded-md my-4 lg:max-w-[22.2rem]"
    >
      <i class="icon-info-circle text-green" />
      <span class="text-black text-14">Товар переносится с карты в пункт назначения</span>
    </div>

    <div>
      <iframe
        class="w-full h-80"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.9352428541515!2d69.26762653128412!3d41.34119002820264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4a23704235%3A0x6977516b7d37a21b!2sUIC%20Group!5e0!3m2!1sen!2s!4v1715939932605!5m2!1sen!2s"
        style="border: 0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { regions } from "@/data";
import { filterByRegionId } from "@/utils";
import type { IOrderAddress } from "@/types";

const props = defineProps<{ addressForm: IOrderAddress }>();

const emits = defineEmits(["update:modelValue", "validationStatus"]);

const form = unref<IOrderAddress>(props.addressForm);

const filteredDistricts = computed(() => {
  return filterByRegionId(form.region?.id ?? 0);
});

watch(
  () => form,
  (newValue) => {
    emits("update:modelValue", newValue);
    validateForm();
  },
  { deep: true }
);

watch(
  () => form.region,
  () => {
    form.district = null;
  }
);

function validateForm() {
  const isValid =
    form.region !== null && form.district !== null && form.location.trim() !== "";
  emits("validationStatus", isValid);
}
</script>
