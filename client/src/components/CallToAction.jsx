import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to explore more ?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these popular blogs
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.nomadicmatt.com/travel-blogs/my-current-list-of-favorite-blogs/" target='_blank' rel='noopener noreferrer'>
                    MORE BLOGS
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://media.istockphoto.com/id/1344771294/photo/happy-family-in-masks-enjoying-travel-together.jpg?b=1&s=612x612&w=0&k=20&c=38vWekRjfDJTxPHNm4N-wpgbp-33XOH8JlBL_GvwBlI=" />
        </div>
    </div>
  )
}