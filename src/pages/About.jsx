
import { assets } from '../assets/assets';
import Title from './../components/Title';
import { NewsLetterBox } from './../components/NewsLetterBox';
const About = () => {
  return (
    <div>
      
      <div className="text-3xl text-center pt-8 border-t">
           <Title text1={'ACERCA DE' } text2={'NOSOTROS'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img 
          className='w-full md:max-w-[450px]'
          src= {assets.about_img} alt="imagen de ropa de una collección"
          />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, minus aut veniam asperiores vero nostrum eos qui optio quibusdam suscipit ex tempora sunt ducimus eaque natus id. Quos, deleniti harum!

               </p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque dolorum aperiam harum eum delectus optio nemo velit omnis, dignissimos quo sequi neque et quidem consequatur sint possimus necessitatibus dolor!

               </p>
               <b className='text-gray-800'>Nuestra Misión</b>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi molestias itaque dolore aliquam quod error? Error, aspernatur laborum qui delectus veniam sequi. Ratione dolorum, quos expedita cumque iure numquam eaque.</p>

          </div>

      </div>

      <div className='text-3xl py-4'>
        <Title text1={'POR QUÉ ' } text2={'ELEGIRNOS'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Garantía de calidad:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas saepe consequuntur officiis dignissimos.
              
             </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Conveniencia:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas saepe consequuntur officiis dignissimos, inventore.
              
             </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Servicios de atención al cliente excepcionales:</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas saepe consequuntur officiis dignissimos, inventore.
              
             </p>
          </div>

      </div>

      <NewsLetterBox />


    </div>
  )
}

export default About