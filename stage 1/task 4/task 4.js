/*
	side hustle pays N1000 per hr to employees, they only work for 4 hrs
	per day, if an employee works for extra hrs, they get N200 per hr.
	write a program that calculates the salary of an employee and also 
	calculates the extra tip if the employee worked over time.
	it shud print out the employee salary, which is a sum of ideal 
	salary and overtime earnings
*/

/*
 * Calculates salary of the employee
 * @param {Number} hrsWorked --> number of hrs the employee worked per day
 * @param {Number} extraHrs --> number of extra hrs the employee worked per day
 * @param {Number} daysWorked --> number of days the employee worked per month
 * Returns the total salary of the employee
 */
const calcSalary = (hrsWorked, extraHrs=0, daysWorked=30) => {
	if (hrsWorked > 4) 
		return console.warn('Warning :>> number of hrs the employee worked per day should be less or equal to 4.')
	if (hrsWorked < 4 && extraHrs > 0)
		return console.warn('Warning :>> extra hrs starts counting when the employee works past 4 hrs a day')
	const salary = (hrsWorked * 1000) * daysWorked;
	const extra = (extraHrs * 200) * daysWorked;
	const totalSalary = salary + extra;

	return totalSalary.toLocaleString('en-NG', { currency:'NGN', style:'currency' })
}
