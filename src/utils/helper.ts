import i18n from "./i18next";

export const convertToArrayForCheckbox = (
  data: { required: boolean; label: string }[]
): string[] => {
  const result: string[] = [];
  data.map((item) => {
    if (item.required) {
      return result.push(`[${i18n.t("common.required")}] ${item.label}`);
    }
    return result.push(item.label);
  });
  return result;
};
