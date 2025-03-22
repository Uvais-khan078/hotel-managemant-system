export default function Orderdetails() {
    return (
        <>
<div class="bg-gray-100">
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h1 class="text-2xl font-bold">Track your order with <br/> <span class="text-green-600">Delivery Agent</span></h1>

        <div class="mt-4 bg-green-100 p-4 rounded-lg">
            <p class="text-green-700 text-xl font-semibold">It's on the Way!</p>
            <p class="text-green-500">Departed carrier facility</p>
            <p class="text-gray-600 text-sm">NOV 07 12:44 AM | AVENEL, NJ</p>

            <div class="mt-4 flex items-center">
                <div class="flex-1 bg-green-600 h-2 rounded-full"></div>
                <div class="w-4 h-4 bg-green-600 rounded-full ml-2"></div>
                <div class="flex-1 bg-gray-300 h-2 rounded-full"></div>
            </div>

            <div class="flex justify-between text-sm mt-2 text-gray-700">
                <p class="line-through">Order Placed<br/>NOV 06</p>
                <p class="font-bold text-green-600">Shipped<br/>NOV 06</p>
                <p>Out for Delivery</p>
                <p>Est Delivery<br/>NOV 13</p>
            </div>
        </div>
    </div>
    
    <div class="max-w-4xl mx-auto p-6 mt-6">
        <img src="https://media.discordapp.net/attachments/1352706628163473522/1352707318734913599/map.png?ex=67defe5c&is=67ddacdc&hm=9c8f4c9f1efa64d4ad540aa4edb908cddbb522eb49d1775ca24721b73782fd5e&=&format=webp&quality=lossless&width=1168&height=699" alt="Tracking Map" class="w-full rounded-lg shadow-md"/>
    </div>
    
    <footer class="bg-white p-6 mt-10 text-center text-gray-600 shadow-md">
        <p>Site name</p>
        <div class="grid grid-cols-3 gap-4 mt-4">
            <div>
                <p class="font-bold">Topic</p>
                <p>Page</p>
                <p>Page</p>
                <p>Page</p>
            </div>
            <div>
                <p class="font-bold">Topic</p>
                <p>Page</p>
                <p>Page</p>
                <p>Page</p>
            </div>
            <div>
                <p class="font-bold">Topic</p>
                <p>Page</p>
                <p>Page</p>
                <p>Page</p>
            </div>
        </div>
        <div class="flex justify-center space-x-4 mt-4">
            <a href="#" class="text-gray-500">&#xf09a;</a>
            <a href="#" class="text-gray-500">&#xf16d;</a>
            <a href="#" class="text-gray-500">&#xf08c;</a>
            <a href="#" class="text-gray-500">&#xf16a;</a>
        </div>
    </footer>
</div>
        </>
    )
}