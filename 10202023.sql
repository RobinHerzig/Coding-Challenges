-- Write a query that returns a list of products and number sold for each date.

SELECT
  sell_date,
  COUNT(DISTINCT product) AS num_sold,
  GROUP_CONCAT(
    DISTINCT product
    ORDER BY
      product SEPARATOR ','
  ) AS products
FROM
  Activities a1
GROUP BY
  sell_date;

/*
 Input: 
 Activities table:
 +------------+------------+
 | sell_date  | product     |
 +------------+------------+
 | 2020-05-30 | Headphone  |
 | 2020-06-01 | Pencil     |
 | 2020-06-02 | Mask       |
 | 2020-05-30 | Basketball |
 | 2020-06-01 | Bible      |
 | 2020-06-02 | Mask       |
 | 2020-05-30 | T-Shirt    |
 +------------+------------+
 
 Output: 
 +------------+----------+------------------------------+
 | sell_date  | num_sold | products                     |
 +------------+----------+------------------------------+
 | 2020-05-30 | 3        | Basketball,Headphone,T-shirt |
 | 2020-06-01 | 2        | Bible,Pencil                 |
 | 2020-06-02 | 1        | Mask                         |
 +------------+----------+------------------------------+
 
 Explanation: 
 For 2020-05-30, Sold items were (Headphone, Basketball, T-shirt), we sort them lexicographically and separate them by a comma.
 For 2020-06-01, Sold items were (Pencil, Bible), we sort them lexicographically and separate them by a comma.
 For 2020-06-02, the Sold item is (Mask), we just return it.
 */
/*
 
 */