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

INSERT INTO employee (first_name, last_name, role_id, manager_id) ("Dominic", "Xu", 1, 1),
  ("John", "Doe", 2, 2),
  ("Tyler", "Johnson", 3, 1, 1),
  ("Amy", "Adams", 4, 1, 1),
  ("Jacky", "Chan", 4, 1, 1),
  ("Jet", "Li", 5, 2, 2),
  ("Konnor", "Onstad", 6, 2, 2)