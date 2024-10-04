import { FooterText } from '@/components/footer';
import Card from '@/components/info-card';
import Navbar from '@/components/navbar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <main>
      <Navbar />
      <section className='max-w-screen relative left-0 top-0 mx-auto'>
        <Spline
          className='min-w-screen min-h-screen'
          scene='https://prod.spline.design/Nxun6DNu8ccsjUo6/scene.splinecode'
        />
        <div className='absolute left-0 top-0 z-10 flex h-[100%] w-[100%] items-center justify-center py-16 align-middle sm:px-0'>
          <div className='max-w-3xl text-center'>
            <div className='pb-4'>
              <span className='inline-flex items-center rounded-2xl bg-pink-100 px-4 py-1.5 font-serif text-xs font-medium text-pink-700 sm:text-sm'>
                Empowering women's health with AI.
              </span>
            </div>
            <h1 className='font-serif text-4xl font-semibold !leading-tight text-pink-700 sm:text-5xl xl:text-6xl'>
              Your health, your journey, your care
            </h1>
            <div className='mt-8 flex w-full justify-center space-x-8'>
              <Link to='/home'>
                <button className='inline-flex appearance-none items-center justify-center !rounded-full border border-transparent bg-pink-400 !px-12 py-2.5 !text-base font-medium text-white !shadow-lg ring-2 ring-transparent ring-offset-2 ring-offset-transparent hover:bg-pink-700 focus:outline-none focus:ring-lime-500 focus:ring-offset-white disabled:bg-gray-400 md:px-4 md:text-sm md:shadow-sm lg:rounded-md'>
                  <p>Get started for free</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='body-font overflow-hidden text-gray-600'>
        <div className='container mx-auto max-w-6xl px-20 py-24'>
          <div className='-my-8 divide-y-2 divide-gray-100'>
            {/* AI Powered Health Assistant Section */}
            <Card
              title='AI-Powered Health Assistant'
              subtitle='Personalized Health Guidance at Your Fingertips'
              info="Our AI-driven chatbot offers real-time support for various women's health issues, providing quick answers and guidance on everything from general wellness to specific concerns."
              link='/home/ai-health-assistant'
            />

            {/* Video Consultations Section */}
            <Card
              title='Video Consultations with Specialists'
              subtitle='Expert Care, Anytime, Anywhere'
              info="Connect with certified doctors via secure video calls for professional consultations on women's health topics, from menstrual health to pregnancy advice."
              link='/home/video-consultations'
            />

            {/* AI Menstrual Cycle Prediction Section */}
            <Card
              title='AI Menstrual Cycle Tracker'
              subtitle='Accurate Cycle Predictions and Insights'
              info="Leverage the power of AI to predict your next cycle and receive personalized recommendations on managing symptoms, staying healthy, and understanding your body's patterns."
              link='/home/cycle-tracker'
            />
          </div>
        </div>
      </section>
      <section className='my-24 flex flex-col items-center justify-center align-middle'>
        <h1 className='mb-8 text-3xl font-bold' id='faqs'>
          FAQs
        </h1>
        <div className='container max-w-4xl'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-lg font-bold'>
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className='text-base'>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className='text-lg font-bold'>
                Is it styled?
              </AccordionTrigger>
              <AccordionContent className='text-base'>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className='text-lg font-bold'>
                Is it animated?
              </AccordionTrigger>
              <AccordionContent className='text-base'>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <div className='my-8'>
        <FooterText className='mb-auto' />
      </div>
    </main>
  );
};

export default Index;
