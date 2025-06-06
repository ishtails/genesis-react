import Navbar from "@/lib/components/custom/Navbar";
import Sidebar from "@/lib/components/custom/Sidebar";
import ThemeSwitch from "@/lib/components/custom/ThemeSwitch";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background [--navbar-height:4rem] sm:[--sidebar-width:12rem] overflow-auto">
      <Navbar />
      <Sidebar />

      <div className="mt-[calc(var(--navbar-height))] ml-[var(--sidebar-width)] h-[calc(100dvh-var(--navbar-height))] @container/main">
        {children}
      </div>

      <div className="fixed bottom-4 right-4">
        <ThemeSwitch />
      </div>
    </div>
  )
}