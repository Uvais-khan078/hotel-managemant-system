import { Link } from "react-router-dom";


export default function restrauntdetails() {


  return (
  <>
  <div class="bg-gray-100">
  <nav class="flex justify-between bg-white p-4 shadow-md">
    <h1 class="text-lg font-bold">ZAIKA RESTAURANT</h1>
    <div>
      <Link to="/login" class="mr-4">log-in</Link>
      <Link to="/signup"class="rounded bg-black px-3 py-1 text-white">Signup</Link>
    </div>
  </nav>

  <header class="relative">
    <img   src="https://media.discordapp.net/attachments/1352706628163473522/1352707420987719761/f2.jpg?ex=67defe75&is=67ddacf5&hm=303d03b762b7448b541be2ecf02561b5f38dd47db7ef7de627b2e57044ad1616&=&format=webp&width=874&height=699" alt="Food" class=" h-150 w-full object-cover" />
    <div class="absolute inset-0 flex flex-col items-center justify-center text-4xl font-bold text-white">
      <h2 class=" text-5xl " >ZAIKA food restaurant</h2>
      <p class="text-2xl">The real taste you need</p>
    </div>
  </header>

  <section class="grid grid-cols-3 gap-4 p-6">
    <div class="relative">
      <img src="https://media.discordapp.net/attachments/1352706628163473522/1352707319510859816/biryani.webp?ex=67defe5d&is=67ddacdd&hm=1a8ae5e3a4a67f1171f706988e1314abf5e9c06956253d4225fdc7b80693b9ad&=&format=webp&width=960&height=640" class="h-60 w-full object-cover" />
      <p class="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">Non-veg</p>
    </div>
    <div class="relative">
      <img src="https://media.discordapp.net/attachments/1352706628163473522/1352707317661171763/desert.webp?ex=67defe5c&is=67ddacdc&hm=a8c3a57f4f705d02428545fe1fdf7e7a59bde3c3d2ecfb5c99e0a9de5159d4ea&=&format=webp&width=675&height=450" class="h-60 w-full object-cover" />
      <p class="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">Dessert</p>
    </div>
    <div class="relative">
      <img src="https://media.discordapp.net/attachments/1352706628163473522/1352707319020130315/mojito.webp?ex=67defe5c&is=67ddacdc&hm=fb586f434de8528faee4980d1a5a33af128ce4450531e05a6a299b75cd1fcdf9&=&format=webp&width=625&height=416" class="h-60 w-full object-cover" />
      <p class="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">Mojitos</p>
    </div>
  </section>

  <div class="my-6 text-center">
    <h3 class="text-2xl font-bold">Book your order</h3>
    <span class ></span>
    <Link to="/menu" class=" mt-3 rounded bg-b+lack px-5 py-2 text-white">ORDER NOW !</Link>
  </div>

  <section class="bg-white p-6 shadow-md">
    <h3 class="text-xl font-bold">Our features</h3>
    <div class="mt-4 grid grid-cols-3 gap-4">
      <div class="rounded bg-black p-4 text-white">Free shipping upto @199</div>
      <div class="rounded bg-black p-4 text-white">Flexible payment options</div>
      <div class="rounded bg-black p-4 text-white">Award winning customer service</div>
      <div class="rounded bg-black p-4 text-white">Friendly delivery agents</div>
      <div class="rounded bg-black p-4 text-white">Dine-in with your family</div>
      <div class="rounded bg-black p-4 text-white">Ultimate tasty food options</div>
    </div>
  </section>

  <section class="p-6 text-center">
    <h3 class="text-xl font-bold">Share your recipe with us</h3>
    <input type="text" placeholder="Your recipe" class="w-1/2 rounded border p-2" />
    <Link to="/recipe" class="ml-2 rounded bg-black px-4 py-2 text-white">Share</Link>
  </section>

  <footer class="p-6 text-center text-gray-600">
    <p>Zaika Restaurant &copy; 2025</p>
    <a href="">made with ........... </a>
  </footer>
</div>

  </>
  )
}
