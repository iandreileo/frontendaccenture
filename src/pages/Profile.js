// import DefaultFooter from 'components/DefaultFooter';
import Header from '../partials/profile/Header';
import Content from '../partials/profile/Content';
import Footer from '../partials/Footer';

export default function Profile() {
  return (
    <>
      <div className="absolute w-full z-20"></div>
      <main>
        <Header />
        <Content />
      </main>
      <Footer />
    </>
  );
}
