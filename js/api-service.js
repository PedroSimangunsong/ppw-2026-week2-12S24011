async function fetchProjects() {
    try {
        const response = await fetch('./data/projects.json');

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Gagal mengambil data proyek:', error);
        throw error;
    }
}

async function fetchProfile() {
    try {
        const response = await fetch('./data/profile.json');

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Gagal mengambil data profil:', error);
        throw error;
    }
}

async function fetchServices() {
    try {
        const response = await fetch('./data/services.json');

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Gagal mengambil data layanan:', error);
        throw error;
    }
}

async function submitContactForm(formData) {
    try {
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error('Gagal mengirim form:', error);
        throw error;
    }
}