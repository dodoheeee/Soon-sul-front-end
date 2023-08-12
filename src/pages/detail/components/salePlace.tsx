import Title from "./title";
import { useTranslation } from "react-i18next";
import IconNear from "@/components/icons/near";
import ButtonFill from "@/components/buttons/fill";
import { colors } from "@/constants/design";
interface SalePlaceProps {
  salePlace?: string[];
}

const SalePlace: React.FC<SalePlaceProps> = ({
  salePlace = ["전국 편의점", "대형마트"],
}) => {
  const { t } = useTranslation();
  return (
    <div className="p-4 ">
      <Title text={t("common.salePlace")} />
      <div className="pb-[10px]" />
      <div className="flex items-center justify-between">
        <div className="flex ">
          <div className="pr-[7px]">
            <IconNear fill={colors.primary} fill2="white" />
          </div>
          {salePlace &&
            salePlace.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center text-gray-600 la-3"
                >
                  {item}
                  {index !== salePlace.length - 1 && (
                    <div className="pr-1">,</div>
                  )}
                </div>
              );
            })}
        </div>
        <ButtonFill disabled text={"구매하기"} />
      </div>
    </div>
  );
};

export default SalePlace;
