import { getAllRemoteJobs } from "./utils.js";

const job_list = document.getElementById('listings');
const searchButton = document.getElementById('search');
const search_bar = document.getElementById('search-bar');
const loader = document.getElementById('loader');
const remoteJobs = await getAllRemoteJobs(); // returns a list

for (let job_index in remoteJobs) {
    let job = remoteJobs[job_index];

    job_list.innerHTML += `<div class="group mx-2 md:grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border border-gray-200 p-4 md:py-8 md:px-0 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <a href="#" class="order-2 col-span-2 md:mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
            <div class="col-span-2 group relative h-16 w-16 overflow-hidden rounded-lg">
                <img src="${job.companyLogo}" alt="" class="h-full w-full object-cover text-gray-700" />
            </div>
            </a>
            <div class="col-span-10 flex flex-col pr-8 text-left sm:pl-4">
            <h3 class="text-sm text-gray-600">${job.companyName}</h3>
            <a href="#" class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"> ${job.jobTitle}</a>
            <p class="w-full overflow-hidden pr-7 text-sm">${job.jobDescription.slice(0,600)}</p>

            <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0">
                <div class="">Exp:<span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> ${job.jobLevel} </span></div>
                <div class="">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">${job.annualSalaryMin ? job.annualSalaryMin + ' USD' : 'Undisclosed'}</span></div>
            </div>
            <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0">
                <div class="">Industry:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-green-900">${job.jobIndustry}</span></div>
            </div>
            </div>
        </div>`
}

search_bar.addEventListener('submit', async (e) => {
    e.preventDefault()
    job_list.innerHTML = '';
    loader.classList.remove('hidden');
    const data = new FormData(e.target);
    const search_term = data.get('search_term');
    const remoteJobs = await getAllRemoteJobs(search_term); 



    if (remoteJobs.statusCode && remoteJobs.statusCode === 404) {
        job_list.innerHTML = `<div class="col-span-2 flex items-center justify-center py-7">
            <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 class="text-4xl font-bold text-gray-800 mb-2">Job Not Found</h1>
                <p class="text-gray-600 mb-6">No job found for this search term</p>
            </div>
        </div>`
    }

    for (let job_index in remoteJobs) {
        let job = remoteJobs[job_index];
    
        job_list.innerHTML += `<div class="group mx-2 md:grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border border-gray-200 p-4 md:py-8 md:px-0 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
            <a href="#" class="order-2 col-span-2 md:mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
            <div class="col-span-2 group relative h-16 w-16 overflow-hidden rounded-lg">
                <img src="${job.companyLogo}" alt="" class="h-full w-full object-cover text-gray-700" />
            </div>
            </a>
            <div class="col-span-10 flex flex-col pr-8 text-left sm:pl-4">
            <h3 class="text-sm text-gray-600">${job.companyName}</h3>
            <a href="#" class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"> ${job.jobTitle}</a>
            <p class="w-full overflow-hidden pr-7 text-sm">${job.jobDescription.slice(0,600)}</p>

            <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0">
                <div class="">Exp:<span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> ${job.jobLevel} </span></div>
                <div class="">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">${job.annualSalaryMin ? job.annualSalaryMin + ' USD' : 'Undisclosed'}</span></div>
            </div>
            <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0">
                <div class="">Industry:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-green-900">${job.jobIndustry}</span></div>
            </div>
            </div>
        </div>`
    }
})