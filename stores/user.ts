import { BASE_URL } from "~/constants";

import type { IUser, IResponse } from "~/types/auth";

export const useUserStore = defineStore("user-store", () => {
  const user = ref<IUser>();

  const requestError = ref<unknown>(null);
  const isLoading = ref(false);

  const getUserDetails = async (): Promise<IResponse<IUser>> => {
    const { data, pending, error } = await useFetch(BASE_URL + "/account/");
    isLoading.value = pending.value;
    if (error.value) {
      requestError.value = error.value;
    }

    return {
      data: data.value,
      error: error.value,
    };
  };

  return {
    user: user.value,
    getUserDetails,
  };
});
