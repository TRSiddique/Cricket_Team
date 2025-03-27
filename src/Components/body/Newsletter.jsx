
import bgShadow from '../../assets/bg-shadow.png';

const Newsletter = () => {

  return (
    <div 
  className="flex flex-col items-center w-9/12 mx-auto bg-white py-10 border bg-cover bg-center my-[-100px] h-80 text-center" 
  style={{ backgroundImage: `url(${bgShadow})` }}
>

      <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
      <p> Get the latest updates and right in your inbox!</p>
      <div className='flex items-center justify-between gap-4 mt-5'>
      <input 
  type="text" 
  placeholder="Enter your email" 
  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
<button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
  Subscribe
</button>
      </div>
    </div>
  );
};

export default Newsletter;
