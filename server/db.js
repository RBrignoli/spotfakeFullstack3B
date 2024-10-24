import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    'spotfake', //nome do database
    'postgres', // usuario do servidor
    'postgres', // senha do servidor
    {
        host: 'localhost', //endereço do servidor
        port: 5432, //porta que o servidor esta rodando
        dialect: 'postgres' //tipo do sgbd
    }
)



const User = sequelize.define('user', {
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dataNasc: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.DataTypes.ENUM('ativo', 'inativo'),
        allowNull: false,
        defaultValue: 'inativo'
    }
})

const criarTabelas = () => {
    sequelize.authenticate().then(() => {
        console.log('conectou')
    })
        .catch((err) => {
            console.log(err)
        })
    sequelize.sync({ force: true }).then(() => {
        console.log('tabela criada')
    })

}

export { User, sequelize, criarTabelas };


