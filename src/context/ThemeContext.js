import { useState,createContext,useContext } from "react"
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light')

  return(
    <>
      <ThemeContext.Provider value={[theme,setTheme]}>
        { children }
      </ThemeContext.Provider>
    </>
  )
};

//子コンポーネントで useContextでThemeContextを組み合わせるのを、こっちでやってあげる
export const useTheme = () => useContext(ThemeContext);