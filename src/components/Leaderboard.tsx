
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

const Leaderboard = () => {
	const topUsers = [
		{ name: "Alex Chen", score: 2847, rank: 1, streak: 23, avatar: "AC" },
		{ name: "Sarah Johnson", score: 2756, rank: 2, streak: 18, avatar: "SJ" },
		{ name: "Marcus Rodriguez", score: 2698, rank: 3, streak: 15, avatar: "MR" },
		{ name: "Emma Thompson", score: 2634, rank: 4, streak: 12, avatar: "ET" },
		{ name: "David Kim", score: 2587, rank: 5, streak: 9, avatar: "DK" },
	];

	const getRankIcon = (rank: number) => {
		switch (rank) {
			case 1:
				return <Trophy className="h-5 w-5 text-yellow-500" />;
			case 2:
				return <Medal className="h-5 w-5 text-gray-400" />;
			case 3:
				return <Award className="h-5 w-5 text-amber-600" />;
			default:
				return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
		}
	};

	return (
		<section id="leaderboard" className="mb-12">
			<h2 className="mb-6 text-3xl font-bold text-gray-800">Club Leaderboard</h2>
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center space-x-2">
						<Trophy className="h-5 w-5 text-yellow-500" />
						<span>Top Performers This Month</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						{topUsers.map((user) => (
							<div key={user.rank} className="flex items-center justify-between rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100">
								<div className="flex items-center space-x-4">
									<div className="flex w-8 items-center justify-center">
										{getRankIcon(user.rank)}
									</div>
									<Avatar className="h-10 w-10">
										<AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
											{user.avatar}
										</AvatarFallback>
									</Avatar>
									<div>
										<h3 className="font-semibold text-gray-800">{user.name}</h3>
										<p className="text-sm text-gray-600">{user.streak} day streak</p>
									</div>
								</div>
								<Badge variant="outline" className="px-3 py-1 text-lg font-bold">
									{user.score.toLocaleString()} pts
								</Badge>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</section>
	);
};

export default Leaderboard;
