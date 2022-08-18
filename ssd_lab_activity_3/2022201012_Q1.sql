SELECT CONCAT(emp.Fname, " " , emp.Minit , " " ,emp.Lname) AS FULL_NAME
,emp.Ssn
,emp.Dno
,mgr.Dname
FROM COMPANY.EMPLOYEE emp
INNER JOIN (
	SELECT dept.Dnumber , dept.Dname, dept.Mgr_Ssn FROM COMPANY.DEPARTMENT dept
		INNER JOIN (
		SELECT emp1.Dno FROM COMPANY.EMPLOYEE AS emp1 WHERE emp1.Ssn IN (
			SELECT DISTINCT works1.Essn AS Total_Hours FROM COMPANY.WORKS_ON works1
		GROUP BY Essn HAVING SUM(COALESCE(works1.Hours,0)) < 40.0 )
		UNION ALL
		SELECT emp1.Dno FROM COMPANY.EMPLOYEE AS emp1 WHERE emp1.Ssn NOT IN (
			SELECT DISTINCT Essn FROM COMPANY.WORKS_ON )
		) e1
		ON dept.Dnumber = e1.Dno
) mgr
ON mgr.Mgr_Ssn = emp.Ssn;