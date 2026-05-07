import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { signInWithPopup(false), GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Auth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Sign in failed", error);
        alert("Sign in failed. Are popups blocked?");
    }
  };

  const handleSignOut = () => {
      signOut(auth);
  };

  if (loading) {
    return (
      <div className="py-24 min-h-[60vh] flex items-center justify-center">
        <p className="text-accent-olive uppercase tracking-widest text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh]">
        {!user ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-md mx-auto bg-white p-12 shadow-sm border border-warm-bg-secondary"
          >
            <h1 className="font-serif text-4xl mb-6 text-warm-ink">Welcome Back</h1>
            <p className="text-warm-ink-muted font-light mb-10">
              Sign in to save favorites, check order history, and access design preferences.
            </p>
            <button 
              onClick={handleSignIn}
              className="w-full py-4 bg-warm-ink text-white uppercase tracking-widest text-sm font-medium hover:bg-accent-olive transition-colors"
            >
              Sign in with Google
            </button>
          </motion.div>
        ) : (
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-end mb-12 border-b border-warm-bg-secondary pb-6">
                <div>
                   <h1 className="font-serif text-4xl mb-2 text-warm-ink">My Account</h1>
                   <p className="text-warm-ink-muted font-light text-sm uppercase tracking-widest">
                     Logged in as <span className="text-accent-olive">{user.email}</span>
                   </p>
                </div>
                <button 
                  onClick={handleSignOut}
                  className="pb-1 text-sm border-b border-warm-ink text-warm-ink uppercase tracking-widest hover:text-accent-olive hover:border-accent-olive transition-colors"
                >
                  Sign Out
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h2 className="font-serif text-2xl mb-6 text-warm-ink">Order History</h2>
                   <div className="bg-white p-8 border border-warm-bg-secondary">
                      <p className="text-warm-ink-muted italic text-sm">No recent orders. Explore the shop to discover curated pieces for your home.</p>
                   </div>
               </div>
               <div>
                  <h2 className="font-serif text-2xl mb-6 text-warm-ink">Design Preferences</h2>
                   <div className="bg-white p-8 border border-warm-bg-secondary">
                      <p className="text-warm-ink-muted italic text-sm">You haven't saved any preferences yet. Book a consultation to start building your profile.</p>
                   </div>
               </div>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
