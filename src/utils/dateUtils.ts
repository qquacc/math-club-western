
export const calculateDaysUntil = (eventDate: string): number => {
	const today = new Date();
	const event = new Date(eventDate);
	const timeDiff = event.getTime() - today.getTime();
	const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
	return daysDiff;
};

export const formatDaysUntil = (days: number): string => {
	if (days < 0) {
		return `${Math.abs(days)} days ago`;
	} else if (days === 0) {
		return "Today";
	} else if (days === 1) {
		return "Tomorrow";
	} else {
		return `${days} days away`;
	}
};
