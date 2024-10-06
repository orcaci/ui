import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Username / Email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Password"
              />
            </div>
            <div className="flex items-center">
              <a href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Button type="submit" className="w-full">
              <LogIn /> 
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
            <Button variant="outline" className="w-full">
              Login with Micosoft
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
