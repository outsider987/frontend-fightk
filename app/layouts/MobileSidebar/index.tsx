import Modal from "@/components/Modal";
import { useIsMemberPath } from "@/hooks/usePathHelper";
import useTranslation from "@/hooks/useTranslation";
import { ROUTES, languageRoutes } from "@/routes";
import { useGlobalContext } from "@/utility/context";

import { scrollToTop } from "@/utility/helper";
import { cleanTokenStorage } from "@/utility/storage";
import { Box, Drawer, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useMenusList from "./hooks/useMenusList";
import { useUserContext } from "@/stores/user";

const MobileSidebar = () => {
  const t = useTranslation();
  const { push, pathname, asPath, query, locale } = useRouter();
  const { openSidebar, setOpenSidebar } = useGlobalContext();
  const { setUser } = useUserContext();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [path] = useState<string>("");

  const onLogOut = async () => {
    cleanTokenStorage();
    setUser(null);
    push(ROUTES.LOGIN.path);
  };

  const menus = useMenusList();

  useEffect(() => {
    setOpenSidebar(false);
  }, [pathname]);

  const handleChangePath = (e, path: string) => {
    scrollToTop();
    e.preventDefault();

    push(path);
  };

  const handleLeavePage = () => {
    setOpenModal(false);
    push(path);
  };

  return (
    <Box>
      <Drawer
        anchor="left"
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
        sx={{
          "& .MuiBackdrop-root": { background: "initial" },
          "& .MuiPaper-root": {
            mt: "60px",
            px: 2,
            bgcolor: "colors.main",
            minWidth: { xs: "initial", md: "15%" },
          },
        }}
      >
        {menus.map((item, index) => {
          return (
            item.show && (
              <MuiLink
                key={index}
                href={item.path}
                onClick={(e) => handleChangePath(e, item.path)}
              >
                <Typography
                  color="#fff"
                  sx={{
                    cursor: "pointer",
                    p: 2,
                    borderBottom: "1.5px solid white",
                  }}
                >
                  {item.name}
                </Typography>
              </MuiLink>
            )
          );
        })}

        <Box p={2} borderBottom="1.5px solid white">
          <Typography color="#fff" fontWeight="700">
            {t.menu.language}
          </Typography>
          <Box display="flex" flexDirection="column" gap={1} mt={1}>
            {languageRoutes.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={{ pathname, query }}
                  as={asPath}
                  locale={item.locale}
                  replace
                >
                  <a
                    style={{
                      color: locale === item.locale ? "#fff" : "gray",
                      fontSize: "0.9rem",
                      padding: "5px 0px",
                    }}
                  >
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </Box>
        </Box>
        {useIsMemberPath() && (
          <Box p={2} borderBottom="1.5px solid white" onClick={onLogOut}>
            <Typography color="#fff" fontWeight="700">
              {t.logOut}
            </Typography>
          </Box>
        )}
      </Drawer>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        title={t.menu.modal.title}
        content={t.menu.modal.content}
        confirmText={t.menu.modal.confirmBtn}
        cancelText={t.menu.modal.cancelBtn}
        confirmBtn={handleLeavePage}
        cancelBtn={() => setOpenModal(false)}
      />
    </Box>
  );
};

export default MobileSidebar;
