import { motion } from 'motion/react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Return of Warm Minimalism",
      date: "October 12, 2023",
      category: "Design Trends",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
      excerpt: "Moving away from stark whites, we explore how rich creams, warm woods, and soft textures are redefining modern spaces."
    },
    {
      id: 2,
      title: "Choosing the Right Lighting",
      date: "September 28, 2023",
      category: "How-To",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&auto=format&fit=crop",
      excerpt: "Lighting is the most critical element in interior design. Learn how to layer ambient, task, and accent lighting effectively."
    },
    {
      id: 3,
      title: "Curating a Minimalist Bookshelf",
      date: "September 15, 2023",
      category: "Styling",
      image: "https://images.unsplash.com/photo-1615876234886-fd1a88c44aa2?w=800&auto=format&fit=crop",
      excerpt: "Shelf styling is an art form. Here are our top tips for achieving that effortless, high-end look without feeling cluttered."
    }
  ];

  return (
    <div className="w-full">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl mb-6 text-warm-ink">The Journal</h1>
          <p className="text-warm-ink-muted leading-relaxed max-w-2xl mx-auto">
            Thoughts, trends, and musings on elevating everyday living spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group cursor-pointer block"
            >
              <div className="overflow-hidden aspect-[4/3] mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center space-x-4 mb-4 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-accent-olive">
                <span>{post.category}</span>
                <span>—</span>
                <span>{post.date}</span>
              </div>
              <h2 className="font-serif text-3xl mb-4 group-hover:text-accent-olive transition-colors text-warm-ink">{post.title}</h2>
              <p className="text-warm-ink-muted font-light text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
