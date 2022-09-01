DELIMITER $$
CREATE PROCEDURE `get_sum` (
IN `num1` INT,
IN `num2` INT,
OUT `sum` INT
)
BEGIN
	SET `sum` = `num1` + `num2`;
END$$
DELIMITER ;