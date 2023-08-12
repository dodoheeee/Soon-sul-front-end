import CheckBox from ".";
import { useTranslation } from "react-i18next";
import { TERMS_LABEL } from "@/constants/biz";
import { useRouter } from "next/router";

type Props = {
  checkList: readonly boolean[];
  labels: readonly string[];
  onCheck: (index: number) => void;
};

const Checks: React.FunctionComponent<Props> = ({
  checkList,
  labels,
  onCheck,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      {labels.map((label, idx) => (
        <div key={idx} className="flex items-center justify-between pb-4">
          <CheckBox
            idx={idx}
            checkList={checkList}
            onChange={() => onCheck(idx)}
            label={label}
          />
          {TERMS_LABEL[idx].link !== "" && (
            <div
              onClick={() => router.push(`${TERMS_LABEL[idx].link}`)}
              className="text-gray-500 la-2"
            >
              {t("common.show")}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Checks;
