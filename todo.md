Website Apotek Hade - MVP Todo List
Tujuan
Membuat website penjualan obat dengan sistem kasir untuk Apotek Hade

Fitur Utama yang Akan Diimplementasikan
Halaman utama dengan daftar obat
Sistem pencarian dan filter obat
Keranjang belanja
Interface kasir untuk checkout
Data obat statis (mock data)
File yang Perlu Dibuat/Dimodifikasi
1. src/pages/Index.tsx
Halaman utama dengan layout apotek
Daftar obat dalam bentuk grid/card
Fitur pencarian obat
Keranjang belanja sidebar
2. src/components/MedicineCard.tsx
Komponen kartu obat individual
Menampilkan nama, harga, stok, gambar obat
Tombol tambah ke keranjang
3. src/components/Cart.tsx
Komponen keranjang belanja
Daftar obat yang dipilih
Kalkulasi total harga
Tombol checkout
4. src/components/SearchBar.tsx
Komponen pencarian obat
Filter berdasarkan kategori
Filter berdasarkan nama
5. src/components/CheckoutModal.tsx
Modal untuk proses checkout
Form data pelanggan
Konfirmasi pembelian
Struk pembelian
6. src/data/medicines.ts
Data statis obat-obatan
Struktur: id, nama, harga, stok, kategori, deskripsi, gambar
7. src/hooks/useCart.ts
Custom hook untuk manajemen keranjang
Add, remove, update quantity
Calculate total
8. index.html
Update title menjadi “Apotek Hade”
Update meta description
Struktur Data Obat
interface Medicine {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  image: string;
  manufacturer: string;
}
Alur Aplikasi
User melihat daftar obat di halaman utama
User dapat mencari/filter obat
User menambah obat ke keranjang
User melihat keranjang dan melakukan checkout
User mendapat konfirmasi pembelian
Teknologi
React + TypeScript
Shadcn/UI components
Tailwind CSS
Local state management (useState, useContext)