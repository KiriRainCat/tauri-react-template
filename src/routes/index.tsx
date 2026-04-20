import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createFileRoute } from "@tanstack/react-router";
import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const techs = [
    { href: "https://vite.dev", src: "/vite.svg", label: "Vite" },
    { href: "https://tauri.app", src: "/tauri.svg", label: "Tauri" },
    { href: "https://react.dev", src: "/react.svg", label: "React" },
  ];

  const [greetMsg, setGreetMsg] = useState("");
  const { register, handleSubmit, formState: form } = useForm<{ name: string }>();

  const greet = async ({ name }: { name: string }) => setGreetMsg(await invoke("greet", { name }));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 p-8">
      {/* Welcome */}
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Tauri + React</h1>
        <p className="text-muted-foreground">Build performant desktop apps with modern web technologies</p>
      </div>

      {/* Tech Cards */}
      <div className="flex gap-4">
        {techs.map((t) => (
          <a key={t.label} href={t.href} target="_blank">
            <Card className="hover:bg-muted transition-colors">
              <CardContent className="flex flex-col items-center gap-2">
                <img src={t.src} className="size-10" alt={t.label} />
                <p className="text-muted-foreground text-xs">{t.label}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {/* Sample Tauri Command */}
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sample Tauri Command</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(greet)} className="space-y-3">
            <div className="space-y-1">
              <Input {...register("name", { required: "Please enter a name" })} placeholder="Enter a name..." />
              {form.errors.name && <p className="text-destructive text-xs">{form.errors.name.message}</p>}
            </div>

            <Button type="submit" className="w-full">
              Greet
            </Button>

            {greetMsg && <p className="text-primary text-center font-medium">{greetMsg}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
