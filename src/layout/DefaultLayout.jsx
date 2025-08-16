import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefaultLayout() {

    return (
        <>
            <Header />
            <Outlet />
            
        </>
    )
}
// o Outlet é o conteúdo: home, series ou filmes

export default DefaultLayout