// Student Attendance Record I

function checkRecord(str: string): boolean {
  const absents = str.match(/A/g) || [];
  const lates = str.match(/L+/g) || [];
  let eligible = true;

  if (absents.length >= 2) {
    eligible = false;
  }

  if (lates.some((elem) => elem.length >= 3)) {
    eligible = false;
  }

  return eligible;
}

console.log(checkRecord("PPALLP"), true);
console.log(checkRecord("PPALLL"), false);
console.log(checkRecord("PPALLAP"), false);
console.log(checkRecord("PPAALLP"), false);
console.log(checkRecord("PPLLALLP"), true);
// https://leetcode.com/problems/student-attendance-record-i/

// str: string. 1 <= str.length <= 1000. str[i] is either 'A', 'L', or 'P'.
// Return true if the student is eligible for an attendance award.
// - The student was absent ('A') for fewer than 2 days.
// - The student was never late ('L') for 3 or more consecutive days.
