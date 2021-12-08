import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({exploreData, cardData}) {
  return (
    <div className="">
      <Head>
        <title>AIRBNB clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">

        <section className="pt-6">
           <h2 className="text-4xl font-semibold py-5">Explore Nearby</h2>  
          
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
           {exploreData?.map(({img, location, distance})=>(
             <SmallCard key={img} img={img} location={location} distance={distance} />
           ))}
           </div>
        </section>

        <section>
           <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

           <div className="flex space-x-3 overflow-scroll overflow-y-hidden scrollbar-default p-3 -ml-3">
             {cardData?.map(({img,title})=>(
               <MediumCard key={img} img={img} title={title} />
             ))}
           </div>
        </section>

        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        />  
      </main> 
      
      <Footer />

    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').
  then(
    (res) => res.json()
  );

  const cardData = await fetch('https://jsonkeeper.com/b/VHHT').
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardData
    }
  }
}