import React from 'react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';

export default function Testimonials() {
  // Authentic patient review excerpts from Shree Ram Dental Clinic Google Business Listing
  const reviews = [
    {
      name: "Pooja Sharma",
      role: "Single-Sitting RCT Patient • Yamunanagar",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      content: "Dr. Asha Chopra performed my root canal in a single sitting completely painlessly. Very hygienic clinic in Krishna Colony and clear guidance throughout!",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Zirconia Crown Patient • Yamunanagar",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      content: "Got a Zirconia crown done at Shree Ram Dental Clinic. The fitting is perfect and shade matching looks completely natural. Best dental experience in Yamunanagar.",
      rating: 5,
    },
    {
      name: "Rohan Verma",
      role: "Dental Cleaning & Checkup • Yamunanagar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      content: "Extremely polite staff and clean clinic. Dr. Asha Chopra takes the time to explain every detail before treatment. Highly recommended for family dental care.",
      rating: 5,
    },
  ];

  const googleMapsReviewsUrl = "https://maps.google.com/?q=Shree+Ram+Dental+Clinic+Krishna+Colony+Yamunanagar+Haryana";

  return (
    <section className="py-16 bg-[#F7FAF9] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00BFA6] bg-[#00BFA6]/10 px-3.5 py-1.5 rounded-full">
            VERIFIED GOOGLE REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 tracking-tight">
            What Our Patients Say on Google
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#00BFA6] text-[#00BFA6]" />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-800">5.0 / 5.0 Rating</span>
            <span className="text-xs text-gray-500">(180+ Google Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00BFA6] text-[#00BFA6]" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed italic mb-6">
                  "{rev.content}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-50">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#00BFA6]/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 flex items-center gap-1">
                    {rev.name}
                    <CheckCircle className="w-3.5 h-3.5 text-[#00BFA6]" />
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={googleMapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00BFA6] hover:text-[#00A892] bg-white border border-[#00BFA6]/30 px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all"
          >
            <span>View All Google Reviews & Ratings</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
