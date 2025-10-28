export interface Medicine {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  image: string;
  manufacturer: string;
}

export const medicines: Medicine[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    price: 5000,
    stock: 100,
    category: "Analgesik",
    description: "Obat pereda nyeri dan penurun demam",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
    manufacturer: "Kimia Farma"
  },
  {
    id: "2",
    name: "Amoxicillin 500mg",
    price: 8000,
    stock: 50,
    category: "Antibiotik",
    description: "Antibiotik untuk infeksi bakteri",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop",
    manufacturer: "Dexa Medica"
  },
  {
    id: "3",
    name: "Antangin JRG",
    price: 3000,
    stock: 75,
    category: "Herbal",
    description: "Obat herbal untuk masuk angin",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop",
    manufacturer: "Deltomed"
  },
  {
    id: "4",
    name: "Betadine 15ml",
    price: 12000,
    stock: 30,
    category: "Antiseptik",
    description: "Antiseptik untuk luka luar",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031d8eb?w=200&h=200&fit=crop",
    manufacturer: "Mahakam Beta Farma"
  },
  {
    id: "5",
    name: "Vitamin C 1000mg",
    price: 15000,
    stock: 80,
    category: "Vitamin",
    description: "Suplemen vitamin C untuk daya tahan tubuh",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8ca6?w=200&h=200&fit=crop",
    manufacturer: "Blackmores"
  },
  {
    id: "6",
    name: "OBH Combi Batuk Flu",
    price: 18000,
    stock: 40,
    category: "Batuk & Flu",
    description: "Obat batuk dan flu dewasa",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
    manufacturer: "OBH Combi"
  },
  {
    id: "7",
    name: "Mylanta Tablet",
    price: 25000,
    stock: 60,
    category: "Pencernaan",
    description: "Obat maag dan gangguan pencernaan",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop",
    manufacturer: "Johnson & Johnson"
  },
  {
    id: "8",
    name: "Hansaplast Strip",
    price: 7000,
    stock: 90,
    category: "P3K",
    description: "Plester luka untuk pertolongan pertama",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop",
    manufacturer: "Beiersdorf"
  }
];

export const categories = [
  "Semua",
  "Analgesik",
  "Antibiotik",
  "Herbal",
  "Antiseptik",
  "Vitamin",
  "Batuk & Flu",
  "Pencernaan",
  "P3K"
];