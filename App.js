import { ToastProvider } from "react-native-toast-notifications";
import AppContextProvider from "./src/context/AppContext";
import AUHighSchool from "./src/navigation";
import { initializeApp } from "firebase/app";
import { colors } from "./src/constants/colors";
import { hp } from "./src/util/dimension";
import { deleteFromStorage } from "./src/util/storageUtil";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDDt6qa2Jlg5ZO9Uow_KJqSfLjWy3h6--A",
    authDomain: "breastcancerexpertsystem.firebaseapp.com",
    projectId: "breastcancerexpertsystem",
    storageBucket: "breastcancerexpertsystem.appspot.com",
    messagingSenderId: "335800195367",
    appId: "1:335800195367:web:6bceec4915529311993102"
  };

  initializeApp(firebaseConfig);

  return (
    <AppContextProvider>
      <ToastProvider
        placement="top"
        duration={2000}
        // successColor="green"
        // dangerColor="red"
        // warningColor="orange"
        // normalColor="#6610F2"
        normalColor={colors.primaryLighter}
        offsetTop={hp(40)}
        // renderType={{
        //   normal: (toast) => (
        //     <Toast text={toast.message} bgColor="#6610F2" />
        //   ),
        //   danger: (toast) => (
        //     <Toast text={toast.message} bgColor="#F83C33" />
        //   ),
        //   success: (toast) => (
        //     <Toast text={toast.message} bgColor="#45D988" />
        //   ),
        // }}
        swipeEnabled={true}>
        <AUHighSchool />
      </ToastProvider>
    </AppContextProvider>
  );
}
