
import Hero from './components/layout/Hero';
import HomeMenu from './components/layout/HomeMenu';
import SectionsHeaders from './components/layout/SectionHeaders';


export default function Home() {
  return (
    <>

      <Hero/>
      <HomeMenu/>
      <section className='text-center my-16'>
        <SectionsHeaders 
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />
        <div className='text-black-500 max-w-md mx-auto mt-4 flex-col gap-6'>
          <p> lorem lorem lorem lorem lorem loremloremloremlorem loremlorem loremlo remlor em</p>
          <p> lorem lorem lorem lorem lorem loremloremloremlorem loremlorem loremlo remlor em 12345</p>
          <p> EUHHUE HJGNGKDA.</p>
        </div>
      </section>

      <section  className="text-center my-8" >
      <SectionsHeaders 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact Us !'}
        />
        <div className="mt-8"> 
          <a className="text-4xl underline text-gray-500" href="tel:+351910981258">
             +351 910 981 258
          </a>
        </div>
      </section>



    </>
  );
}
