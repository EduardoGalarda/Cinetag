import FavoritesProvider from "../../components/Context/Favorites";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <main>
        <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
        <Footer />    

    </main>
  );
};

export default Layout;