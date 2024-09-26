<template>
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center">
      <div class="max-w-screen-xl mx-0 sm:mx-10 bg-white shadow-lg sm:rounded-lg flex flex-col lg:flex-row">
        
        <!-- Login Section -->
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex flex-col justify-center">
          <div class="mt-12 flex flex-col items-center">
            <!-- Google Sign-In Button -->
             <NuxtLink href="https://accounts.google.com/login_hint&response_type=code&redirect_uri=https%3A%2F%2Flogin.zdnet.com%2Flogin%2Fcallback&scope=email%20profile&state=cKGXj0ZkpXmKAYsXcd6RMi0Ncj-UHamY&client_id=491963135080-roleb9snb6d0fb51ukqqj828fdeheg2p.apps.googleusercontent.com&service=lso&o2v=1&ddm=0&flowName=GeneralOAuthFlow">
            <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-lg focus:outline-none">
              <div class="bg-white p-2 rounded-full">
                <svg class="w-4 h-4" viewBox="0 0 533.5 544.3">
                  <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
                  <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" />
                  <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                  <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
                </svg>
              </div>
              <span class="ml-4">Sign In with Google</span>
            </button>
        </NuxtLink>
            <!-- Divider -->
            <div class="my-12 border-b text-center">
              <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or sign in with Cartesian E-mail
              </div>
            </div>
  
            <!-- Login Form -->
            <form class="w-full max-w-md mx-auto">
              <div class="relative z-0 w-full mb-5 group">
                <input type="text" id="floating_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input type="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
  
            <p class="mt-6 text-xs text-gray-600 text-center">
              I agree to abide by Cartesian Kinetics
              <a href="#" class="border-b border-gray-500 border-dotted">Terms of Service</a>
              and its
              <a href="#" class="border-b border-gray-500 border-dotted">Privacy Policy</a>
            </p>
          </div>
        </div>
  
        <!-- Image Section -->
        <div class="hidden lg:flex flex-1 bg-green-100 text-center">
          <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style="background-image: url('https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz');"></div>
        </div>
        
      </div>
    </div>
  </template>
  