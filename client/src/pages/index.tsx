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

      <section className='body-font mx-auto overflow-hidden text-gray-600'>
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

      <section className='mx-auto flex max-w-6xl flex-col'>
        <div className='flex flex-row'>
          <div className='hidden flex-col items-center md:flex'>
            <div className='mr-4 flex w-32 flex-col items-center justify-center rounded border border-gray-300 py-5 uppercase'>
              <div className='text-3xl font-black text-gray-500'>Step 1</div>
              <div className='text-sm text-gray-500'>Idea</div>
            </div>
            <div className='h-full border-l-4 border-transparent'>
              <div className='mr-4 h-full border-l-4 border-dashed border-gray-300'></div>
            </div>
          </div>
          <div className='flex-auto rounded border border-gray-300'>
            <div className='flex flex-col items-center md:flex-row'>
              <div className='flex-auto'>
                <div className='pl-3 pt-3 text-sm font-normal uppercase text-gray-500 md:hidden'>
                  <span className='font-black'>Step 1</span> - Idea
                </div>
                <div className='font p-3 text-3xl text-gray-800'>
                  Find your best idea
                </div>
                <div className='px-3 pb-6'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam facilis, voluptates error alias dolorem praesentium
                  sit soluta iure incidunt labore explicabo eaque, quia
                  architecto veritatis dolores, enim consequatur nihil ipsum.
                </div>
              </div>
              <div className='w-full p-5 md:w-96'>
                <img
                  src='https://image.flaticon.com/icons/svg/1330/1330216.svg'
                  alt='step 1'
                  className='object-scale-down'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-start'>
          <div className='border-r-4 border-t-4 border-transparent'>
            <div className='ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-dashed border-gray-300'></div>
          </div>
          <div className='flex-auto border-t-4 border-transparent'>
            <div className='h-16 border-b-4 border-dashed border-gray-300'></div>
          </div>
          <div className='mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-dashed border-gray-300'></div>
        </div>
        <div className='flex flex-row-reverse'>
          <div className='hidden flex-col items-center md:flex'>
            <div className='ml-4 flex w-32 flex-col items-center justify-center rounded border border-gray-300 py-5 uppercase'>
              <div className='text-3xl font-black text-gray-500'>Step 2</div>
              <div className='text-sm text-gray-500'>Collaboration</div>
            </div>
            <div className='h-full border-r-4 border-transparent'>
              <div className='ml-4 h-full border-l-4 border-dashed border-gray-300'></div>
            </div>
          </div>
          <div className='flex-auto rounded border border-gray-300'>
            <div className='flex flex-col items-center md:flex-row'>
              <div className='flex-auto'>
                <div className='pl-3 pt-3 text-sm font-normal uppercase text-gray-500 md:hidden'>
                  <span className='font-black'>Step 2</span> - Collaboration
                </div>
                <div className='font p-3 text-3xl text-gray-800'>
                  Find your team and collaborate
                </div>
                <div className='px-3 pb-6'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam facilis, voluptates error alias dolorem praesentium
                  sit soluta iure incidunt labore explicabo eaque, quia
                  architecto veritatis dolores, enim consequatur nihil ipsum.
                </div>
              </div>
              <div className='w-full p-5 md:w-96'>
                <img
                  src='https://image.flaticon.com/icons/svg/1330/1330216.svg'
                  alt='step 2'
                  className='object-scale-down'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row-reverse items-start'>
          <div className='border-l-4 border-t-4 border-transparent'>
            <div className='mr-16 h-16 w-16 rounded-br-full border-b-4 border-r-4 border-dashed border-gray-300'></div>
          </div>
          <div className='flex-auto border-t-4 border-transparent'>
            <div className='h-16 border-b-4 border-dashed border-gray-300'></div>
            <div className='ml-16 mt-16 h-16 w-16 rounded-tl-full border-l-4 border-t-4 border-dashed border-gray-300'></div>
          </div>
          <div className='flex flex-row'>
            <div className='hidden flex-col items-center md:flex'>
              <div className='mr-4 flex w-32 flex-col items-center justify-center rounded border border-gray-300 py-5 uppercase'>
                <div className='text-3xl font-black text-gray-500'>Step 3</div>
                <div className='text-sm text-gray-500'>Planification</div>
              </div>
              <div className='h-full border-l-4 border-transparent'>
                <div className='mr-4 h-full border-l-4 border-dashed border-gray-300'></div>
              </div>
            </div>
            <div className='flex-auto rounded border border-gray-300'>
              <div className='flex flex-col items-center md:flex-row'>
                <div className='flex-auto'>
                  <div className='pl-3 pt-3 text-sm font-normal uppercase text-gray-500 md:hidden'>
                    <span className='font-black'>Step 3</span> - Planification
                  </div>
                  <div className='font p-3 text-3xl text-gray-800'>
                    Make a good plan and prepare tasks
                  </div>
                  <div className='px-3 pb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim consequatur nihil ipsum.
                  </div>
                </div>
                <div className='w-full p-5 md:w-96'>
                  <img
                    src='https://image.flaticon.com/icons/svg/1330/1330216.svg'
                    alt='step 3'
                    className='object-scale-down'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row items-start'>
            <div className='border-r-4 border-t-4 border-transparent'>
              <div className='ml-16 h-16 w-16 rounded-bl-full border-b-4 border-l-4 border-dashed border-gray-300'></div>
            </div>
            <div className='flex-auto border-t-4 border-transparent'>
              <div className='h-16 border-b-4 border-dashed border-gray-300'></div>
            </div>
            <div className='mr-16 mt-16 h-16 w-16 rounded-tr-full border-r-4 border-t-4 border-dashed border-gray-300'></div>
          </div>
          <div className='flex flex-row-reverse'>
            <div className='hidden flex-col items-center md:flex'>
              <div className='ml-4 flex w-32 flex-col items-center justify-center rounded border border-gray-300 py-5 uppercase'>
                <div className='text-3xl font-black text-gray-500'>Step 4</div>
                <div className='text-sm text-gray-500'>Implementation</div>
              </div>
            </div>
            <div className='flex-auto rounded border border-gray-300'>
              <div className='flex flex-col items-center md:flex-row'>
                <div className='flex-auto'>
                  <div className='pl-3 pt-3 text-sm font-normal uppercase text-gray-500 md:hidden'>
                    <span className='font-black'>Step 4</span> - Implementation
                  </div>
                  <div className='font p-3 text-3xl text-gray-800'>
                    Execute, impletement your solution
                  </div>
                  <div className='px-3 pb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim consequatur nihil ipsum.
                  </div>
                </div>
                <div className='w-full p-5 md:w-96'>
                  <img
                    src='https://image.flaticon.com/icons/svg/1330/1330216.svg'
                    alt='step 4'
                    className='object-scale-down'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-auto flex flex-col justify-center'>
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

      <section className='my-8'>
        <FooterText className='mb-auto' />
      </section>

    </main>
  );
};

export default Index;
