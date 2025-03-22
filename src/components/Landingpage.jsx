import { Link } from "react-router-dom";
export default function Landingpage() {
    return (
        <>
        <div class="bg-gray-100">
        <nav class="flex justify-between bg-white p-4 shadow-md">
          <h1 class="text-lg font-bold">Restaurant Manager</h1>
          <div>
            <Link to="/signup"class="rounded bg-black px-3 py-1 text-white">log-in</Link>
          </div>
        </nav>
      
        <header class="relative">
          <img   src="https://media.discordapp.net/attachments/1352706628163473522/1352707420987719761/f2.jpg?ex=67defe75&is=67ddacf5&hm=303d03b762b7448b541be2ecf02561b5f38dd47db7ef7de627b2e57044ad1616&=&format=webp&width=874&height=699" alt="Food" class=" h-150 w-full object-cover" />
          <div class="absolute inset-0 flex flex-col items-center justify-center text-4xl font-bold text-white">
            <h2 class=" text-5xl " >Restaurant management system </h2>
            <p class="text-2xl">Manage your restaurant in esay and effective Way</p>
          </div>
        </header>
      
        <section class="grid grid-cols-3 gap-4 p-6">
         <Link to="/restaurantname" >
          <div class="relative">
            <img src="https://media.discordapp.net/attachments/1352706628163473522/1352707319510859816/biryani.webp?ex=67defe5d&is=67ddacdd&hm=1a8ae5e3a4a67f1171f706988e1314abf5e9c06956253d4225fdc7b80693b9ad&=&format=webp&width=960&height=640" class="h-60 w-full object-cover" />
            <p class="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">Zayka</p>
          </div></Link>
          <div class="relative">
            <img src="https://media.discordapp.net/attachments/1352706628163473522/1352707317661171763/desert.webp?ex=67defe5c&is=67ddacdc&hm=a8c3a57f4f705d02428545fe1fdf7e7a59bde3c3d2ecfb5c99e0a9de5159d4ea&=&format=webp&width=675&height=450" class="h-60 w-full object-cover" />
            <p class="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">Esey bite</p>
          </div>
          <div class="relative">
            <img src="https://media.discordapp.net/attachments/1352706628163473522/1352707319020130315/mojito.webp?ex=67defe5c&is=67ddacdc&hm=fb586f434de8528faee4980d1a5a33af128ce4450531e05a6a299b75cd1fcdf9&=&format=webp&width=625&height=416" class="h-60 w-full object-cover" />
            <p class="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">Taste hub</p>
          </div>
        </section>
      
        <div class="my-6 text-center">
          <h3 class="text-2xl font-bold">Book your order</h3>
          <span class ></span>
          <Link to="/Subscription" class=" mt-3 rounded bg-b+lack px-5 py-2 text-white">subscribe now!</Link>
        </div>
      
        <section class="bg-white p-6 shadow-md">
          <h3 class="text-xl font-bold">Our features</h3>
          <div class="mt-4 grid grid-cols-3 gap-4">
            <div class="rounded bg-black p-4 text-white">complete management application only @9999</div>
            <div class="rounded bg-black p-4 text-white">Flexible payment options</div>
            <div class="rounded bg-black p-4 text-white">Award winning customer service</div>
            <div class="rounded bg-black p-4 text-white">Friendly custumer agents</div>
            <div class="rounded bg-black p-4 text-white">24 X 7 custumer service</div>
            <div class="rounded bg-black p-4 text-white">Ultimate tasty food options</div>
          </div>
        </section>
      
        <section class="p-6 text-center">
          <h3 class="text-xl font-bold">Share your recipe with us</h3>
          <input type="text" placeholder="Your recipe" class="w-1/2 rounded border p-2" />
          <Link to="/recipe" class="ml-2 rounded bg-black px-4 py-2 text-white">Share</Link>
        </section><section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col">
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
          <div class="w-24 h-full bg-indigo-500"></div>
        </div>
        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
          <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
        </div>
      </div>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://img.freepik.com/free-photo/woman-cooking-kitchen_144627-31465.jpg"/>
          </div>
          <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
          <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://th.bing.com/th/id/OIP.vgvKTNc1qeJeC6hkYt-jFQHaFj?rs=1&pid=ImgDetMain"/>
          </div>
          <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
          <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <img alt="content" class="object-cover object-center h-full w-full" src="https://wallpaperaccess.com/full/8734406.jpg"/>
          </div>
          <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
          <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>

      
        <footer class="p-6 text-center text-gray-600">
          <p>Restaurant Management System &copy; 2025</p>
          <a href="">made with ........... </a>
        </footer>
      </div>
      </>
    )
}