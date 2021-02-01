let id = 1;

function proximoId() {
    return id++;
}

const perfis = [
    { id: 1, nome: 'comum' },
    { id: 2, nome: 'administrador' }
];

const usuarios = [{
    id: proximoId(),
    nome: 'Nome teste 1',
    email: 'teste@teste.com',
    idade: 19,
    salario_real: 1000.01,
    vip: false,
    perfil_id: 2,
    status: 'ATIVO'
}, {
    id: proximoId(),
    nome: 'Nome teste',
    email: 'teste@teste.com',
    idade: 30,
    salario_real: 2000.01,
    vip: true,
    perfil_id: 1,
    status: 'INATIVO'
}, {
    id: proximoId(),
    nome: 'Nome teste 3',
    email: 'teste33333@teste.com',
    idade: 22,
    salario_real: 5000.01,
    vip: true,
    perfil_id: 1,
    status: 'BLOQUEADO'
}];

module.exports = { perfis, usuarios, proximoId }