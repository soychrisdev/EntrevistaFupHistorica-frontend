import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type UseNavbar = {
  themeHandler: () => void;
  desktopMenuHandler: (state: boolean) => void;
  desktopMenuState: boolean;
  mobileMenuHandler: (state: boolean) => void;
  mobileMenuState: boolean;
  accessibilityClick: (increase: boolean, e: React.MouseEvent) => void;
};

interface Preferencia {
  oscuro: boolean;
  fontSize: string;
}

export function useNavbar(): UseNavbar {
  const [mobileMenuState, mobileMenuHandler] = useState(false);
  const [desktopMenuState, desktopMenuHandler] = useState(false);

  const hasDark = () => {
    return document.body.classList.contains("dark");
  };

  const themeHandler = () => {
    toggleTheme(!hasDark());
  };

  const toggleTheme = (isDark: boolean) => {
    if (typeof isDark === "boolean") {
      desktopMenuHandler(false);
      mobileMenuHandler(false);
      const preferencias: Preferencia = {
        oscuro: isDark,
        fontSize: "16px",
      };
      localStorage.setItem("theme", JSON.stringify(preferencias));

      document.body.classList.toggle("dark", isDark);

      if (isDark) {
        $(".tipo-de-modo").text("Modo Claro");
        $(".logo-mobile").attr(
          "src",
          "https://www.inacap.cl/web/template-aplicaciones/img/isotipo-blanco.png",
        );
        $(".logo").attr(
          "src",
          "https://www.inacap.cl/web/template-aplicaciones/img/logo-inacap-blanco.png",
        );
      } else {
        $(".tipo-de-modo").text("Modo Oscuro");
        $(".logo-mobile").attr(
          "src",
          "https://www.inacap.cl/web/template-aplicaciones/img/isotipo.png",
        );
        $(".logo").attr(
          "src",
          "https://www.inacap.cl/web/template-aplicaciones/img/logo-inacap.png",
        );
      }
    }
  };

  const accessibilityClick = (increase: boolean, e: React.MouseEvent) => {
    e?.stopPropagation();

    const body = document.body;
    const classList = body.className ? body.className.split(/\s+/) : [];
    const filtered = classList.filter(function (str: string) {
      return str.includes("body-large");
    });

    if (increase) {
      switch (filtered.length) {
        case 0:
          body.classList.add("body-large");
          filtered.push("body-large");
          break;
        case 1:
          body.classList.add("body-large-1");
          filtered.push("body-large-1");
          break;
        case 2:
          body.classList.add("body-large-2");
          filtered.push("body-large-2");
          break;
      }
    } else {
      let index = -1;

      switch (filtered.length) {
        case 1:
          body.classList.remove("body-large");
          index = filtered.indexOf("body-large");
          break;
        case 2:
          body.classList.remove("body-large-1");
          index = filtered.indexOf("body-large-1");
          break;
        case 3:
          body.classList.remove("body-large-2");
          index = filtered.indexOf("body-large-2");
          break;
      }

      if (index > -1) {
        filtered.splice(index, 1);
      }
    }

    window.dispatchEvent(new Event("resize"));
  };

  return {
    desktopMenuState,
    desktopMenuHandler,
    mobileMenuState,
    mobileMenuHandler,
    themeHandler,
    accessibilityClick,
  };
}

export default useNavbar;
