import Database from '../database/index.js';

const instance = Database.getInstance();

export const getEmployeesRepository = async () => {
  const query = 'SELECT * FROM employees';
  const { rows } = await instance.executeQuery(query);

  return rows;
};

export const getEmployeeByNameRepository = async (name) => {
  const query = 'SELECT * FROM employees WHERE name = $1';
  const { rows } = await instance.executeQuery(query, [name]);

  return rows;
};

export const createEmployeeRepository = async (data) => {
  const fields = ['admission_date', 'name', 'salary'];
  const values = fields.map((field) => data[field]);

  const query = `INSERT INTO employees (${fields.join(
    ', '
  )}) VALUES ($1, $2, $3) RETURNING *`;
  const { rows } = await instance.executeQuery(query, [...values]);

  return rows[0];
};
