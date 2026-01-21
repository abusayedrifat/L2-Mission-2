-- create function in postgres


SELECT* from employees;


CREATE or REPLACE FUNCTION dlt_emp_by_id(p_emp_id INT)
RETURNS void
LANGUAGE SQL
AS
$$
DELETE FROM employees WHERE employee_id = p_emp_id;
$$;

SELECT dlt_emp_by_id(35) 


--procedure


CREATE Procedure remove_emp()
LANGUAGE plpgsql
AS
$$

BEGIN

    DELETE FROM employees WHERE employee_id = 31;
END

$$;
CALL remove_emp();


--procedure using variable

CREATE Procedure remove_emp_var()
LANGUAGE plpgsql
AS

$$
DECLARE
test_var INT;
BEGIN
    SELECT employee_id INTO test_var FROM employees WHERE employee_id = 33;
    DELETE FROM employees WHERE employee_id = test_var;
    RAISE NOTICE 'employee removed successfully';
$$;

CALL remove_emp_var()
















