import "../src/styles/globals.css";
import "../src/styles/theme.css";
import { ThemeProvider, useTheme } from "../src/context/ThemeProvider";
import clsx from "clsx";

const AppWithTheme = ({children}) => {
  const {isDark} = useTheme();
  return(
    <div id="app" className={clsx({
      dark: isDark
    })}>{children}</div>
  )
}

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
  <AppWithTheme>
    <div className="h-full px-4 m-auto max-w-7xl">
      <Component {...pageProps} />
    </div>
    </AppWithTheme>
    </ThemeProvider>
);

export default MyApp;
