export default function Cart() {
    return (
        <>
        <body class="bg-gray-100 p-4">
  <div class="mx-auto max-w-md rounded-md bg-gray-300 p-4 shadow-md">
    <h2 class="flex items-center gap-2 text-xl font-semibold">CART <span>🛒</span></h2>

    <div class="mt-4 rounded-md bg-white p-4">
      <div class="mb-4 flex items-center justify-between">
        <p class="text-lg font-semibold">Chiken Biryani</p>
        <div class="flex items-center space-x-2">
          <button class="rounded bg-gray-200 px-2 py-1">-</button>
          <span>1</span>
          <button class="rounded bg-gray-200 px-2 py-1">+</button>
        </div>
      </div>

      <div class="rounded-md bg-pink-100 p-4">
        <p class="text-lg font-semibold">Bill Details</p>
        <div class="mt-2 flex justify-between">
          <span>Item total</span>
          <span>200rs</span>
        </div>
        <div class="mt-2 flex justify-between">
          <span>Delivery fee | 11.2 km</span>
          <span>78rs</span>
        </div>
        <div class="mt-2 flex justify-between">
          <span>Delivery tip</span>
          <span>(optional)</span>
        </div>
        <div class="mt-2 flex justify-between">
          <span>GST & others</span>
          <span>17.08rs</span>
        </div>
        <div class="mt-4 flex justify-between text-lg font-semibold">
          <span>TO PAY</span>
          <span>295.08rs</span>
        </div>
      </div>
    </div>

    <div class="mt-4 flex flex-col gap-2">
      <button class="w-full rounded bg-black py-2 text-white">Pay Now!</button>
      <button class="w-full rounded bg-black py-2 text-white">Track your order</button>
    </div>
  </div>

  <footer class="mt-8 text-center text-sm text-gray-600">
    <p>Site name</p>
    <div class="mt-2 flex justify-center gap-4">
      <span>📘</span>
      <span>🔗</span>
      <span>▶</span>
      <span>📸</span>
    </div>
  </footer>
</body>

        </>
    )
}