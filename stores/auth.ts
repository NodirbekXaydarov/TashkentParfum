/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from "~/constants";
import type { ILoginForm, IRegisterForm, IResponse } from "~/types/auth";

type EntryPointResponse = {
  session: string;
};

export const useAuthStore = defineStore("auth-store", () => {
  const isLoading = ref(false);
  const requestError = ref(null);
  const isAuthenticated = computed(() => useCookie("access-token").value);

  const login = async (loginForm: ILoginForm) => {
    const { data, pending }: any = await useFetch(BASE_URL + "/auth/login/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: loginForm,
    });
    isLoading.value = pending.value;
    if (data.value) {
      const accessToken = useCookie("access-token");
      const refreshToken = useCookie("refresh-token");
      accessToken.value = data?.value?.access;
      refreshToken.value = data?.value?.refresh;
    }
  };

  const register = async (form: IRegisterForm) => {
    const { data, pending, error }: any = await useFetch(
      BASE_URL + "/account/registration/register/",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          ...form,
          full_name: form.fullName,
        },
      },
    );

    isLoading.value = pending.value;
    if (error.value) {
      console.log(error.value);
      requestError.value = error.value;
    }
    if (data.value) {
      console.log(data.value);
      const token = useCookie("token");
      token.value = data?.value?.token;
    }
  };

  const entryPoint = async (
    phone: string,
  ): Promise<IResponse<EntryPointResponse>> => {
    const { data, pending, error }: any = await useFetch(
      BASE_URL + "/account/registration/entrypoint/",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          phone,
        },
      },
    );
    isLoading.value = pending.value;
    if (error.value) {
      requestError.value = error.value;
    }
    if (data.value) {
      const session = useCookie("session");
      session.value = data.value.session;
    }
    return {
      data: data.value,
      error: error.value,
    };
  };
  const verify = async (code: string, phone: string) => {
    const session = useCookie("session");
    const { pending, error }: any = await useFetch(
      BASE_URL + "/account/registration/verify/",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          phone,
          code,
          session: session.value,
        },
      },
    );
    isLoading.value = pending.value;
    if (error.value) {
      requestError.value = error.value;
    }
  };

  const logOut = () => {
    const token = useCookie("token");
    token.value = null;
  };

  return {
    requestError: requestError.value,
    isLoading: isLoading.value,
    isAuthenticated: isAuthenticated.value,
    login,
    logOut,
    register,
    entryPoint,
    verify,
  };
});
