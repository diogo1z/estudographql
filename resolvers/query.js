const { perfis, usuarios } = require('../data/arrays');

module.exports = {
    usuarios() {
        return usuarios;
    },
    usuario(_, { id }) {
        const usuariosfiltrados = usuarios.filter(usuario => usuario.id == id);
        return usuariosfiltrados ? usuariosfiltrados[0] : null;
    },
    perfis() {
        return perfis;
    },
    perfil(_, { id }) {
        const sels = perfis
            .filter(p => p.id === id);
        return sels ? sels[0] : null;
    }
}