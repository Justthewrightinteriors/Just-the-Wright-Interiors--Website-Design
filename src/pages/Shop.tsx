import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'products'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const prods: Product[] = [];
      snapshot.forEach((doc) => {
        prods.push({ id: doc.id, ...doc.data() } as Product);
      });
      setProducts(prods);
      setLoading(false);
    }, (error) => {
      console.error("Firestore error: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl mb-4 text-warm-ink">Shop</h1>
            <p className="text-warm-ink-muted font-light max-w-xl">
              Elevate your everyday living with our curated collection of furniture, lighting, and home accents.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 md:mt-0"
          >
             {/* Filter placeholder */}
             <div className="flex space-x-6 text-sm uppercase tracking-widest font-medium text-warm-ink-muted">
               <button className="text-warm-ink border-b border-warm-ink pb-1">All</button>
               <button className="hover:text-warm-ink transition-colors">Furniture</button>
               <button className="hover:text-warm-ink transition-colors">Lighting</button>
             </div>
          </motion.div>
        </div>

        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <p className="text-accent-olive uppercase tracking-widest text-sm">Loading collection...</p>
          </div>
        ) : products.length === 0 ? (
           <div className="h-64 flex flex-col items-center justify-center border border-dashed border-warm-bg-secondary bg-warm-bg-secondary/20">
             <p className="text-accent-olive uppercase tracking-widest text-sm mb-4">No products found</p>
             <p className="text-sm text-warm-ink-muted font-light max-w-md text-center">
               The shop is currently empty. Visit the `/admin/shop` page to upload a CSV sheet of products.
             </p>
           </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-warm-bg-secondary mb-4 mb:6 cursor-pointer">
                  {product.image && (
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-warm-ink hover:text-accent-olive text-xs uppercase tracking-widest font-semibold py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2">
                    <ShoppingBag size={16} />
                    <span>Quick Add</span>
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl mb-1 text-warm-ink group-hover:text-accent-olive transition-colors">{product.title}</h3>
                    <p className="text-accent-olive text-xs uppercase tracking-widest">{product.category}</p>
                  </div>
                  <span className="font-medium text-warm-ink-muted">${Number(product.price).toFixed(2)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
