'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const defaultVideoSrc = '/cta.mp4';

export function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  videoSrc = defaultVideoSrc,
  className = '',
}) {
  return (
    <section
      className={`relative flex min-h-[50vh] items-center justify-center overflow-hidden text-white ${className}`}
      aria-label="Call to action"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: -2 }}
        aria-hidden
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 bg-black/50"
        style={{ zIndex: -1 }}
        aria-hidden
      />

      {/* Center glass box */}
      <div className="mx-auto w-[90%] max-w-[1000px] px-6 py-12 sm:px-10 sm:py-14 md:px-12 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl text-center"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 sm:text-lg md:text-xl">
                {subtitle}
              </p>
            )}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryLabel && primaryHref && (
                <Button
                  href={primaryHref}
                  variant="secondary"
                  className="!min-w-[180px] !border-white !text-white transition-all duration-300 hover:!scale-105 hover:!bg-white hover:!text-black hover:!shadow-xl"
                >
                  {primaryLabel}
                </Button>
              )}
              {secondaryLabel && secondaryHref && (
                <Button
                  href={secondaryHref}
                  variant="ghost"
                  className="!min-w-[180px] !text-white transition-all duration-300 hover:!bg-white/15 hover:!text-white"
                >
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
