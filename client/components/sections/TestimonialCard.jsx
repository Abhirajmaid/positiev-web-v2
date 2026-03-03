'use client';

import Image from 'next/image';

function StarBadge({ rating = 5.0, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-sm font-medium text-neutral-700 shadow-sm ring-1 ring-black/5 ${className}`}
    >
      <span className="text-amber-500">★</span>
      {Number(rating).toFixed(1)}
    </span>
  );
}

const cardBase =
  'relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_10px_20px_-2px_rgba(0,0,0,0.05),0_20px_45px_-8px_rgba(0,0,0,0.1),6px_6px_0_0_rgba(0,0,0,0.03)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.07),0_16px_30px_-4px_rgba(0,0,0,0.06),0_28px_60px_-12px_rgba(0,0,0,0.12),8px_8px_0_0_rgba(0,0,0,0.04)]';

const cardClipPath =
  'polygon(20% 0%, 100% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 1% 100%, 0% 20%)';

function BookPageCorner() {
  return (
    <div
      className="absolute right-0 top-0 z-10 h-8 w-8 overflow-hidden opacity-80"
      aria-hidden
    >
      <div
        className="h-8 w-8 rounded-bl-full bg-gradient-to-br from-white to-neutral-100"
        style={{ borderBottomLeftRadius: '100%' }}
      />
    </div>
  );
}

export function MediaOnlyCard({ mediaSrc, mediaType = 'video' }) {
  return (
    <article className={cardBase}>
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-3xl">
        {mediaType === 'video' ? (
          <video
            src={mediaSrc}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            autoPlay
          />
        ) : (
          <Image
            src={mediaSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>
    </article>
  );
}

export function FeaturedTestimonialCard({
  mediaSrc,
  mediaType = 'video',
  rating = 5.0,
  quote,
  name,
  role,
  avatarSrc,
}) {
  return (
    <article className={cardBase}>
      <BookPageCorner />
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-3xl">
        {mediaType === 'video' ? (
          <video
            src={mediaSrc}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            autoPlay
          />
        ) : (
          <Image
            src={mediaSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <div className="absolute left-4 top-4">
          <StarBadge rating={rating} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 text-[15px] leading-relaxed text-neutral-600">{quote}</p>
        <div className="mt-auto flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-neutral-200">
            {avatarSrc ? (
              <Image src={avatarSrc} alt="" fill className="object-cover" sizes="40px" />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-neutral-500">
                {name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <p className="font-semibold text-neutral-900">{name}</p>
            <p className="text-sm text-neutral-500">{role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

const cardGlass =
  'bg-white/80 backdrop-blur-lg border border-neutral-500 shadow-lg hover:shadow-xl';

export function StandardTestimonialCard({ rating = 5.0, quote, name, role, avatarSrc }) {
  return (
    <article
      className={`relative flex h-full min-w-0 flex-col overflow-hidden rounded-none p-6 transition-all duration-300 ease-out hover:-translate-y-1 ${cardGlass}`}
      style={{ clipPath: cardClipPath }}
    >
      <div className="mb-4">
        <StarBadge rating={rating} />
      </div>
      <p className="mb-6 flex-1 min-h-0 text-[15px] leading-relaxed text-neutral-600">{quote}</p>
      <div className="flex shrink-0 items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-neutral-200">
          {avatarSrc ? (
            <Image src={avatarSrc} alt="" fill className="object-cover" sizes="40px" />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-neutral-500">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-neutral-900">{name}</p>
          <p className="text-sm text-neutral-500">{role ?? ''}</p>
        </div>
      </div>
    </article>
  );
}
