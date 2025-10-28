import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { CartItem } from '@/hooks/useCart';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalPrice: number;
  onConfirmPurchase: (customerData: CustomerData) => void;
}

export interface CustomerData {
  name: string;
  phone: string;
  address: string;
}

export const CheckoutModal = ({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  onConfirmPurchase
}: CheckoutModalProps) => {
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    phone: '',
    address: ''
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerData.name && customerData.phone) {
      onConfirmPurchase(customerData);
      setCustomerData({ name: '', phone: '', address: '' });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Checkout - Apotek Hade</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Order Summary */}
          <div>
            <h3 className="font-semibold mb-2">Ringkasan Pesanan</h3>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.medicine.id} className="flex justify-between text-sm">
                  <span>{item.medicine.name} x{item.quantity}</span>
                  <span>{formatPrice(item.medicine.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            
            <Separator className="my-2" />
            
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span className="text-green-600">{formatPrice(totalPrice)}</span>
            </div>
          </div>
          
          {/* Customer Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nama Lengkap *</Label>
              <Input
                id="name"
                value={customerData.name}
                onChange={(e) => setCustomerData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Nomor Telepon *</Label>
              <Input
                id="phone"
                type="tel"
                value={customerData.phone}
                onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="Masukkan nomor telepon"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="address">Alamat</Label>
              <Input
                id="address"
                value={customerData.address}
                onChange={(e) => setCustomerData(prev => ({ ...prev, address: e.target.value }))}
                placeholder="Masukkan alamat (opsional)"
              />
            </div>
            
            <div className="flex space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Batal
              </Button>
              <Button 
                type="submit" 
                className="flex-1"
                disabled={!customerData.name || !customerData.phone}
              >
                Konfirmasi Pembelian
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};