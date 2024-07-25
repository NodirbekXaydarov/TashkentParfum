<template>
  <section>
    <h2 class="text-xl font-semibold text-black lg:text-2xl mb-5">Оплата</h2>

    <CommonTabs :tabs :active-tab-id="activeTabId" @change-tab="changeActiveTabId">
      <!-- tab 1 -->
      <div v-if="activeTabId === 0">
        <Transition name="fade" mode="out-in">
          <div v-if="!hasExtraCard">
            <!--! credit cards -->
            <OrderCardSelect
              :credit-cards="creditCards"
              @change-credit-card="changeCreditCard"
            />

            <!-- button to add extra card -->
            <BaseButton
              class="!text-red"
              wrapper-class="bg-red-100 hover:!bg-red-200 hover:!shadow-none"
              text="Добавить карту"
              icon="icon-add-circle !text-red"
              icon-position="left"
              @click="toggleExtraCard"
            />
          </div>

          <!-- extra credit card form -->
          <div v-else class="flex flex-col gap-y-4">
            <FormInputCreditCard id="payment-input" v-model="creditCardForm" />

            <div class="flex gap-2">
              <BaseButton text="cancel" @click="toggleExtraCard" />
              <BaseButton
                wrapper-class="lg:!w-fit"
                text="Добавить карту"
                icon="icon-add-circle"
                icon-position="left"
                :disabled="!isCreditCardValid"
                @click="handleAddCreditCard"
              />
            </div>
          </div>
        </Transition>
      </div>

      <!-- tab 2 -->
      <div v-else>
        <h1>tab 2</h1>
      </div>
    </CommonTabs>

    
  </section>
</template>

<script setup lang="ts">
import { creditCardsData } from "@/mocks";

import type { ICreditCartForm } from "@/types/cart";

interface Props {
  paymentForm: ICreditCartForm;
}

interface Emits {
  (e: "validationStatus", value: boolean): void;
}

const { paymentForm } = defineProps<Props>();
const emits = defineEmits<Emits>();


const activeTabId = ref(0);
const hasExtraCard = ref(false);
const isCreditCardValid = ref(false);

const creditCardForm = unref(paymentForm);

const creditCards = toRef(creditCardsData);

const selectedCard = ref<ICreditCartForm>();

watch(
  () => creditCardForm,
  () => {
    isCreditCardValid.value = Object.values(creditCardForm).every(Boolean);
  },
  { deep: true }
);

const changeActiveTabId = (id: number) => (activeTabId.value = id);

const toggleExtraCard = () => {
  hasExtraCard.value = !hasExtraCard.value;
  creditCardForm.number = "";
  creditCardForm.valid = "";
};

const handleAddCreditCard = () => {
  creditCards.value.push({
    ...creditCardForm,
  });

  hasExtraCard.value = false;
};

const changeCreditCard = (card: ICreditCartForm) => {
  console.log(card);
  selectedCard.value = card;
  emits('validationStatus', true)
};

const tabs = [
  {
    id: 0,
    text: "Банковской картой",
  },
  {
    id: 1,
    text: "Платежные услуги",
  },
];
</script>
