SELECT dept1.Dnumber, dept1.Dname, COUNT(loc.Dlocation) AS No_Of_Location 
FROM DEPT_LOCATIONS loc
INNER JOIN
(
SELECT dept.Dnumber, dept.Dname from COMPANY.DEPARTMENT dept
INNER JOIN (
SELECT Essn, COUNT(1) FROM COMPANY.DEPENDENT where Sex = 'F' 
GROUP BY Essn HAVING COUNT(1) >= 2
) depend 
ON dept.Mgr_Ssn = depend.Essn
) dept1 
ON loc.Dnumber = dept1.Dnumber
GROUP BY 1,2;