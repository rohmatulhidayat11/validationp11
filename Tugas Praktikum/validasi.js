document.getElementById('formValidasi').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Reset error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    const fields = document.querySelectorAll('input');
    fields.forEach(field => field.classList.remove('error-border'));

    // Nama Pelanggan Validation
    const nama = document.getElementById('nama');
    if (nama.value.trim() === '' || nama.value.length > 30) {
        document.getElementById('namaError').textContent = "Nama harus diisi dan maksimal 30 karakter.";
        nama.classList.add('error-border');
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('emailError').textContent = "Email tidak valid.";
        email.classList.add('error-border');
        isValid = false;
    }

    // Jam Keberangkatan Validation
    const jam = document.getElementById('jam');
    const jamRegex = /^([01]\d|2[0-3])\.[0-5]\d$/;
    if (!jamRegex.test(jam.value)) {
        document.getElementById('jamError').textContent = "Jam harus diisi dengan format 00.00 - 23.59.";
        jam.classList.add('error-border');
        isValid = false;
    }

    // Tujuan Keberangkatan Validation
    const tujuan = document.getElementById('tujuan');
    if (tujuan.value.trim() === '') {
        document.getElementById('tujuanError').textContent = "Tujuan keberangkatan harus diisi.";
        tujuan.classList.add('error-border');
        isValid = false;
    }

    // Jumlah Tiket Validation
    const tiket = document.getElementById('tiket');
    if (tiket.value < 1 || tiket.value > 10 || tiket.value.trim() === '') {
        document.getElementById('tiketError').textContent = "Jumlah tiket harus antara 1 - 10.";
        tiket.classList.add('error-border');
        isValid = false;
    }

    // Display result
    if (isValid) {
        const output = document.getElementById('output');
        output.style.display = 'block';
        output.innerHTML = `
            <p><strong>Nama Pelanggan:</strong> ${nama.value}</p>
            <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>Jam Keberangkatan:</strong> ${jam.value}</p>
            <p><strong>Tujuan Keberangkatan:</strong> ${tujuan.value}</p>
            <p><strong>Jumlah Tiket:</strong> ${tiket.value}</p>
        `;
    } else {
        document.getElementById('output').style.display = 'none';
    }
});