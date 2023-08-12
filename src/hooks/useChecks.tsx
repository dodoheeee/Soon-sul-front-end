import { useState, useEffect } from "react";
import Checks from "@/components/checkBox/checks";

type UseChecksResult = [boolean, () => JSX.Element];

export const useChecks = (
  labels: readonly string[],
  isAllAgree: boolean
): UseChecksResult => {
  const [checkList, setCheckList] = useState(() => labels.map(() => false));

  useEffect(() => {
    if (isAllAgree) {
      setCheckList((checks) => checks.map(() => true));
    } else {
      setCheckList((checks) => checks.map(() => false));
    }
  }, [isAllAgree]);
  const handleCheckClick = (index: number) => {
    setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)));
  };

  const isAllChecked = checkList.every((x) => x);

  const renderChecks = () => (
    <Checks checkList={checkList} labels={labels} onCheck={handleCheckClick} />
  );

  return [isAllChecked, renderChecks];
};
