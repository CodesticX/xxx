import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SendHorizontal, User, Sparkles, FilePenLine } from 'lucide-react';

export default function AI_Interface() {
  return (
    <div className='mx-auto mt-20 flex flex-col rounded-xl bg-pink-50 px-10'>
      <div className='no-scrollbar flex flex-col gap-5 overflow-y-scroll rounded-xl p-10'>
        <div className='mx-auto flex w-[100%] flex-col justify-center pt-0 md:max-w-[80%] md:px-5 lg:max-w-[80%] xl:pl-0'>
          <div className='relative flex w-full flex-col pt-5'>
            <div className='p mx-auto flex w-full max-w-[1000px] flex-col pb-5 pt-10'>
              {/* AI-Chat Response */}
              <div className='mb-10 flex w-full flex-col'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-5 flex h-[40px] w-[40px] items-center justify-center rounded-full border bg-white p-2'>
                    <User className='text-pink-800' />
                  </div>
                  <div className='flex w-full'>
                    <Input
                      readOnly
                      type='text'
                      value='Write me a paragraph about Mihai Viteazul'
                      className='flex w-full rounded-lg bg-white p-2'
                    />
                    <Button
                      variant='link'
                      className='ml-2 flex items-center justify-center rounded-lg bg-white'
                    >
                      <FilePenLine className='text-pink-800' />
                    </Button>
                  </div>
                </div>
                <div className='flex'>
                  <div className='mr-5 flex h-10 w-10 items-center justify-center rounded-full bg-pink-800 p-2'>
                    <Sparkles className='text-white' />
                  </div>
                  <div className='flex w-full rounded-lg bg-pink-500 p-4 text-white shadow-sm'>
                    <div>
                      <p>
                        <strong>Mihai Viteazul</strong>
                      </p>
                      <p>&nbsp;</p>
                      <p>
                        Mihai Viteazul, also known as Michael the Brave, was a
                        Romanian prince who ruled in the late 16th century. He
                        is celebrated for uniting Wallachia, Transylvania, and
                        Moldavia. His legacy symbolizes unity and courage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI-Chat Response */}
              <div className='mb-10 flex w-full flex-col'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-5 flex h-[40px] w-[40px] items-center justify-center rounded-full border bg-white'>
                    <User className='text-pink-800' />
                  </div>
                  <div className='flex w-full'>
                    <Input
                      readOnly
                      type='text'
                      value='Write me a paragraph about Mihai Viteazul'
                      className='flex w-full rounded-lg bg-white p-2'
                    />
                    <Button
                      variant='link'
                      className='ml-2 flex items-center justify-center rounded-lg bg-white'
                    >
                      <FilePenLine className='text-pink-800' />
                    </Button>
                  </div>
                </div>
                <div className='flex'>
                  <div className='mr-5 flex h-10 w-10 items-center justify-center rounded-full bg-pink-800'>
                    <Sparkles className='text-white' />
                  </div>
                  <div className='flex w-full rounded-lg bg-pink-500 p-4 text-white shadow-sm'>
                    <div>
                      <p>
                        <strong>Mihai Viteazul</strong>
                      </p>
                      <p>&nbsp;</p>
                      <p>
                        Mihai Viteazul, also known as Michael the Brave, was a
                        Romanian prince who ruled in the late 16th century. He
                        is celebrated for uniting Wallachia, Transylvania, and
                        Moldavia. His legacy symbolizes unity and courage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI-Chat Response */}
              <div className='mb-10 flex w-full flex-col'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-5 flex h-[40px] w-[40px] items-center justify-center rounded-full border bg-white'>
                    <User className='text-pink-800' />
                  </div>
                  <div className='flex w-full'>
                    <Input
                      readOnly
                      type='text'
                      value='Write me a paragraph about Mihai Viteazul'
                      className='flex w-full rounded-lg bg-white p-2'
                    />
                    <Button
                      variant='link'
                      className='ml-2 flex items-center justify-center rounded-lg bg-white'
                    >
                      <FilePenLine className='text-pink-800' />
                    </Button>
                  </div>
                </div>
                <div className='flex'>
                  <div className='mr-5 flex h-10 w-10 items-center justify-center rounded-full bg-pink-800'>
                    <Sparkles className='text-white' />
                  </div>
                  <div className='flex w-full rounded-lg bg-pink-500 p-4 text-white shadow-sm'>
                    <div>
                      <p>
                        <strong>Mihai Viteazul</strong>
                      </p>
                      <p>&nbsp;</p>
                      <p>
                        Mihai Viteazul, also known as Michael the Brave, was a
                        Romanian prince who ruled in the late 16th century. He
                        is celebrated for uniting Wallachia, Transylvania, and
                        Moldavia. His legacy symbolizes unity and courage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI-Chat Response */}
              <div className='flex w-full flex-col'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-5 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white'>
                    <User className='text-pink-800' />
                  </div>
                  <div className='flex w-full'>
                    <Input
                      readOnly
                      type='text'
                      value='Write me a paragraph about Mihai Viteazul'
                      className='flex w-full rounded-lg bg-white p-2'
                    />
                    <Button
                      variant='link'
                      className='ml-2 flex items-center justify-center rounded-lg bg-white'
                    >
                      <FilePenLine className='text-pink-800' />
                    </Button>
                  </div>
                </div>
                <div className='flex'>
                  <div className='mr-5 flex h-10 w-10 items-center justify-center rounded-full bg-pink-800'>
                    <Sparkles className='text-white' />
                  </div>
                  <div className='flex w-full rounded-lg bg-pink-500 p-4 text-white shadow-sm'>
                    <div>
                      <p>
                        <strong>Mihai Viteazul</strong>
                      </p>
                      <p>&nbsp;</p>
                      <p>
                        Mihai Viteazul, also known as Michael the Brave, was a
                        Romanian prince who ruled in the late 16th century. He
                        is celebrated for uniting Wallachia, Transylvania, and
                        Moldavia. His legacy symbolizes unity and courage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sticky bottom-0 my-2 flex flex-row place-content-center gap-2 rounded-xl bg-white p-5'>
        <Input
          className='h-fit bg-white text-base md:h-[50px]'
          type='text'
          placeholder='Ask me something...'
        />
        <Button
          className='h-fit w-[50px] bg-pink-800 text-white md:h-[50px]'
          type='submit'
        >
          <SendHorizontal />
        </Button>
      </div>
    </div>
  );
}
