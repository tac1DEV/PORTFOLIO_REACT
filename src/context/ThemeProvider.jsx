import { useState, createContext, useContext, useEffect} from "react";

const ThemeContext = createContext({theme: "light"});

const LOCALE_STORAGE_THEME_KEY = "colorScheme";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const isDark = theme === "dark";
  const isLight = theme === "light";

  const toggleTheme = () => setTheme((curr) =>{
    const newTheme = curr === "dark" ? "light" : "dark";
    localStorage.setItem(LOCALE_STORAGE_THEME_KEY, newTheme);
    return newTheme;
  });

  useEffect(() => {
    const savedColorScheme = localStorage.getItem(LOCALE_STORAGE_THEME_KEY);
    if(savedColorScheme){
      setTheme(savedColorScheme);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () =>{
      setTheme(mediaQuery.matches ? "dark" : "light");
    }

    mediaQuery.addEventListener("change", handleChange);

    handleChange()

    return () =>{
      mediaQuery.removeEventListener("change", handleChange);  
    }

  },[])

  const values ={
    theme,
    isDark,
    isLight,
    toggleTheme
  }

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
