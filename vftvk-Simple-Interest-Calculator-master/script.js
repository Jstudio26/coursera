function compute() {
    // Mengambil nilai input dari elemen HTML
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; 
    
    // Validasi input Principal: Tidak boleh kosong, nol, atau negatif
    if (principal === "" || principal <= 0) {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
        return; // Menghentikan eksekusi fungsi jika tidak valid
    }

    // Kalkulasi matematika untuk bunga dan tahun masa depan
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById("result");
	
    // Menampilkan hasil kalkulasi ke dalam elemen span dengan id="result"
    // Menggunakan tag <mark> untuk menyorot angka penting
    result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + 
                       ",<br>at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + 
                       "<br>You will receive an amount of $" + "<mark>" + interest + "</mark>" + 
                       ",<br>in the year " + "<mark>" + year + "</mark><br>";
}

function updateRate() {
    // Mengambil nilai terkini dari slider rate
    var rateval = document.getElementById("rate").value;
    // Memperbarui teks di sebelah slider secara real-time
    document.getElementById("rate_val").innerText = rateval;
}