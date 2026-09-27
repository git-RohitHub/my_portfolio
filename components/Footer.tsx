import Image from "next/image";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full border-t titanium-border bg-surface-container-lowest/80 py-10">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            alt={`${profile.name} Logo`}
            width={24}
            height={24}
            className="w-6 h-6 rounded-md object-contain"
            src={profile.avatar}
          />
          <span className="font-mono text-xs font-bold text-white">
            {profile.name.toUpperCase()}
          </span>
          <span className="text-white/20 font-mono">/</span>
          <span className="font-mono text-xs text-outline">{profile.role}</span>
        </div>
        <div className="flex items-center gap-6 font-mono text-xs text-outline">
          <a
            className="hover:text-primary transition-colors"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="hover:text-primary transition-colors" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a className="hover:text-primary transition-colors" href={profile.phoneHref}>
            {profile.phone}
          </a>
          <span className="text-outline/40">Meerut, UP, India</span>
        </div>
      </div>
    </footer>
  );
}
