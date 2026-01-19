import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();

  return (
    <main className="p-6 space-y-4">
      <div className="text-sm text-muted-foreground">
        {session
          ? `已登入：${session.user?.email ?? session.user?.name ?? "unknown"}`
          : "尚未登入"}
      </div>

      {session ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit">登出</Button>
        </form>
      ) : (
        <div className="flex gap-2">
          <form
            action={async () => {
              "use server";
              await signIn("discord");
            }}
          >
            <Button type="submit">用 Discord 登入</Button>
          </form>
        </div>
      )}
    </main>
  );
}
