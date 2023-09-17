
import "./UseContextSample2.css"
import Header from "./header";
import Main from "./main";
import { ThemeProvider } from "../context/ThemeContext";

const UseContextSample2 = () => {

  return(
    <>
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default UseContextSample2