"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let discriminant = Math.pow(b, 2) - 4 * a * c;

	if (discriminant < 0) {
		return [];
	} else if (discriminant === 0) {
		let root = -b / (2 * a);
		arr = [root];
	} else {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

		arr = [root1, root2];
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyRate = percent / 100 / 12;

	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

	let totalPayout = contribution + (monthlyPayment * countMonths);

	return Number(totalPayout.toFixed(2));
}
