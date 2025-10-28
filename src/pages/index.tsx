    import { useState, useMemo } from 'react';
import { medicines, Medicine } from '@/data/medicines';
import { useCart } from '@/hooks/useCart';
import { MedicineCard } from '@/components/MedicineCard';
import { SearchBar } from '@/components/SearchBar';
import { Cart } from '@/components/Cart';
import { CheckoutModal, CustomerData } from '@/components/CheckoutModal';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Index() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const filteredMedicines = useMemo(() => {
    return medicines.filter(medicine => {
      const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Semua' || medicine.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleAddToCart = (medicine: Medicine, quantity: number) => {
    addToCart(medicine, quantity);
    toast.success(`${medicine.name} ditambahkan ke keranjang`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Keranjang masih kosong');
      return;
    }
    setIsCheckoutOpen(true);
  };

  const handleConfirmPurchase = (customerData: CustomerData) => {
    // Generate receipt number
    const receiptNumber = `APT${Date.now().toString().slice(-6)}`;
    
    // Show success message
    toast.success(
      `Pembelian berhasil! Nomor struk: ${receiptNumber}. Terima kasih ${customerData.name}!`,
      { duration: 5000 }
    );
    
    // Clear cart and close modal
    clearCart();
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-green-600">🏥 Apotek Hade</h1>
              <p className="text-muted-foreground text-sm">Solusi Kesehatan Terpercaya</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Cart
                cartItems={cartItems}
                totalPrice={getTotalPrice()}
                totalItems={getTotalItems()}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
                onCheckout={handleCheckout}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <SearchBar
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMedicines.map((medicine) => (
            <MedicineCard
              key={medicine.id}
              medicine={medicine}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredMedicines.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold mb-2">Obat tidak ditemukan</h3>
            <p className="text-muted-foreground">
              Coba ubah kata kunci pencarian atau pilih kategori lain
            </p>
          </div>
        )}

        {/* Quick Actions */}
        {getTotalItems() > 0 && (
          <div className="fixed bottom-4 right-4 z-50">
            <Button
              onClick={handleCheckout}
              size="lg"
              className="shadow-lg"
            >
              Checkout ({getTotalItems()}) - {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
              }).format(getTotalPrice())}
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2024 Apotek Hade. Melayani dengan sepenuh hati.</p>
        </div>
      </footer>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        totalPrice={getTotalPrice()}
        onConfirmPurchase={handleConfirmPurchase}
      />
    </div>
  );
}