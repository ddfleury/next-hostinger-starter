const publicUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "Minha Aplicação",
  description:
    "Base profissional em Next.js preparada para desenvolvimento e publicação na Hostinger.",
  url: publicUrl.replace(/\/$/, ""),
  navigation: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Painel", href: "/painel" },
  ],
} as const;
