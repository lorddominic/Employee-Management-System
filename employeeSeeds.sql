USE contact_DB;
INSERT INTO department (id, name)
VALUES
  (1, "Management");
INSERT INTO department (id, name)
VALUES
  (2, "Software Developing");
INSERT INTO department (id, name)
VALUES
  (3, "Sales");
INSERT INTO department (id, name)
VALUES
  (4, "Safety");
INSERT INTO employee_role (id, title, salary, department_id)
VALUES(1, "manager", 9000000, 1);
INSERT INTO employee_role (id, title, salary, department_id)
VALUES(2, "manager", 6000000, 1);
INSERT INTO employee_role (id, title, salary, department_id)
VALUES(3, "techlead", 5000000, 2);
INSERT INTO employee_role (id, title, salary, department_id)
VALUES(4, "junior developer", 80000, 2);
INSERT INTO employee_role (id, title, salary, department_id)
VALUES(5, "sales", 74000, 3);
INSERT INTO employee_role (id, title, salary, department_id)
VALUES(6, "janitor", 50000, 4);
-- employee_role id and employee id
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES(1, "Dominic", "Xu", "manager", 1)
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES(2, "John", "Doe", "manager", 2)
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES(3, "Tyler", "Johnson", "techlead", 3)
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES(4, "Amy", "Adams", "junior developer", 4)
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES(5, "Jacky", "Chan", "junior developer", 4)
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES(6, "Jet", "Li", "sales", 5)
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES(7, "Abby", "Miller", "sales", 5)
INSERT INTO employee (id, first_name, last_name, role_id)
VALUES(8, "Konnor", "Onstad", "janitor", 6)