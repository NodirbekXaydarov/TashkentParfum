<template>
  <main class="container py-4">
    <section>
      <CommonBreadcrumb :links="links" />
    </section>

    <section class="py-2">
      <h1 class="text-black text-xl md:text-32 font-semibold my-5">
        Оформления заказа
      </h1>
      <div class="flex items-start flex-col lg:flex-row gap-6">
        <CommonDeliverySteps
          :current-step="curOrderStep"
          :can-go-next="canGoNext"
          @prev-step="prevStep"
          @next-step="nextStep"
          @handle-payment="openPaymentModal"
        >
          <Transition name="fade" mode="out-in">
            <OrderAddress
              v-if="curOrderStep === 1"
              :address-form="addressForm"
              @validation-status="updateFormValidStatus"
            />
            <OrderContact
              v-else-if="curOrderStep === 2"
              :contact-form="contactForm"
              @validation-status="updateFormValidStatus"
            />
            <OrderPayment
              v-else-if="curOrderStep === 3"
              :payment-form="paymentForm"
              @validation-status="updateFormValidStatus"
            />
          </Transition>
        </CommonDeliverySteps>

        <!-- total price -->
        <OrderTotal />
      </div>
    </section>
    <OrderPaymentModal
      :show="isOpen"
      @close="closeModal"
      @add-card="() => {}"
    />
  </main>
</template>

<script setup lang="ts">
import { useUrlSearchParams } from "@vueuse/core";
import type { BreadcrumbLinks, IOrderAddress, IOrderContact } from "@/types";
import type { ICreditCartForm } from "~/types/cart";

const params = useUrlSearchParams();
const router = useRouter();
const { isOpen, closeModal, openModal } = useModal();

const curOrderStep = ref(3);
const canGoNext = ref(false);

const contactForm = ref<IOrderContact>({
  fullName: "",
  phone: "",
  extraPhone: "",
});

const paymentForm = ref<ICreditCartForm>({
  number: "",
  type: "humo",
  valid: "",
});

const addressForm = ref<IOrderAddress>({
  region: null,
  district: null,
  location: "",
});

const updateFormValidStatus = (val: boolean) => (canGoNext.value = val);

const prevStep = () =>
  curOrderStep.value !== 1 && curOrderStep.value > 1
    ? curOrderStep.value--
    : curOrderStep.value;

const nextStep = () =>
  curOrderStep.value != 3 && curOrderStep.value < 3
    ? curOrderStep.value++
    : curOrderStep.value;

const openPaymentModal = () => {
  openModal();
  // router.push({ query: { isPaymentModalOpen: 'true' } })
};

const links: BreadcrumbLinks[] = [
  {
    path: "/",
    label: "Главная",
  },
  {
    path: "/cart",
    label: "Корзина",
  },
  {
    path: "/cart/order",
    label: "Оформления заказа",
  },
];
</script>
