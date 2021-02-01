const {usuarios, proximoId } = require('../data/arrays')

module.exports = {
    novoUsuario(_, { dadosUsuario }){
        const emailExiste = usuarios.some(usuario => usuario.email === dadosUsuario.email);

        if (emailExiste) throw new Error('E-mail cadastrado');
        
        const novoUsuario = {id: proximoId(), ...dadosUsuario, perfil_id: 1, status: 'ATIVO', salario_real: 0};
        usuarios.push(novoUsuario);
        return novoUsuario;
    }
}