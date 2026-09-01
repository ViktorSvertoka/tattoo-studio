import Link from 'next/link';
import Logo from '../../../public/icons/logo.svg';

interface PageHeaderProps {
  navigationLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}

export default function PageHeader({
  navigationLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeaderProps) {
  const linkClassName =
    'rounded-sm font-playfair text-[16px] text-white transition-colors hover:text-darkOrange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkOrange sm:text-[18px]';

  return (
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

        <nav aria-label={navigationLabel} className="flex items-center gap-6">
          <Link href="/" className={linkClassName}>
            Home
          </Link>
          <Link href={secondaryHref} className={linkClassName}>
            {secondaryLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
