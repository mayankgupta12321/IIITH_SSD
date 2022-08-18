SELECT CONCAT(emp2.Fname, " " , emp2.Minit , " " ,emp2.Lname) AS FULL_NAME
,emp2.Ssn
,emp2.Dno
,supervisor.emp_count
FROM COMPANY.EMPLOYEE emp2
INNER JOIN
(
SELECT emp1.Super_ssn, COUNT(Super_Ssn) emp_count FROM COMPANY.EMPLOYEE emp1
WHERE emp1.Super_ssn IS NOT NULL
GROUP BY Super_ssn
) supervisor ON emp2.Ssn = supervisor.Super_ssn
ORDER BY 4
;