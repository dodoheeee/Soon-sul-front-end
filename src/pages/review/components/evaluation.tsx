import { useTranslation } from "react-i18next";
import Title from "@/pages/detail/components/title";
import SliderComponent from "@/components/slider";
const Evaluation = ({
  evaluation = {
    acidity: 0,
    carbonicAcid: 0,
    density: 0,
    heavy: 0,
    scent: 0,
    sweetness: 0,
  },
  setEvaluation,
}: {
  evaluation: {
    acidity: number | number[];
    carbonicAcid: number | number[];
    density: number | number[];
    heavy: number | number[];
    scent: number | number[];
    sweetness: number | number[];
  };
  setEvaluation: (v: {
    acidity: number | number[];
    carbonicAcid: number | number[];
    density: number | number[];
    heavy: number | number[];
    scent: number | number[];
    sweetness: number | number[];
  }) => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className="p-4 ">
      <Title text={t("common.Evaluation")} />
      <div className="pb-1" />
      <div className="flex items-center">
        <div className="w-12 la-2">단맛</div>
        <SliderComponent
          aria-label="pretto slider"
          onChange={(event: Event, newValue: number | number[]) =>
            setEvaluation({ ...evaluation, sweetness: newValue })
          }
          defaultValue={evaluation.sweetness}
          step={1}
          min={0}
          max={5}
        />
      </div>
      <div className="flex items-center">
        <div className="w-12 la-2">신맛</div>
        <SliderComponent
          aria-label="pretto slider"
          onChange={(event: Event, newValue: number | number[]) =>
            setEvaluation({ ...evaluation, acidity: newValue })
          }
          defaultValue={evaluation.acidity}
          step={1}
          min={0}
          max={5}
        />
      </div>
      <div className="flex items-center">
        <div className="w-12 la-2">청량감</div>
        <SliderComponent
          aria-label="pretto slider"
          onChange={(event: Event, newValue: number | number[]) =>
            setEvaluation({ ...evaluation, carbonicAcid: newValue })
          }
          defaultValue={evaluation.carbonicAcid}
          step={1}
          min={0}
          max={5}
        />
      </div>
      <div className="flex items-center">
        <div className="w-12 la-2">바디감</div>
        <SliderComponent
          aria-label="pretto slider"
          onChange={(event: Event, newValue: number | number[]) =>
            setEvaluation({ ...evaluation, density: newValue })
          }
          defaultValue={evaluation.density}
          step={1}
          min={0}
          max={5}
        />
      </div>
      <div className="flex items-center">
        <div className="w-12 la-2">목넘김</div>
        <SliderComponent
          aria-label="pretto slider"
          onChange={(event: Event, newValue: number | number[]) =>
            setEvaluation({ ...evaluation, heavy: newValue })
          }
          defaultValue={evaluation.heavy}
          step={1}
          min={0}
          max={5}
        />
      </div>
      <div className="flex items-center">
        <div className="w-12 la-2">향</div>
        <SliderComponent
          aria-label="pretto slider"
          onChange={(event: Event, newValue: number | number[]) =>
            setEvaluation({ ...evaluation, scent: newValue })
          }
          defaultValue={evaluation.scent}
          step={1}
          min={0}
          max={5}
        />
      </div>
    </div>
  );
};

export default Evaluation;
