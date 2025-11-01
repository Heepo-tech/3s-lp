1. Header
   - Logo
   - Navigation Bar
     - Produk: List produk (Tiap produk akan memiliki halaman masing-masing)
     - Perusahaan: Tentang kami, Blog
     - Sertifikasi
   - CTA Button pada sisi pojok kanan navigation bar “Hubungi Kami”
2. Hero Section
   - Headline: “Plywood Premium, Dipercaya Pasar Lokal & Internasional”
   - Subheadline: “Dengan sertifikasi internasional dan pengalaman bertahun-tahun, kami menghadirkan plywood kuat, presisi, dan ramah lingkungan untuk proyek Anda di mana saja.”
   - CTA utama: Terdapat dua button, yaitu “Tentang Kami” dan “Kihat Produk”
   - Background: Video clip proses pembuatan kayu lapis (plywood) + alittle bit dark overlay
3. Company Profile
   - Ringkasan singkat perusahaan.
   - Elemen kepercayaan:
     - Jangkauan distribusi nasional/internasional.
4. Produk Section
   - Judul: “Produk Plywood Kami”
   - Bento layout dengan nama (nama dan ukuran) dan foto produk, pada masing-masing card. ketika nama produk diklik akan menampilkan halaman detail produk
5. Keunggulan / Value Proposition
6. Client Showcase
   - Client dari perusahaan. (carousel) running carousel ke arah kiri
7. Sertifikasi
   - Tunjukkan sertifikasi perusahaan
8. FAQ Section
   - Apakah plywood bisa custom ukuran?
   - Minimum order berapa?
   - Pengiriman ke luar kota/provinsi tersedia?
   - Apa saja metode pembayaran yang diterima?
9. CTA Section
   - Headline: “Konsultasi Gratis dengan Tim Kami Sekarang!”
   - CTA button: **“Hubungi Kami Sekarang” (Hubungi dengan email)** atau **“Request Quotation”**
10. Footer
    - Informasi kontak lengkap: alamat pabrik, nomor telepon, email.
    - Link cepat: Tentang, Produk, Sertifikasi, Kontak.
    - Peta lokasi (Google Maps embed).
    - Sosial media (LinkedIn, Instagram, Facebook).

Font: **Montserrat (Headline) + Open Sans (Body)** → modern + readable.

Color Palette: #F8F4E1 #FEBA17 #74512D #4E1F00

gunakan vertical cut reveal pada bagian hero section:
npx shadcn@latest add "https://fancycomponents.dev/r/vertical-cut-reveal.json"

pada button CTA berikan animasi variable font hover by random letter:
npx shadcn@latest add "https://fancycomponents.dev/r/variable-font-hover-by-random-letter.json"

pada bagian profil perusahaan berikan text highlighter effect:
npx shadcn@latest add "https://fancycomponents.dev/r/text-highlighter.json"

gunakan sticky footer untuk footer menu:
import React from "react"

const Preview: React.FC = () => {
return (

<div className="w-full bg-[#efefef] items-center justify-center h-full overflow-auto">
{/_ add relative positioning to the main conent _/}
<div className="relative w-dvw h-dvh z-10 text-2xl md:text-7xl font-bold uppercase flex justify-center items-center bg-[#ff5941] text-white whitespace-pre">
Scroll down ↓
</div>

      {/* Sticky footer. The only important thing here is the z-index, the sticky position and the bottom value */}
      <div className="sticky z-0 bottom-0 left-0 w-full h-80 bg-white flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-[#ff5941]">
          <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Docs</li>
              <li className="hover:underline cursor-pointer">Comps</li>
            </ul>
            <ul>
              <li className="hover:underline cursor-pointer">Github</li>
              <li className="hover:underline cursor-pointer">Instagram</li>
              <li className="hover:underline cursor-pointer">X (Twitter)</li>
            </ul>
          </div>
          <h2 className="absolute bottom-0 left-0  translate-y-1/3 sm:text-[192px]  text-[80px] text-[#ff5941] font-calendas">
            fancy
          </h2>
        </div>
      </div>
    </div>

)
}

export default Preview

stacking cards untuk bagian produk:
npx shadcn@latest add "https://fancycomponents.dev/r/stacking-cards.json"

pada halaman tentang kami dibuat simple marquee, strukturnya adalah judul, carousel (simple marquee), content halaman (penjelasan):
npx shadcn@latest add "https://fancycomponents.dev/r/simple-marquee.json"
