import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const newsData = [
  {
    id: '10-tips-for-whiter-teeth',
    title: '10 Science-Backed Habits for Maintaining Whiter Teeth at Home',
    category: 'Dental Care Tips',
    date: 'Sep 24, 2026',
    author: 'Dr. Asha Chopra',
    readTime: '4 min read',
    excerpt: 'Discover simple daily changes and dietary tips to keep your enamel radiant and prevent deep coffee or tea stains.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500',
    content: `Maintaining a white, healthy smile doesn't just happen at the dental clinic—it's built through consistent daily habits. 

Here are top expert-recommended tips to keep your smile bright:
1. Brush twice daily using fluoridated toothpaste with soft bristles.
2. Rinse with water immediately after drinking coffee, red wine, or dark teas.
3. Incorporate crunchy raw vegetables like apples, carrots, and celery which act as natural tooth scrubbers.
4. Replace your toothbrush every 3 months or as soon as bristles begin to fray.
5. Consider professional scaling & polishing once a year for deep stain removal.`
  },
  {
    id: 'understanding-invisalign-aligners',
    title: 'Why Painless Single-Sitting RCT is Transforming Root Canals',
    category: 'Endodontics',
    date: 'Sep 18, 2026',
    author: 'Dr. Asha Chopra',
    readTime: '5 min read',
    excerpt: 'Explore how modern rotary instruments and local anesthetics allow single-sitting root canals with zero discomfort.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=500',
    content: `Root canal treatment has evolved dramatically. Modern single-sitting RCT provides quick relief without multiple clinic visits.

Key advantages include:
- Single appointment completion saving time.
- Painless local anesthetic delivery.
- Durable Zirconia crown capping for long term tooth strength.`
  },
  {
    id: 'preventing-cavities-in-children',
    title: 'A Parent\'s Guide to Childhood Dental Hygiene & Early Prevention',
    category: 'Pediatric Care',
    date: 'Sep 10, 2026',
    author: 'Dr. Asha Chopra',
    readTime: '5 min read',
    excerpt: 'How to make brushing fun for kids, prevent childhood cavities, and set up a lifelong foundation for oral health.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500',
    content: `Establishing healthy dental habits early in childhood prevents painful cavities and builds confidence.

Tips for parents:
- Start cleaning baby gums with a soft damp cloth before teeth erupt.
- Use a pea-sized amount of child-friendly fluoride toothpaste.
- Schedule your child's first dental checkup early.`
  }
];

export default function News() {
  return (
    <div>
      <PageHeader
        title="Dental News & Wellness Journal"
        subtitle="Expert insights, oral health guides, and updates from Shree Ram Dental Clinic."
        category="Articles & Insights"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-3xl border border-sky-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#081E3D]">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#4AB0F0]" />
                        {item.date}
                      </span>
                      <span>{item.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#4AB0F0] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-4">
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#4AB0F0]" />
                    {item.author}
                  </span>
                  <Link
                    to={`/news/${item.id}`}
                    className="text-xs font-bold text-[#4AB0F0] hover:text-[#2898E0] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
