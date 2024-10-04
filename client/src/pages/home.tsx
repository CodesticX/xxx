import { Button } from '@/components/ui/button';
import { IconCheck } from '@tabler/icons-react';

export default function Home() {
  return (
    <main>
      <div className='flex flex-row justify-evenly gap-10'>
        <div className='p-5'>
          <span>AI-Powered</span>
          <br />
          <img src='' />
          <span>ChatBot</span>
          <br />
          <span>Smart & Secure</span>
        </div>
        <div className='p-5'>
          <p className='text-sm font-normal'>
            Our AI System offers human-like conversations, infinite memory, and
            autonomous operations, setting, a new standard in customer
            interaction
          </p>
          <div className='flex gap-5'>
            <Button variant='ghost'>
              <IconCheck className='mr-3 text-green-500' />
              Based on data
            </Button>
            <Button variant='ghost'>
              <IconCheck className='mr-3 text-green-500' />
              100% Secure
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
