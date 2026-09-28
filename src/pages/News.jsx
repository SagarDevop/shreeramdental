import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export const newsData = [
  {
    id: '10-tips-for-whiter-teeth',
    title: '10 Science-Backed Habits for Maintaining Whiter Teeth at Home',
    category: 'Dental Care Tips',
    date: 'Sep 24, 2026',
    author: 'Dr. Sarah Jenkins',
    readTime: '4 min read',
    excerpt: 'Discover simple daily changes and dietary tips to keep your enamel radiant and prevent deep coffee or tea stains.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=500',
    content: `Maintaining a white, healthy smile doesn't just happen at the dental clinic—it's built through consistent daily habits. 

Here are top expert-recommended tips to keep your smile bright:
1. Brush twice daily using fluoridated toothpaste with soft bristles.
2. Rinse with water immediately after drinking coffee, red wine, or dark teas.
3. Incorporate crunchy raw vegetables like apples, carrots, and celery which act as natural tooth scrubbers.
4. Replace your toothbrush every 3 months or as soon as bristles begin to fray.
5. Consider professional laser whitening once a year for deep stain removal.`
  },
  {
    id: 'understanding-invisalign-aligners',
    title: 'Why Clear Invisalign Aligners Are Replacing Traditional Metal Braces',
    category: 'Orthodontics',
    date: 'Sep 18, 2026',
    author: 'Dr. Marcus Vance',
    readTime: '6 min read',
    excerpt: 'Explore how 3D digital scanning and invisible aligners allow patients to achieve straight teeth with zero food restrictions.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=500',
    content: `Orthodontic technology has evolved dramatically over the last decade. Clear aligners have become the preferred choice for both working adults and teenagers who want to align their teeth discreetly.

Key advantages include:
- Removable aligners make brushing and flossing effortless.
- No wires or sharp metal brackets to irritate gums.
- 3D digital preview lets you see your final smile before starting.`
  },
  {
    id: 'preventing-cavities-in-children',
    title: 'A Parent\'s Guide to Childhood Dental Hygiene & Early Prevention',
    category: 'Pediatric Care',
    date: 'Sep 10, 2026',
    author: 'Dr. Elena Rostova',
    readTime: '5 min read',
    excerpt: 'How to make brushing fun for kids, prevent childhood cavities, and set up a lifelong foundation for oral health.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500',
    content: `Establishing healthy dental habits early in childhood prevents painful cavities and builds confidence.

Tips for parents:
- Start cleaning baby gums with a soft damp cloth before teeth erupt.
- Use a pea-sized amount of child-friendly fluoride toothpaste.
- Schedule your child's first dental checkup by their 1st birthday.`
  }
];

export default function News() {
  return (
    <div>
      <PageHeader
        title="Dental News & Wellness Journal"
        subtitle="Expert insights, oral health guides, and updates from the BrightSmile clinical team."
        category="Articles & Insights"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#063D35]">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#00BFA6]" />
                        {item.date}
                      </span>
                      <span>{item.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00BFA6] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-50 mt-4">
                  <span className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#00BFA6]" />
                    {item.author}
                  </span>
                  <Link
                    to={`/news/${item.id}`}
                    className="text-xs font-bold text-[#00BFA6] hover:text-[#00A892] inline-flex items-center gap-1"
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
