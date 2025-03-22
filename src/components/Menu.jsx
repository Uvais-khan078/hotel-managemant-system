import { Link } from "react-router-dom";

export default function Menu() {


    return (
    <>
    <div class="bg-gray-100">
  <header class="flex justify-between bg-white p-4 shadow-md">
    <h1 class="text-lg font-semibold">zaika restaurant</h1>
    <nav>
      <Link to="/history" class="mr-4">Order history</Link>
      <Link to="/ordertrack" class="mr-4">Order status</Link>
      <Link to="/cart" class="rounded bg-black px-4 py-2 text-white">View cart</Link>
    </nav>
  </header>

  <main class="mx-auto my-8 max-w-5xl space-y-6">
    <div class="flex rounded-lg bg-white p-4 shadow-md">
      <img src="https://media.discordapp.net/attachments/1352706628163473522/1352707420287139900/momos.webp?ex=67defe75&is=67ddacf5&hm=a3e5ce8bffbd7716d125121a8ddccf354df98dbe9a4d29d62ea83f84e8245cd9&=&format=webp&width=783&height=521" alt="Steam Momos" class="h-32 w-48 rounded-lg object-cover" />
      <div class="ml-4">
        <h2 class="text-xl font-bold">Steam Momos</h2>
        <p class="text-gray-500">VEG</p>
        <p class="text-lg font-semibold">40 RS (half)</p>
        <p class="text-gray-500">half plate 4 pcs full plate 8pcs.</p>
        <button class="mt-2 rounded bg-black px-4 py-2 text-white">Add to cart</button>
      </div>
    </div>

    <div class="flex rounded-lg bg-white p-4 shadow-md">
      <img src="https://media.discordapp.net/attachments/1352706628163473522/1352707419842805791/fries.webp?ex=67defe74&is=67ddacf4&hm=6501bd938b6b7c0c5b10f7afdca53193c2ff9c37e5977f115d1cd8dbeafaeaf9&=&format=webp&width=800&height=534" alt="French Fries" class="h-32 w-48 rounded-lg object-cover" />
      <div class="ml-4">
        <h2 class="text-xl font-bold">French Fries</h2>
        <p class="text-gray-500">VEG</p>
        <p class="text-lg font-semibold">120 RS (half)</p>
        <p class="text-gray-500">half plate 100gm full plate 2250gm.</p>
        <button class="mt-2 rounded bg-black px-4 py-2 text-white">Add to cart</button>
      </div>
    </div>

    <div class="flex rounded-lg bg-white p-4 shadow-md">
      <img src="https://media.discordapp.net/attachments/1352706628163473522/1352707319510859816/biryani.webp?ex=67defe5d&is=67ddacdd&hm=1a8ae5e3a4a67f1171f706988e1314abf5e9c06956253d4225fdc7b80693b9ad&=&format=webp&width=960&height=640" alt="Chicken Biryani" class="h-32 w-48 rounded-lg object-cover" />
      <div class="ml-4">
        <h2 class="text-xl font-bold">Chicken Biryani</h2>
        <p class="text-gray-500">NON-VEG</p>
        <p class="text-lg font-semibold">120 RS (Quatar)</p>
        <p class="text-gray-500">quatar 250 gm half 500gm full 1kg</p>
        <button class="mt-2 rounded bg-black px-4 py-2 text-white">Add to cart</button>
      </div>
    </div>

    <div class="flex rounded-lg bg-white p-4 shadow-md">
      <img src="https://cdn.discordapp.com/attachments/1352706628163473522/1352707319020130315/mojito.webp?ex=67defe5c&is=67ddacdc&hm=fb586f434de8528faee4980d1a5a33af128ce4450531e05a6a299b75cd1fcdf9&=&format=webp&width=625&height=416" alt="Mojito" class="h-32 w-48 rounded-lg object-cover" />
      <div class="ml-4">
        <h2 class="text-xl font-bold">Mojito</h2>
        <p class="text-gray-500">Drink</p>
        <p class="text-lg font-semibold">40 RS</p>
        <p class="text-gray-500">450 ml</p>
        <button class="mt-2 rounded bg-black px-4 py-2 text-white">Add to cart</button>
      </div>
    </div>
  </main>

  <footer class="mt-8 bg-white p-4 text-center shadow-md">
    <p>&copy; 2025 zaika restaurant</p>
  </footer>
</div>

  
    </>
    )
  }
  