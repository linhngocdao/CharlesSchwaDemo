import Banner3D from '~/components/client/banner';
import CryptoTracker from '~/components/client/CryptoTracker';
import DefiMiningSection from '~/components/client/demind';
import FeatureSection from '~/components/client/featureSection';
import ModernFooter from '~/components/client/footer';
import HeaderClient from '~/components/client/header';
import InnovativeSection from '~/components/client/InnovativeSection';

const ClientLayuot = () => {

  return (
    <>
      <HeaderClient />
      {/* <img src="https://www.krakenvipex.com/resource/images/dark/hei1.png" alt="" /> */}
      <Banner3D />
      <CryptoTracker />
      <InnovativeSection />
      <DefiMiningSection />
      <FeatureSection />
      <ModernFooter />
    </>
  )
}

export default ClientLayuot
