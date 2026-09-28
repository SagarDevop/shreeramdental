import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { newsData } from './News';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

export default function NewsDetail() {
  const { id } = useParams();
  const article = newsData.find(n => n.id === id) || newsData[0];

  return (
    <div>
      <PageHeader
        title={article.title}
        subtitle={`Published on ${article.date} by ${article.author}`}
        category={article.category}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link to="/news" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#4AB0F0] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to News Journal</span>
          </Link>

          <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden h-96 shadow-lg border border-sky-100">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-6 text-xs text-slate-500 pb-4 border-b border-sky-100 font-medium">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#4AB0F0]" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#4AB0F0]" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#4AB0F0]" />
                {article.readTime}
              </span>
            </div>

            <div className="prose max-w-none text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base whitespace-pre-line">
              {article.content}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
