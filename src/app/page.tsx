import Contador from "@/components/Contador";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 p-6 dark:bg-black">
      <div className="rounded-lg bg-white p-8 shadow-sm dark:bg-zinc-900">
        <Contador />
      </div>
    </main>
  );
}
