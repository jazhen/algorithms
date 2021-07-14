SELECT Prices.product_id,
       ROUND(SUM(UnitsSold.units * Prices.price) / SUM(UnitsSold.units), 2) AS average_price
  FROM Prices
       INNER JOIN UnitsSold USING (product_id)
 WHERE UnitsSold.purchase_date BETWEEN Prices.start_date AND Prices.end_date
 GROUP BY Prices.product_id
