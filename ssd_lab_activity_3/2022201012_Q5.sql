SELECT mgr.Mgr_Ssn, mgr.Dnumber, COUNT(depend.Dependent_Name) AS No_Of_Dependents 
FROM COMPANY.DEPENDENT depend
INNER JOIN
(
SELECT Dnumber, Mgr_Ssn from COMPANY.DEPARTMENT 
WHERE Dnumber IN (
	SELECT Dnumber FROM DEPT_LOCATIONS 
	GROUP BY Dnumber HAVING COUNT(*) >= 2)
) mgr
ON mgr.Mgr_Ssn = depend.Essn
GROUP BY mgr.Mgr_Ssn, mgr.Dnumber;