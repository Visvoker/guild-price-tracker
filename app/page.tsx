import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-6">
      <Button>OK</Button>
      <div>
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>
      </div>
    </main>
  );
}
