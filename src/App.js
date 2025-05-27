import "./App.css";
import NavRoutes from "./NavPages/MainRoutes/NavRoutes";
import styles from "./Components/NavBar.module.css";
import FooterComponent from "./Components/FooterComponent";

function App() {
  return (
    <div className={`App d-flex flex-column gap-4  ${styles.appContainer}`}>
      <NavRoutes />

      {/* <footer className="bg-black h-full container-fluid  text-white ">
        <Footer/>
        </footer> */}
      <div
        className={`bg-black  text-white pt-4 ps-3 ps-xl-0 mt-auto ${styles.FooterContainer} `}
      >
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
