import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import Header from "@/components/Header";
import { apiUrl } from "@/lib/utils"; // ⟵ use your helper

type AuthUser = { id: string; name?: string; email: string };
type AuthOk = { ok: true; user: AuthUser };
type AuthErr = { error: string };

const Login = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [agreeToTerms, setAgreeToTerms] = useState(false);

	// new ui state
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setSubmitting(true);

		try {
			const path = isLogin ? "/api/auth/login" : "/api/auth/signup";
			const body = isLogin
				? { email, password }
				: { name, email, password, confirmPassword, agreeToTerms };

			const res = await fetch(apiUrl(path), {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include", // ⟵ receive httpOnly JWT cookie
				body: JSON.stringify(body),
			});

			const data = (await res.json()) as AuthOk | AuthErr;
			if (!res.ok) {
				throw new Error(("error" in data && data.error) || "Request failed");
			}

			// success — route however your app does it
			// e.g. if you have a router: navigate("/")
			alert(`${isLogin ? "Welcome back" : "Account created"}: ${(data as AuthOk).user.email}`);
			// window.location.href = "/"; // or use your router
		} catch (err) {
			setError(err?.message || "Something went wrong");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<Header />
			<div className="flex items-center justify-center px-4 py-12">
				<Card className="w-full max-w-md">
					<CardHeader className="space-y-1">
						<CardTitle className="text-center text-2xl font-bold">
							{isLogin ? "Sign in" : "Sign up"}
						</CardTitle>
						<CardDescription className="text-center">
							{isLogin
								? "Enter your email and password to access your account"
								: "Create a new account to get started"}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							{!isLogin && (
								<div className="space-y-2">
									<Label htmlFor="name">Name</Label>
									<Input
										id="name"
										type="text"
										placeholder="Your full name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
									/>
								</div>
							)}

							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="name@example.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<div className="relative">
									<Input
										id="password"
										type={showPassword ? "text" : "password"}
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
										className="pr-10"
									/>
									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
									>
										{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
									</button>
								</div>
							</div>

							{!isLogin && (
								<div className="space-y-2">
									<Label htmlFor="confirmPassword">Confirm Password</Label>
									<div className="relative">
										<Input
											id="confirmPassword"
											type={showConfirmPassword ? "text" : "password"}
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
											required
											className="pr-10"
										/>
										<button
											type="button"
											onClick={() => setShowConfirmPassword(!showConfirmPassword)}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
										>
											{showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
										</button>
									</div>
								</div>
							)}

							{!isLogin && (
								<div className="flex items-center space-x-2">
									<Checkbox id="terms" checked={agreeToTerms} onCheckedChange={(v) => setAgreeToTerms(Boolean(v))} />
									<Label htmlFor="terms" className="text-sm text-muted-foreground">
										I agree to the Terms & Privacy Policy
									</Label>
								</div>
							)}

							<Button type="submit" className="w-full" disabled={submitting}>
								{submitting ? (isLogin ? "Signing in..." : "Signing up...") : (isLogin ? "Sign in" : "Sign up")}
							</Button>

							{error && <p className="mt-2 text-sm text-red-600">{error}</p>}

							<div className="text-center text-sm text-muted-foreground">
								{isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
								<button
									type="button"
									onClick={() => setIsLogin(!isLogin)}
									className="font-medium text-primary hover:underline"
								>
									{isLogin ? "Sign up" : "Sign in"}
								</button>
							</div>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Login;