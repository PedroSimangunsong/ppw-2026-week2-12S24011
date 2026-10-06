let projects = [];
let profile = {};
let services = [];

async function loadProjects() {
    const container = document.getElementById('projectContainer');

    container.innerHTML = `
        <div class="col-12 text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

            <p class="mt-3 text-muted">
                Memuat proyek...
            </p>
        </div>
    `;

    try {
        projects = await fetchProjects();

        console.log('Data proyek:', projects);

        renderProjects(projects);

    } catch (error) {
        console.error('Gagal memuat proyek:', error);

        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger text-center" role="alert">
                    <strong>Gagal memuat proyek.</strong>
                    Silakan coba lagi nanti.
                </div>
            </div>
        `;
    }
}


function renderProjects(projectList) {
    const container = document.getElementById('projectContainer');

    container.innerHTML = '';

    if (projectList.length === 0) {
        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning text-center" role="alert">
                    Tidak ada proyek yang ditemukan.
                </div>
            </div>
        `;
        return;
    }

    projectList.forEach(project => {
        const projectCard = `
            <div class="col">
                <div class="card h-100 shadow-sm overflow-hidden">

                    <img
                        src="${project.image}"
                        class="card-img-top"
                        alt="${project.title}"
                        style="height: 200px; object-fit: cover;"
                    >

                    <div class="card-body">
                        <span class="badge text-bg-primary mb-2">
                            ${project.category}
                        </span>

                        <h5 class="card-title">
                            ${project.title}
                        </h5>

                        <p class="card-text">
                            ${project.description}
                        </p>

                        <button
                            type="button"
                            class="btn btn-primary btn-detail-project"
                            data-project-id="${project.id}">
                            Lihat Detail
                        </button>
                    </div>

                </div>
            </div>
        `;

        container.innerHTML += projectCard;
    });
}
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        return;
    }

    document.getElementById('projectModalTitle').textContent =
        project.title;

    document.getElementById('projectModalBody').innerHTML = `
        <img
            src="${project.image}"
            class="img-fluid rounded mb-4 w-100"
            alt="${project.title}"
            style="max-height: 350px; object-fit: cover;"
        >

        <span class="badge text-bg-primary mb-3">
            ${project.category}
        </span>

        <p>
            ${project.description}
        </p>

        <p>
            <strong>Metrics:</strong>
            ${project.metrics}
        </p>

        <p>
            <strong>Tags:</strong>
            ${project.tags.join(', ')}
        </p>

        <a
            href="${project.link}"
            class="btn btn-primary"
            target="_blank">
            Lihat Proyek
        </a>
    `;

    const modal = new bootstrap.Modal(
        document.getElementById('universalProjectModal')
    );

    modal.show();
}


document.addEventListener('click', function (event) {

    if (event.target.classList.contains('btn-detail-project')) {

        const projectId = Number(
            event.target.dataset.projectId
        );

        openProjectModal(projectId);
    }

});


document.getElementById('categoryFilter').addEventListener(
    'change',
    function () {

        const selectedCategory = this.value;

        if (selectedCategory === 'all') {
            renderProjects(projects);
            return;
        }

        const filteredProjects = projects.filter(project =>
            project.category === selectedCategory
        );

        renderProjects(filteredProjects);
    }
);


document.getElementById('contactForm').addEventListener(
    'submit',
    async function (event) {

        event.preventDefault();

       
       const formData = {
    nama: document.getElementById('nama').value,
    email: document.getElementById('email').value,
    telepon: document.getElementById('telepon').value,

    layanan: document.getElementById('layanan-pilihan').value,

    jumlah: document.getElementById('jumlah').value,

    metode:
        document.querySelector(
            'input[name="metode"]:checked'
        )?.value || '',

    topik: Array.from(
        document.querySelectorAll(
            'input[name="topik"]:checked'
        )
    ).map(input => input.value),

    pesan: document.getElementById('pesan').value
};

        try {

            const response = await submitContactForm(formData);

            console.log('Response POST:', response);

            const toastElement =
                document.getElementById('successToast');

            const toast =
                bootstrap.Toast.getOrCreateInstance(toastElement);

            toast.show();

            localStorage.setItem(
                'contactFormData',
                JSON.stringify(formData)
            );

        } catch (error) {

            console.error(
                'Gagal mengirim form:',
                error
            );

        }

    }
);

function renderProfile(profile) {
    document.getElementById('profileName').textContent =
        profile.name;

    document.getElementById('profileTitle').textContent =
        profile.title;

    document.getElementById('profileDescription').textContent =
        profile.description;

    document.getElementById('profileInstitution').textContent =
        profile.institution;
}


async function loadProfile() {

    try {

        profile = await fetchProfile();

        console.log('Data profil:', profile);

        renderProfile(profile);

    } catch (error) {

        console.error(
            'Gagal memuat profil:',
            error
        );

    }
}

async function loadServices() {
    try {
        services = await fetchServices();

        console.log('Data layanan:', services);

        const serviceSelect =
            document.getElementById('layanan-pilihan');

        services.forEach(service => {
            const option = document.createElement('option');

            option.value = service.id;
            option.textContent = service.name;

            serviceSelect.appendChild(option);
        });

    } catch (error) {
        console.error(
            'Gagal memuat data layanan:',
            error
        );
    }
}


loadProjects();
loadProfile();
loadServices();