export function useHeader() {
  const form: { search: string } = reactive({
    search: "",
  });
  const clearSearch = (): string => (form.search = "");

  return { form, clearSearch };
}
