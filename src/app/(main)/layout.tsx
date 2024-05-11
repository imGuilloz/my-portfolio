
export default function MainLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="bg-[#161513] overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
        { children }
    </div>
  );
}