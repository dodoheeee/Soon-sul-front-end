import { useState } from "react";
import BottomModal from "@/components/modals/bottomModal";
import { TERMS_LABEL } from "@/constants/biz";
import { convertToArrayForCheckbox } from "@/utils/helper";
import { useChecks } from "@/hooks/useChecks";
import CheckBox from "@/components/checkBox";
import BottomButtom from "@/components/buttons/bottomButton";
import { useTranslation } from "react-i18next";
import { usePostSignup } from "@/biz/signup";
import { useRouter } from "next/router";
import useUserStore from "@/store/user";

type Props = {
  oauthId: string;
  oauthProvider: string;
};

const AgreeTerms: React.FC<Props> = ({ oauthId, oauthProvider }) => {
  const [isOpen, closeModal] = useState(true);
  const { setUserInfo } = useUserStore();
  const [isAllAgree, setAllAgree] = useState(false);
  const labels = convertToArrayForCheckbox(TERMS_LABEL);
  const [isAllChecked, renderChecks] = useChecks(labels, isAllAgree);
  const { t } = useTranslation();
  const router = useRouter();
  const postSignupMutation = usePostSignup(
    (nickname: string, profileImage: string) => {
      router.push("/main");
      setUserInfo({
        nickname: nickname,
        profileImage: profileImage,
      });
    }
  );
  const onSubmit = () => {
    postSignupMutation.mutate({
      age: 0,
      flagAge: true,
      flagPrivacy: true,
      flagTerms: true,
      gender: "",
      oauthId: oauthId,
      oauthProvider: oauthProvider,
    });
  };

  return (
    <BottomModal isOpen={isOpen} closeModal={closeModal}>
      <div className="h-[276px]">
        <div className="flex justify-center py-2">
          <div className="  w-[49.79px] h-[3.87px] bg-[#D9D9D9] rounded-[30px]" />
        </div>
        <div className="h-[192px] p-4 mb-2">
          <div>
            <CheckBox
              label={t("signup.terms.all")}
              onChange={() => setAllAgree(!isAllAgree)}
              checkList={[isAllChecked]}
              idx={0}
            />
          </div>
          <div className="my-4 border-t border-[#F0F0F0] w-full" />
          {renderChecks()}
        </div>
        <BottomButtom
          text={t("common.complete")}
          disabled={!isAllChecked}
          onClick={onSubmit}
        />
      </div>
    </BottomModal>
  );
};

export default AgreeTerms;
