import { useState } from 'react';
import Papa from 'papaparse';
import { motion } from 'motion/react';
import { db } from '../lib/firebase';
import { collection, writeBatch, doc } from 'firebase/firestore';

export default function AdminShopUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }

    setLoading(true);
    setMessage('Parsing CSV...');

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        try {
          setMessage(`Uploading ${results.data.length} products...`);
          const batch = writeBatch(db);
          let count = 0;
          
          for (const row of results.data as any[]) {
            const docRef = doc(collection(db, 'products'));
            batch.set(docRef, {
              title: row.title || row.Name || 'Unnamed Product',
              price: parseFloat(row.price || row.Price || 0),
              image: row.image || row.Image || 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
              category: row.category || row.Category || 'Uncategorized',
              description: row.description || row.Description || '',
            });
            count++;
            
            // Firestore batches have a 500 operation limit
            if (count % 450 === 0) {
                await batch.commit();
                setMessage(`Uploaded ${count} products...`);
            }
          }
          
          if (count % 450 !== 0) {
            await batch.commit();
          }

          setMessage(`Success! Uploaded ${count} products.`);
        } catch (error) {
          console.error(error);
          setMessage('Error uploading products check console.');
        } finally {
          setLoading(false);
        }
      },
      error: (err) => {
        console.error(err);
        setMessage('Error parsing CSV');
        setLoading(false);
      }
    });
  };

  return (
    <div className="py-24 max-w-4xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-12 border border-warm-ink/10 shadow-sm"
      >
        <h1 className="font-serif text-4xl mb-6">Upload Products</h1>
        <p className="text-warm-ink/70 font-light mb-8">
          Upload a CSV file containing your product catalog. Expected headers: title, price, image, category, description.
        </p>

        <div className="space-y-6">
          <input 
            type="file" 
            accept=".csv"
            onChange={handleFileChange}
            className="block w-full text-sm text-warm-ink/70 file:mr-4 file:py-3 file:px-6 file:border-0 file:text-sm file:font-semibold file:bg-warm-bg file:text-warm-ink hover:file:bg-warm-ink/5"
          />
          
          <button 
            onClick={handleUpload}
            disabled={!file || loading}
            className="px-8 py-3 bg-warm-ink text-warm-bg uppercase tracking-widest text-sm font-medium disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Upload Data'}
          </button>

          {message && (
            <p className="text-sm font-medium pt-4">{message}</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
