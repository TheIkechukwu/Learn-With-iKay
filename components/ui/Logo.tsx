import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.jpg"
      alt="Logo"
      width={48}
      height={48}
      className="object-contain"
      priority
    />
  );
}