import { MainContent } from "@/components/organisms/MainContent";
import { Sidebar } from "@/components/organisms/Sidebar";
import { SocialRail } from "@/components/organisms/SocialRail";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f1f8] text-slate-900">
      {/* Main resume shell: left profile rail, scrollable center content and right social rail. */}
      <div className="mx-auto flex max-w-[1540px] flex-col gap-6 lg:flex-row lg:gap-8">
        <Sidebar />
        <div className="min-w-0 flex-1 px-0 lg:px-0">
          <MainContent />
        </div>
        <SocialRail />
      </div>
    </div>
  );
}
