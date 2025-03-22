import { Link } from "react-router-dom";

export default function Recipe(){
    return (
        <>
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <span class="ml-3 text-xl">Zaika Restraunt</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Latest</a>
            <a class="mr-5 hover:text-gray-900">Springs</a>
            <a class="mr-5 hover:text-gray-900">Deserts</a>
            <a class="mr-5 hover:text-gray-900">Snacks</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Search
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="data:image/jpeg;base64,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" alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">VEGETARIAN</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Multy Grain Bread</h1>
                  <p class="leading-relaxed mb-3">This is wholesome multigrain bread with an irresistibly soft and fluffy interior. For best success, take the time to review the recipe notes before starting. Though not required, an instant read thermometer is helpful in a few of these steps.</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://wallpapercave.com/wp/wp4392643.jpg" alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">VEGETARIAN</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">French Fries</h1>
                  <p class="leading-relaxed mb-3">French fries are served hot, either soft or crispy, and are generally eaten as part of lunch or dinner or by themselves as a snack, and they commonly appear on the menus of diners, fast food restaurants, pubs, and bars.  </p>
                  <div class="flex items-center flex-wrap">
                    <Link to="/Mealplanning"  class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.tasteofhome.com/wp-content/uploads/2019/08/aloo-chana-chaat-street-food-kolkata-shutterstock_705349216.jpg?w=1280" alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">VEGETARIAN</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Aalu Chaat</h1>
                  <p class="leading-relaxed mb-3"> Aloo Chaat is a popular Indian street food snack made with potatoes, sweet sour spicy chutneys, sev and coriander leaves. Aloo is a Hindi word for potatoes and Chaat is a dish with a mélange of sweet, sour and hot tastes.</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-1-720x960.jpg" alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">DRINKS</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">LASSI</h1>
                  <p class="leading-relaxed mb-3">Lassi is a yogurt–based beverage with a smoothie-like consistency. It has been called "the most popular and traditional yogurt-based drink" in India. It has also been described as the form in which yogurt "is most cherished and unbeatably popular in Punjab", its "best-loved summer drink".</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://th.bing.com/th/id/OIP._9Pg_a_-KV1UvKrGu_OH4AHaLH?w=124&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">VEGETARIAN</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">White Sause Pasta</h1>
                  <p class="leading-relaxed mb-3">White Sauce Pasta is a creamy and indulgent Italian-inspired dish made with cooked pasta tossed in a rich, velvety and seasoned béchamel sauce prepared from butter, flour and milk, flavored with garlic, herbs, and cheese, creating a comforting and flavorful meal. </p>
                  <div class="flex items-center flex-wrap">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src=" https://th.bing.com/th/id/OIP.XoG5pIV99RBkZQ1t7clCBwHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">VEGETARIAN</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Hakka Nodles</h1>
                  <p class="leading-relaxed mb-3">This restaurant style Hakka Noodles is everyone’s favorite. It is a popular Indo-Chinese dish of stir fried noodles, with vegetables and sauces. Vegetable Hakka Noodles are one of the most ordered in the Indian restaurants. But did you know, making them at home is very simple?</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://th.bing.com/th/id/OIP.wX7G5f3NdH-2HuqdLGSc3AHaLG?w=133&h=200&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">DRINKS</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Blue Lagoon</h1>
                  <p class="leading-relaxed mb-3">Just mix vodka, blue curaçao, and lemonade and you’ll have a sweetly tart and delightfully citrusy cocktail ready in no time. </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://th.bing.com/th/id/OIP.uuaB5C8ZhJR02CXloMpvPwHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7 " alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">VEGETARIAN</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Paneer Tikka</h1>
                  <p class="leading-relaxed mb-3">Tikka basically means anything that is marinated and then baked or grilled or fried and paneer tikka is a popular vegetarian tikka dish. </p>
                  <div class="flex items-center flex-wrap">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://th.bing.com/th/id/OIP.OAQtnL85qnMloPzKdXySvAHaE8?w=258&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">VEGETARIAN</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Chole Bhatore</h1>
                  <p class="leading-relaxed mb-3">Chole bhature is often eaten as a breakfast dish, sometimes accompanied with lassi. It can also be street food or a complete meal and may be accompanied with onions, pickled carrots, green chutney or achaar.</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Share Your Own Recipe with us! </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">New generation is looking for new recipes and wants to feature YOURS on the Our website! Got a recipe that's been passed down in the family? A new recipe you came up with? </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">Recipe Name</label>
                  <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Prepared By</label>
                  <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">Procedure</label>
                  <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">👉Submit!👈</button>
              </div>
      
            </div>
          </div>
        </div>
      </section>


      
      
      
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
            <span class="ml-3 text-xl">Zaika Restraunt</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 zaika Restraunt —
            <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Team initiators</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>

</>
    )
}