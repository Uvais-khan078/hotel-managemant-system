export default function Mealplaning(){
    function clearList() {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
    }
    return (
        <>
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none">

                  </div>
                </div>
                
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                  <p class="leading-relaxed">Potatoes - 1 per person is more than enough!
                    1qt/ltr cooking oil - peanut oil is best
                    Seasonings - I just used salt, but this is where you can get creative!
                    Knife for cutting
                    Colander for rinsing
                    Pot for frying </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                  <p class="leading-relaxed">If you plan to keep the skins on (why wouldn't you!), scrub the potatoes well.

                    Cut potatoes into 1/4" fry shapes. Or fatter if you like "steak fries." I like em skinny and crisp!
                    
                    Rinse cut potatoes in a large bowl with lots of cold running water and cover with water by and ice. Refrigerate at least 30 minutes.
                    </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                  <p class="leading-relaxed"> In a large pan (or an electric deep fryer), heat oil over medium-low heat.

                    If you have a candy thermometer (recommended), heat until the thermometer registers 325oF (165 C).
                    
                    Make sure that you have at least 3 inches of space between the top of the oil and the top of the pan, as the oil will bubble up and could splatter when the fries are added.</p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                  <p class="leading-relaxed">Drain ice water from cut fries and wrap potatos in a clean tea towel and thoroughly pat dry.

                    Increase the heat to medium-high and add fries, a handful at a time, to the hot oil.
                    
                    Fry, stirring occasionally, until potatoes are soft and limp, about 10 minutes.
                    
                    Using a slotted spoon or sieve, carefully remove fries from the oil and set aside to drain on paper towels.Let rest for 10-20 minutesor so.</p>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                  <p class="leading-relaxed">When ready to serve the French fries, reheat the oil to 350oF (175 C).

                    Transfer the potatoes to the hot oil and fry again, stirring frequently, until you like the way they look, 1-5 minutes. I like em almost burnt, so I left them in pretty long.
                    
                    Transfer to paper towels again and sprinkle with seasoning to taste. Serve immediately.
                    
                    So so very yummy.
                    </p>
                </div>
              </div>
            </div>
            <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://www.thespruceeats.com/thmb/dQ_f4kFvCCaSzY8OaeWMlA1LWwk=/3356x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-homemade-french-fries-2215971-step-07-3e0fce548da24ac4b22fc7696ec4d8db.jpg" alt="step"/>
          </div>
        </div>
      </section>


<section class="bg-gray-100 py-10">
    <div class="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">🍟 French Fries Shopping List</h2>

        <ul class="space-y-3">
            <li class="flex items-center space-x-3">
                <input type="checkbox" id="potatoes" class="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"/>
                <label for="potatoes" class="text-lg">Potatoes</label>
            </li>
            <li class="flex items-center space-x-3">
                <input type="checkbox" id="oil" class="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"/>
                <label for="oil" class="text-lg">Cooking Oil</label>
            </li>
            <li class="flex items-center space-x-3">
                <input type="checkbox" id="salt" class="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"/>
                <label for="salt" class="text-lg">Salt</label>
            </li>
            <li class="flex items-center space-x-3">
                <input type="checkbox" id="pepper" class="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"/>
                <label for="pepper" class="text-lg">Black Pepper</label>
            </li>
            <li class="flex items-center space-x-3">
                <input type="checkbox" id="ketchup" class="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"/>
                <label for="ketchup" class="text-lg">Ketchup</label>
            </li>
        </ul>

        <button onclick="clearList()" class="mt-5 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
            Clear List
        </button>
    </div>
</section>
</>
    )
}