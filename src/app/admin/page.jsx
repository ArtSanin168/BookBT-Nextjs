const AdminDashboard = () => {
  return (
    <div>
      <main class="flex h-full overflow-hidden pt-20 -z-10">

        <div class="flex-grow p-4 ">
          <div class="w-full px-6 py-6 mx-auto">
            <div class="flex flex-wrap -mx-3">
              <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div class="flex-auto p-4">
                    <div class="flex flex-row -mx-3">
                      <div class="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:opacity-60">
                            Today's Booking
                          </p>
                          <h5 class="mb-2 font-bold">$53,000</h5>
                          <p class="mb-0 dark:opacity-60">
                            <span class="text-sm font-bold leading-normal text-emerald-500">
                              +55%
                            </span>
                            since yesterday
                          </p>
                        </div>
                      </div>
                      <div class="px-3 text-right basis-1/3">
                        <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                          <i class="fas fa-ticket text-lg relative top-2 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div class="flex-auto p-4">
                    <div class="flex flex-row -mx-3">
                      <div class="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:opacity-60">
                            Today's TRAFFIC
                          </p>
                          <h5 class="mb-2 font-bold">2,300</h5>
                          <p class="mb-0 dark:opacity-60">
                            <span class="text-sm font-bold leading-normal text-emerald-500">
                              +3%
                            </span>
                            since last week
                          </p>
                        </div>
                      </div>
                      <div class="px-3 text-right basis-1/3">
                        <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                          <i class="fas fa-route text-lg relative top-2 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div class="flex-auto p-4">
                    <div class="flex flex-row -mx-3">
                      <div class="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:opacity-60">
                            New taxi
                          </p>
                          <h5 class="mb-2 font-bold">+3,462</h5>
                          <p class="mb-0 dark:opacity-60">
                            <span class="text-sm font-bold leading-normal text-red-600">
                              -2%
                            </span>
                            since last quarter
                          </p>
                        </div>
                      </div>
                      <div class="px-3 text-right basis-1/3">
                        <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                          <i class="fas fa-car text-lg relative top-2.5 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div class="flex-auto p-4">
                    <div class="flex flex-row -mx-3">
                      <div class="flex-none w-2/3 max-w-full px-3">
                        <div>
                          <p class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:opacity-60">
                            new user
                          </p>
                          <h5 class="mb-2 font-bold">$103,430</h5>
                          <p class="mb-0 dark:opacity-60">
                            <span class="text-sm font-bold leading-normal text-emerald-500">
                              +5%
                            </span>
                            than last month
                          </p>
                        </div>
                      </div>
                      <div class="px-3 text-right basis-1/3">
                        <div class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                          <i class="fas fa-users text-lg relative top-2.5 text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap mt-6 -mx-3">
              <div class="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
                <div class="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                  <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
                    <h6 class="capitalize">Booking overview</h6>
                    <p class="mb-0 text-sm leading-normal dark:opacity-60">
                      <i class="fa fa-arrow-up text-emerald-500"></i>
                      <span class="font-semibold">4% more</span> in 2021
                    </p>
                  </div>
                  <div class="flex-auto p-4">
                    <div>
                      <canvas id="chart-line" height="300"></canvas>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full max-w-full px-3 lg:w-4/12 lg:flex-none ml-12">
                <div
                  slider
                  class="relative w-full h-full overflow-hidden rounded-2xl"
                >
                  <div
                    slide
                    class="absolute w-full h-full transition-all duration-500"
                  >
                    <img
                      class="object-cover h-full"
                      src="https://img.freepik.com/free-vector/urban-bus-bus-stop-with-flat-design_23-2147832442.jpg"
                      alt="carousel image"
                    />
                    <div class="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5">
                      <div class="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                        <i class="top-0.75 text-xxs relative text-slate-700 ni ni-camera-compact"></i>
                      </div>
                      <h5 class="mb-1 text-white">Get started with Argon</h5>
                      <p class="dark:opacity-80 text-white">
                        There’s nothing I really wanted to do in life that I
                        wasn’t able to get good at.
                      </p>
                    </div>
                  </div>

                  <button
                    btn-next
                    class="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-right active:scale-110 top-6 right-4"
                  ></button>
                  <button
                    btn-prev
                    class="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-left active:scale-110 top-6 right-16"
                  ></button>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap mt-6 -mx-3">
              <div class="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
                <div class="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl border-black-125 rounded-2xl bg-clip-border">
                  <div class="p-4 pb-0 mb-0 rounded-t-4">
                    <div class="flex justify-between">
                      <h6 class="mb-2">Book by Province</h6>
                    </div>
                  </div>
                  <div class="overflow-x-auto">
                    <table class="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
                      <tbody>
                        <tr>
                          <td class="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                            <div class="flex items-center px-2 py-1">
                              <div>
                                <img
                                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPhnom_Penh&psig=AOvVaw1cT9KuJ-edHZ1Vag-4KhFp&ust=1708849260573000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDW7NzFw4QDFQAAAAAdAAAAABAE"
                                  alt="Province flag"
                                />
                              </div>
                              <div class="ml-6">
                                <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                  Province:
                                </p>
                                <h6 class="mb-0 text-sm leading-normal">
                                  Takeo
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div class="text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Book:
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">2500</h6>
                            </div>
                          </td>
                          <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div class="text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Travel:
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">
                                230,900
                              </h6>
                            </div>
                          </td>
                          <td class="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div class="flex-1 text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Passenger:
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">29.9%</h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                            <div class="flex items-center px-2 py-1">
                              <div>
                                <img
                                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPhnom_Penh&psig=AOvVaw1cT9KuJ-edHZ1Vag-4KhFp&ust=1708849260573000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDW7NzFw4QDFQAAAAAdAAAAABAE"
                                  alt="Province flag"
                                />
                              </div>
                              <div class="ml-6">
                                <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                  Province:
                                </p>
                                <h6 class="mb-0 text-sm leading-normal">
                                  Pursat
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div class="text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Booking
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">3.900</h6>
                            </div>
                          </td>
                          <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div class="text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Traffic:
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">
                                $440,000
                              </h6>
                            </div>
                          </td>
                          <td class="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div class="flex-1 text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Passenger:
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">
                                40.22%
                              </h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap dark:border-white/40">
                            <div class="flex items-center px-2 py-1">
                              <div>
                                <img
                                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPhnom_Penh&psig=AOvVaw1cT9KuJ-edHZ1Vag-4KhFp&ust=1708849260573000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDW7NzFw4QDFQAAAAAdAAAAABAE"
                                  alt="Province flag"
                                />
                              </div>
                              <div class="ml-6">
                                <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                  Province:
                                </p>
                                <h6 class="mb-0 text-sm leading-normal">
                                  Phnom Penh
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div class="text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Booking:
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">1.400</h6>
                            </div>
                          </td>
                          <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div class="text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Traffic:
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">
                                $190,700
                              </h6>
                            </div>
                          </td>
                          <td class="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap dark:border-white/40">
                            <div class="flex-1 text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Passenger:
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">
                                23.44%
                              </h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-2 align-middle bg-transparent border-0 w-3/10 whitespace-nowrap">
                            <div class="flex items-center px-2 py-1">
                              <div>
                                <img
                                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnomadicboys.com%2Fhow-many-days-in-phnom-penh%2F&psig=AOvVaw1cT9KuJ-edHZ1Vag-4KhFp&ust=1708849260573000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDW7NzFw4QDFQAAAAAdAAAAABAI"
                                  alt="Province flag"
                                />
                              </div>
                              <div class="ml-6">
                                <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                  Province:
                                </p>
                                <h6 class="mb-0 text-sm leading-normal">
                                  Takeo
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td class="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                            <div class="text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Booking:
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">562</h6>
                            </div>
                          </td>
                          <td class="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                            <div class="text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Traffic:
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">
                                $143,960
                              </h6>
                            </div>
                          </td>
                          <td class="p-2 text-sm leading-normal align-middle bg-transparent border-0 whitespace-nowrap">
                            <div class="flex-1 text-center">
                              <p class="mb-0 text-xs font-semibold leading-tight dark:opacity-60">
                                Passenger:
                              </p>
                              <h6 class="mb-0 text-sm leading-normal">
                                32.14%
                              </h6>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <footer class="pt-4">
              <div class="w-full px-6 mx-auto">
                <div class="flex flex-wrap items-center -mx-3 lg:justify-between">
                  <div class="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                    <div class="text-sm leading-normal text-center text-slate-500 lg:text-left">
                      2024 made with <i class="fa fa-heart"></i> by
                      <a
                        href="https://www.creative-tim.com"
                        class="font-semibold text-slate-700 dark:text-white"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                      for a better web.
                    </div>
                  </div>
                  <div class="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                    <ul class="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                      <li class="nav-item">
                        <a
                          href="https://www.creative-tim.com"
                          class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://www.creative-tim.com/presentation"
                          class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          About Us
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://creative-tim.com/blog"
                          class="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://www.creative-tim.com/license"
                          class="block px-4 pt-0 pb-1 pr-0 text-sm font-normal transition-colors ease-in-out text-slate-500"
                          target="_blank"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
