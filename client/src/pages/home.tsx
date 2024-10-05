import { Button } from '@/components/ui/button';
import { IconCheck } from '@tabler/icons-react';
import Background from '@/assets/background-img.jpg';

export default function Home() {
  return (
    <main className='m-8'>
      <section className='container mx-auto my-5 flex max-w-7xl flex-col justify-evenly gap-10 align-top md:flex-row'>
        <div className="h-[250px] rounded-xl font-['Poppins'] text-3xl md:w-[40%]">
          <img
            className='h-full w-full rounded-xl'
            src={Background}
            alt='background image'
          />
          <span className='relative -right-5 -top-60 z-20'>AI-Powered</span>{' '}
          <br />
          <span className='relative -right-5 -top-60 z-20'>ChatBot</span>
          <br />
          <span className='relative -right-5 -top-60 z-20'>Smart & Secure</span>
        </div>
        <div className="flex flex-col justify-between rounded-xl border p-5 font-['Poppins']">
          <p className='text-sm font-normal'>
            Our AI System offers human-like conversations, infinite memory, and
            autonomous operations, setting, a new standard in customer
            interaction
          </p>
          <div className='flex flex-col gap-5 md:flex-row'>
            <Button variant='ghost' className='my-5 rounded-xl border p-10'>
              <IconCheck className='mr-3 text-green-500' />
              Based on data
            </Button>
            <Button variant='ghost' className='my-5 rounded-xl border p-10'>
              <IconCheck className='mr-3 text-green-500' />
              100% Secure
            </Button>
          </div>
        </div>
      </section>

      <section className='mx-auto mb-10 flex max-w-7xl'>
        <div className='flex w-full flex-col items-center justify-center gap-10 align-middle md:flex-row'>
          <div>
            <img
              src='https://dummyimage.com/400x250'
              className='rounded-3xl border backdrop-blur-sm'
            />
            <p className='p-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              veritatis nobis ipsa repellat nulla cum, error saepe eaque
              temporam
            </p>
          </div>
          <div>
            <img
              src='https://dummyimage.com/400x250'
              className='rounded-3xl border backdrop-blur-sm'
            />
            <p className='p-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              veritatis nobis ipsa repellat nulla cum, error saepe eaque
              temporam
            </p>
          </div>
          <div>
            <img
              src='https://dummyimage.com/400x250'
              className='rounded-3xl border backdrop-blur-sm'
            />
            <p className='p-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              veritatis nobis ipsa repellat nulla cum, error saepe eaque
              temporam
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
