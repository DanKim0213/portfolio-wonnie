import {
  Header,
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <CustomerReviews />
      </main>
      <Footer />
    </>
  );
};

export default App;
