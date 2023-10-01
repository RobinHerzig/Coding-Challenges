-- Write a query that returns the largest single number from the table, or null.

SELECT
  MAX(num) AS num
FROM
  mynumbers
WHERE
  num IN (
    SELECT
      num
    FROM
      mynumbers
    GROUP BY
      num
    HAVING
      COUNT(num) = 1
  );

  /*
   Example 1:
   
   Input: 
   MyNumbers table:
   +-----+
   | num |
   +-----+
   | 8   |
   | 8   |
   | 3   |
   | 3   |
   | 1   |
   | 4   |
   | 5   |
   | 6   |
   +-----+
   
   Output: 
   +-----+
   | num |
   +-----+
   | 6   |
   +-----+
   
   Explanation: The single numbers are 1, 4, 5, and 6. Since 6 is the largest single number, we return it.
   
   Example 2:
   
   Input: 
   MyNumbers table:
   +-----+
   | num |
   +-----+
   | 8   |
   | 8   |
   | 7   |
   | 7   |
   | 3   |
   | 3   |
   | 3   |
   +-----+
   
   Output: 
   +------+
   | num  |
   +------+
   | null |
   +------+
   
   Explanation: There are no single numbers in the input table so we return null.
   */
  /*
   
   */