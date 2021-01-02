function slide(pilihan){
  let pilihanKita = pilihan.id;
  let caption = {
    'home'  : "Teknologi rumah pintar adalah penggunaan perangkat di rumah yang terhubung melalui jaringan, biasanya jaringan rumah (seperti LAN lokal) atau internet. Ini menggunakan perangkat seperti sensor dan peralatan lain yang terhubung ke Internet of Things (IoT) yang dapat dimonitor, dikontrol atau diakses dari jarak jauh dan menyediakan layanan yang menanggapi kebutuhan pengguna yang dirasakan. Ini adalah singkatan dari Self-Monitoring Analysis and Reporting Technology.",
    'edu'   : "Teknologi pendidikan (biasa disingkat EduTech, atau EdTech) adalah gabungan penggunaan perangkat keras komputer, perangkat lunak, serta teori dan praktik pendidikan untuk memfasilitasi pembelajaran. Teknologi pendidikan menciptakan, menggunakan, dan mengelola proses teknologi dan sumber daya pendidikan untuk membantu meningkatkan kinerja akademis pengguna. Bidang ini digambarkan sebagai inisiatif yang terus-menerus yang berusaha untuk menyatukan peserta didik, guru dan sarana teknis secara efektif.",
    'food'  : "suatu disiplin ilmu yang menerapkan ilmu pengetahuan tentang bahan pangan khususnya setelah panen (pasca panen) menggunakan teknologi yang tepat untuk memperoleh manfaat seoptimal mungkin sekaligus meningkatkan nilai tambah dari pangan tersebut. Dalam teknologi pangan, dipelajari sifat fisik, mikrobiologis, dan kimia dari bahan pangan dan proses yang mengolah bahan pangan tersebut. Spesialisasinya beragam, di antaranya pemrosesan, pengawetan, pengemasan, penyimpanan, dan sebagainya.",
    'gov'   : "mencakup katalog tindakan yang jauh lebih luas yang bertujuan untuk membuat sektor publik lebih inovatif, gesit, dan berorientasi pada pembangunan. Jika Anda memperbarui situs web pemerintah - Anda melakukan GovTech. Jika Anda mendukung saran kolega Anda untuk menghilangkan redundansi - Anda mendukung GovTech. Yang terpenting adalah hasil dari tindakan Anda melakukan sesuatu untuk membuat pemerintah lebih berfungsi secara teknologi.",
    'med'   : "Medtech adalah sektor yang sangat luas - mencakup semua teknologi yang dapat digunakan dalam pengaturan perawatan, yang mencakup inovasi sekali pakai, peralatan modal dan prosedur bedah, hingga teknologi implan, biomaterial, dan IT kesehatan yang terhubung. Akun Medtech untuk semua perangkat yang dapat digunakan untuk mendiagnosis atau merawat pasien: dalam diagnostik, perangkat medis biasanya digunakan di dalam atau pada pasien, sedangkan perangkat diagnostik in vitro (IVD) digunakan di laboratorium; terapi cenderung pada tingkat fisik, sedangkan farmasi / bioteknologi berada pada tingkat kimia / biologis.",
    'petir' : "Teknologi energi adalah ilmu teknik interdisipliner yang berkaitan dengan ekstraksi, konversi, transportasi, penyimpanan, dan penggunaan energi yang efisien, aman, ramah lingkungan, dan ekonomis, yang ditargetkan untuk menghasilkan efisiensi tinggi sambil menghindari efek samping pada manusia, alam, dan lingkungan Hidup.",
    'uang'  : "Teknologi keuangan (disingkat fintech atau FinTech) adalah teknologi dan inovasi yang bertujuan untuk bersaing dengan metode keuangan tradisional dalam penyampaian layanan keuangan. Ini adalah industri baru yang menggunakan teknologi untuk meningkatkan aktivitas di bidang keuangan. Penggunaan smartphone untuk mobile banking, layanan investasi, pinjaman, dan cryptocurrency adalah contoh teknologi yang bertujuan untuk membuat layanan keuangan lebih dapat diakses oleh masyarakat umum. Perusahaan teknologi keuangan terdiri dari perusahaan rintisan dan lembaga keuangan mapan serta perusahaan teknologi yang mencoba menggantikan atau meningkatkan penggunaan layanan keuangan yang disediakan oleh perusahaan keuangan yang ada.",
 }
  let tulisan = caption[pilihanKita]

  let img = document.createElement('img');
  img.setAttribute('id', 'gambar-muncul');
  img.src = document.getElementById(pilihanKita).src;

  document.getElementById('gambar-muncul').remove();
  document.getElementById('tulisan-muncul').remove();

    let pesan = document.createElement('p');
    pesan.setAttribute('id', 'tulisan-muncul');
    let text = document.createTextNode(tulisan);
    pesan.appendChild(text);

    document.getElementsByClassName("container-3")[0].appendChild(img);
    document.getElementsByClassName("container-3")[0].appendChild(pesan);



}

