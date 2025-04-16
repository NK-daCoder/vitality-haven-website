import React from 'react';
import { Link } from 'react-router-dom';

const getTopCard = (dataArray) => {
  if (!dataArray || dataArray.length === 0) return null;

  return dataArray.reduce((top, current) => {
    const topScore = (top.views * 100 || 0) + (top.likes * 100 || 0);
    const currentScore = (current.views || 0) + (current.likes || 0);

    return currentScore > topScore ? current : top;
  });
};


const Card = ({ data }) => {
  const topCard = getTopCard(data);
  console.log("This is The Top Card:", topCard);

  return (
    <article className="rounded-3xl backdrop-blur-md overflow-hidden relative w-full max-w-7xl mx-auto min-h-[30rem] md:min-h-[35rem]">
      {/* Background Image */}
      <img
        src={topCard.featuredImage || "fallback-image-url"}
        alt="background-image"
        className="absolute w-full h-full object-cover"
      />

      {/* Floating Category */}
      <p className='absolute top-3 right-3 border-2 border-orange-500 px-4 py-1 text-sm md:text-base text-orange-600 text-center rounded-full bg-black/50'>
        {topCard.category || "Neuroscience"}
      </p>

      {/* Card Content */}
      <section className="absolute bottom-0 left-0 z-20 w-full h-full flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Title & Description */}
        <div className="space-y-2">
          <h1 className="text-lg md:text-2xl text-white font-bold leading-snug">
            {topCard.title || "This is a gym title — did you know neuroscience is based off gym material? Who knew!"}
          </h1>
          <p className="text-sm text-white opacity-90">
            {topCard.excerpt || "Mmmm, never would have thought that the gibberish above would be so long it actually makes studying ridiculous."}
          </p>
        </div>

        {/* Author, Date, Stats */}
        <div className="flex flex-col md:flex-row justify-between gap-4 flex-wrap">
          {/* Author & Date */}
          <div className="flex gap-6 flex-wrap items-center">
            <div className="flex items-center gap-3">
              <img
                src={topCard.authorImage || "fallback-author.jpg"}
                alt="Author"
                className="w-8 h-8 rounded-full border border-orange-600"
              />
              <div className="text-white text-sm flex flex-col">
                <p className="font-semibold order-2">{topCard.author || "Frankline Mumkin"}</p>
                <p className="text-xs opacity-75 order-1">Written By</p>
              </div>
            </div>

            <div className="text-white text-sm flex flex-col">
              <p className="font-semibold order-2">{topCard.date || "10 April 2025"}</p>
              <p className="text-xs opacity-75 order-1">Published on</p>
            </div>
          </div>

          {/* Stats */}
          <ul className="flex gap-4 items-center text-sm text-white">
            <li className="flex items-center gap-1">
              {/* Views Icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path d="M1.5 12s4.5-7.5 10.5-7.5S22.5 12 22.5 12s-4.5 7.5-10.5 7.5S1.5 12 1.5 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span>{topCard.views || "1233"}</span>
            </li>

            <li className="flex items-center gap-1">
              {/* Heart Icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                         2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                         C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                         c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>{topCard.likes || "1233"}</span>
            </li>

            <li className="flex items-center gap-1">
              {/* Clock Icon */}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
              <span>3 min read</span>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
};

const FeaturedCard = ({ data }) => {
  return (
    <article className="relative w-full h-[35rem] bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-lg flex flex-col">
      
      <img 
        src={data?.featuredImage || "/default-image.jpg"}
        alt={data?.title || "Blog featured image"}
        className="w-full h-[15rem] object-cover"
      />

      <div className="p-4 flex flex-col gap-3 flex-1">
        <h2 className="text-xl font-semibold leading-snug bg-gradient-to-br from-orange-500 to-orange-200 text-transparent bg-clip-text">
          {data?.title || "The Neuroscience of Muscle Memory"}
        </h2>

        <p className="text-sm text-zinc-300 line-clamp-3">
          {data?.excerpt || "Discover how your brain encodes movement patterns and how to leverage this for faster skill acquisition."}
        </p>

        <ul className="flex gap-4 text-xs text-zinc-400 mt-auto">
          <li className="flex items-center gap-1">
            {/* Views */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M1.5 12s4.5-7.5 10.5-7.5S22.5 12 22.5 12s-4.5 7.5-10.5 7.5S1.5 12 1.5 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>{data?.views || "1.2k"}</span>
          </li>
          <li className="flex items-center gap-1">
            {/* Likes */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                       2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                       C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                       c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>{data?.likes || "980"}</span>
          </li>
          <li className="flex items-center gap-1">
            {/* Reading Time */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{data?.readingTime || "8 min"}</span>
          </li>
        </ul>

        <Link
          to="#"
          className="mt-4 w-full inline-block text-center py-2 text-sm font-medium text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition"
        >
          View Blog
        </Link>
      </div>

      <span className="absolute top-4 right-4 bg-zinc-950 border border-orange-500 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full">
        {data?.category || "Neuroscience"}
      </span>
    </article>
  );
};

export { Card, FeaturedCard };
