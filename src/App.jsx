import {
  Header,
  CoworkerReviews,
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
        <CoworkerReviews />
      </main>
      <Footer />
    </>
  );
};

export default App;
