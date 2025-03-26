const loader = document.getElementById('loader');

export async function getAllRemoteJobs(search_term = null) {
    let jobs = fetch(`https://jobicy.com/api/v2/remote-jobs${ search_term ? '?tag=' + search_term.toString().toLowerCase() : '/'}`)
    .then(res => res.json())
    .then(data => {
        let jobs = data.jobs
        loader.classList.add('hidden');
        return jobs;
    })
    .catch(error => {
        console.log(error);
        return 0;
    })

    return jobs;
}

