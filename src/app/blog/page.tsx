import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/sections/Footer';
import { blogPosts, featuredPost } from '@/data/dataBlog';
import Logo from '../../../public/icons/logo.svg';

export const metadata: Metadata = {
  title: 'Tattoo Blog | Good Luck Tattoo Studio',
  description:
    'Tattoo inspiration, practical aftercare advice, studio stories, and artist guidance from Good Luck Tattoo Studio.',
};

export default function Blog() {
  return (
    <>
      <main className="min-h-screen bg-bgAlpha">
        <header className="border-b border-white/10 bg-black/60">
          <div className="container flex min-h-20 items-center justify-between gap-6 lg:min-h-24">
            <Link
              href="/"
              aria-label="Good Luck Tattoo Studio home"
              className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange"
            >
              <Logo width={40} height={40} aria-hidden="true" />
              <span className="hidden font-rye text-[18px] text-white sm:inline lg:text-[20px]">
                Good Luck Tattoo Studio
              </span>
            </Link>

            <nav aria-label="Blog navigation" className="flex items-center gap-6">
              <Link
                href="/"
                className="rounded-sm font-playfair text-[16px] text-white transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange sm:text-[18px]"
              >
                Home
              </Link>
              <Link
                href="/gallery"
                className="rounded-sm font-playfair text-[16px] text-white transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange sm:text-[18px]"
              >
                Gallery
              </Link>
            </nav>
          </div>
        </header>

        <section className="container pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="font-playfair text-[15px] font-semibold uppercase tracking-[0.24em] text-darkOrange sm:text-[16px]">
              Stories, craft &amp; care
            </p>
            <h1 className="mt-4 text-balance font-rye text-[42px] leading-tight text-white sm:text-[64px] lg:text-[76px]">
              The Good Luck Journal
            </h1>
            <p className="mx-auto mt-6 max-w-[680px] text-pretty font-playfair text-[17px] leading-relaxed text-[#b8b8b8] sm:text-[20px]">
              Honest tattoo advice, creative inspiration, and stories from
              inside our studio.
            </p>
          </div>

          <article className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#191a22] shadow-card sm:mt-16 lg:grid lg:grid-cols-[1.12fr_0.88fr]">
            <div className="relative min-h-[320px] sm:min-h-[460px] lg:min-h-[520px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.imageAlt}
                fill
                priority
                sizes="(min-width: 1440px) 770px, (min-width: 834px) calc(100vw - 64px), calc(100vw - 32px)"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/25"
              />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <span className="w-fit rounded-full border border-darkOrange/60 bg-lightOrange px-4 py-2 font-playfair text-[14px] font-semibold uppercase tracking-[0.12em] text-darkOrange">
                {featuredPost.category}
              </span>
              <h2 className="mt-6 text-balance font-rye text-[30px] leading-tight text-white sm:text-[40px]">
                {featuredPost.title}
              </h2>
              <p className="mt-5 text-pretty font-playfair text-[17px] leading-relaxed text-[#b8b8b8]">
                {featuredPost.excerpt}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-playfair text-[14px] text-[#888888]">
                <time dateTime={featuredPost.dateTime}>
                  {featuredPost.date}
                </time>
                <span aria-hidden="true">•</span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </article>
        </section>

        <section className="border-y border-white/10 bg-black/25 py-16 sm:py-20 lg:py-24">
          <div className="container">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-playfair text-[15px] font-semibold uppercase tracking-[0.2em] text-darkOrange">
                  From the studio
                </p>
                <h2 className="mt-3 text-balance font-rye text-[34px] text-white sm:text-[48px]">
                  Latest stories
                </h2>
              </div>
              <p className="max-w-[430px] text-pretty font-playfair text-[16px] leading-relaxed text-[#a8a8a8] sm:text-right">
                Practical knowledge to help you feel informed before, during,
                and after your appointment.
              </p>
            </div>

            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
              {blogPosts.map(post => (
                <article
                  key={post.title}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#191a22] transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-darkOrange/45"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 1440px) 440px, (min-width: 834px) calc(50vw - 46px), calc(100vw - 32px)"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent"
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <span className="font-playfair text-[14px] font-semibold uppercase tracking-[0.12em] text-darkOrange">
                      {post.category}
                    </span>
                    <h3 className="mt-3 text-balance font-rye text-[24px] leading-snug text-white">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-pretty font-playfair text-[16px] leading-relaxed text-[#a8a8a8]">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-5 font-playfair text-[13px] text-[#888888]">
                      <time dateTime={post.dateTime}>{post.date}</time>
                      <span aria-hidden="true">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-darkOrange/35 bg-[#191a22] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lightOrange blur-3xl"
            />
            <div className="relative mx-auto max-w-[720px]">
              <p className="font-playfair text-[15px] font-semibold uppercase tracking-[0.22em] text-darkOrange">
                Your idea starts here
              </p>
              <h2 className="mt-4 text-balance font-rye text-[32px] leading-tight text-white sm:text-[46px]">
                Ready to plan your next tattoo?
              </h2>
              <p className="mx-auto mt-5 max-w-[590px] text-pretty font-playfair text-[17px] leading-relaxed text-[#b8b8b8]">
                Tell us about your idea and we will help you choose the right
                artist, style, and placement.
              </p>
              <Link
                href="/#contacts"
                className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full border-2 border-darkOrange px-8 font-playfair text-[18px] font-semibold text-darkOrange transition-colors hover:bg-darkOrange hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#191a22]"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
