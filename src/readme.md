--Preecha o .env
--Inicialize o banco de dados
npx sequelize-cli db:create
npx sequelize-cli db:migrate
--Baixar dependencias do projeto
npm i
--Rodar app
npm run dev