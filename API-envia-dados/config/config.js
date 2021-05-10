module.exports = {
  // Insira aqui seus dados do banco NA NUVEM AZURE
  production: {
    // altere APENAS username, password, database e host.
    username: 'SEU_USUARIO_DO_BANCO_DE_DADOS',
    password: 'SUA_SENHA_DO_BANCO_DE_DADOS',
    database: 'NOME_DO_SEU_DATABASE',
    host: 'LINK_DO_SEU_DATABASE_ deve ser algo como "MEUPROJETO.database.windows.net"',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  },

  // Insira aqui seus dados do banco LOCAL - MySQL Workbench
  dev: {
    // altere APENAS username, password e database.
    username: 'SEU_USUARIO_DO_BANCO_DE_DADOS',
    password: 'SUA_SENHA_DO_BANCO_DE_DADOS',
    database: 'NOME_DO_SEU_DATABASE',
    host: 'localhost',
    dialect: 'mysql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  },
};
 