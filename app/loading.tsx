import { PageLoader } from "@/components/ui/PageLoader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-surface">
      <PageLoader />
    </div>
  );
}