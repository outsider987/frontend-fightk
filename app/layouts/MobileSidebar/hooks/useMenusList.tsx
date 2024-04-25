import { MenuEnum, useGetCurrentRootPathKey } from "@/hooks/usePathHelper";
import useTranslation from "@/hooks/useTranslation";
import { ROUTES } from "@/routes";
import { MEDICONCEN_MAIN_ROUTES } from "@/routes/mediconcen";

const useMenusList = () => {
  const t = useTranslation();

  const memberMenus = [
    {
      name: t.meidpass,
      path: MEDICONCEN_MAIN_ROUTES.FIND_DOCTOR.path,
      show: true,
    },
    {
      name: t.member_home_title,
      path: MEDICONCEN_MAIN_ROUTES.CHOOSE_SERVICE.path,
      show: true,
    },
    {
      name: t.search_tab,
      path: MEDICONCEN_MAIN_ROUTES.FIND_DOCTOR.path,
      show: true,
    },
    {
      name: t.choose_service_find_record,
      path: MEDICONCEN_MAIN_ROUTES.USAGE_HISTORY.path,
      show: true,
    },
    {
      name: t.choose_service_qr,
      path: MEDICONCEN_MAIN_ROUTES.QR_CODE.path,
      show: true,
    },
    {
      name: t.choose_service_info,
      path: MEDICONCEN_MAIN_ROUTES.MY_PROFILE.path,
      show: true,
    },
  ];

  const rootMenus = [
    {
      name: t.meidpass_enterprise,
      path: "/",
      show: true,
    },
    {
      name: t.meidpass,
      path: ROUTES.CORPORATE_PLAN.path,
      show: true,
    },
    {
      name: t.plan_feature,
      path: "/#plan_feature",
      show: true,
    },
    {
      name: t.members_plan_info,
      path: "/#indemnity_content",
      show: true,
    },
    {
      name: t.redeem_guide,
      path: "/#redeem_guide",
      show: true,
    },
    {
      name: t.contact_us,
      path: "/#contact_us",
      show: true,
    },
  ];

  const corporatePlan = [
    {
      name: t.meidpass_enterprise,
      path: "/",
      show: true,
    },
    {
      name: t.meidpass,
      path: ROUTES.CORPORATE_PLAN.path,
      show: true,
    },
    {
      name: t.plan_feature,
      path: ROUTES.CORPORATE_PLAN.path + "#plan_feature",
      show: true,
    },
  ];

  switch (useGetCurrentRootPathKey()) {
    case MenuEnum.ROOT:
      return rootMenus;
    case MenuEnum.MEMBER:
      return memberMenus;
    case MenuEnum.CORPORATE_PLAN:
      return corporatePlan;
    default:
      return [];
  }
};

export default useMenusList;
