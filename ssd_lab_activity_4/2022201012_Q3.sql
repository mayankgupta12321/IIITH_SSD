DELIMITER $$
CREATE PROCEDURE get_names_by_amount ()
BEGIN
	SELECT CUST_NAME, GRADE AS TOTAL FROM customer WHERE (OPENING_AMT + RECEIVE_AMT) > 10000;
END$$
DELIMITER ;