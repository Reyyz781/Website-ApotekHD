import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus } from 'lucide-react';
import { Medicine } from '@/data/medicines';
import { useState } from 'react';

interface MedicineCardProps {
  medicine: Medicine;
  onAddToCart: (medicine: Medicine, quantity: number) => void;
}

export const MedicineCard = ({ medicine, onAddToCart }: MedicineCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(medicine, quantity);
    setQuantity(1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardContent className="p-4 flex-1">
        <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={medicine.image}
            alt={medicine.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop';
            }}
          />
        </div>
        
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {medicine.category}
          </Badge>
          
          <h3 className="font-semibold text-sm line-clamp-2">
            {medicine.name}
          </h3>
          
          <p className="text-xs text-muted-foreground line-clamp-2">
            {medicine.description}
          </p>
          
          <p className="text-xs text-muted-foreground">
            {medicine.manufacturer}
          </p>
          
          <div className="flex justify-between items-center">
            <span className="font-bold text-green-600">
              {formatPrice(medicine.price)}
            </span>
            <span className={`text-xs ${medicine.stock > 10 ? 'text-green-600' : 'text-red-600'}`}>
              Stok: {medicine.stock}
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="w-full space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm font-medium">{quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity(Math.min(medicine.stock, quantity + 1))}
              disabled={quantity >= medicine.stock}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button
            className="w-full"
            onClick={handleAddToCart}
            disabled={medicine.stock === 0}
          >
            {medicine.stock === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};