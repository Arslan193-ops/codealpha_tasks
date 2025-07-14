function isValidDate(d, m, y) {
    const date = new Date(y, m - 1, d);
    return date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d;
}

function calculateAge(birthDate) {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return {
        years,
        months,
        days
    };
}

document.getElementById('calculateBtn').addEventListener('click', () => {
    const day = parseInt(document.getElementById('day').value, 10);
    const month = parseInt(document.getElementById('month').value, 10);
    const year = parseInt(document.getElementById('year').value, 10);
    const output = document.getElementById('result');

    if (!day || !month || !year) {
        output.textContent = 'Please fill in all fields.';
        return;
    }
    if (!isValidDate(day, month, year)) {
        output.textContent = 'Invalid date. Please enter a valid date.';
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    if (birthDate > new Date()) {
        output.textContent = 'Birth date cannot be in the future.';
        return;
    }

    const age = calculateAge(birthDate);
    output.textContent = `You are ${age.years} year(s), ${age.months} month(s), and ${age.days} day(s) old.`;
});