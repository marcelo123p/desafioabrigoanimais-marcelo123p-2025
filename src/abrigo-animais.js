const animais = {
  Rex: { tipo: 'cão', brinquedos: ['RATO', 'BOLA'] },
  Mimi: { tipo: 'gato', brinquedos: ['BOLA', 'LASER'] },
  Fofo: { tipo: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER'] },
  Zero: { tipo: 'gato', brinquedos: ['RATO', 'BOLA'] },
  Bola: { tipo: 'cão', brinquedos: ['CAIXA', 'NOVELO'] },
  Bebe: { tipo: 'cão', brinquedos: ['LASER', 'RATO', 'BOLA'] },
  Loco: { tipo: 'jabuti', brinquedos: ['SKATE', 'RATO'] },
};

const brinquedosValidos = ['RATO','BOLA','LASER','CAIXA','NOVELO','SKATE'];

class AbrigoAnimais {
  encontraPessoas(p1, p2, ordemAnimais) {
    const pessoa1 = p1.split(',').map(b => b.trim().toUpperCase());
    const pessoa2 = p2.split(',').map(b => b.trim().toUpperCase());
    const animaisOrdem = ordemAnimais.split(',').map(a => a.trim());

    const todosBrinquedos = [...pessoa1, ...pessoa2];
    const brinquedosDuplicados = todosBrinquedos.filter((item, index, arr) => arr.indexOf(item) !== index);
    if (brinquedosDuplicados.length) return { erro: 'Brinquedo inválido' };
    for (const b of todosBrinquedos) if (!brinquedosValidos.includes(b)) return { erro: 'Brinquedo inválido' };

    const nomesAnimais = Object.keys(animais);
    const animaisDuplicados = animaisOrdem.filter((item, index, arr) => arr.indexOf(item) !== index);
    if (animaisDuplicados.length) return { erro: 'Animal inválido' };
    for (const a of animaisOrdem) if (!nomesAnimais.includes(a)) return { erro: 'Animal inválido' };

    const contagemPessoas = { 1: 0, 2: 0 };

    const resultado = animaisOrdem.map(nomeAnimal => {
      const animal = animais[nomeAnimal];
      const brinquedosAnimal = animal.brinquedos;

      function atende(pessoa) {
        if (animal.tipo === 'gato') {
          let index = 0;
          for (const b of pessoa) {
            if (b === brinquedosAnimal[index]) index++;
          }
          return index === brinquedosAnimal.length;
        }
        if (nomeAnimal === 'Loco') {
          return contagemPessoas[1] + contagemPessoas[2] > 0;
        }
        let index = 0;
        for (const b of pessoa) {
          if (b === brinquedosAnimal[index]) index++;
        }
        return index === brinquedosAnimal.length;
      }

      const p1Pode = atende(pessoa1) && contagemPessoas[1] < 3;
      const p2Pode = atende(pessoa2) && contagemPessoas[2] < 3;

      if (p1Pode && p2Pode) return `${nomeAnimal} - abrigo`;
      if (p1Pode) { contagemPessoas[1]++; return `${nomeAnimal} - pessoa 1`; }
      if (p2Pode) { contagemPessoas[2]++; return `${nomeAnimal} - pessoa 2`; }

      return `${nomeAnimal} - abrigo`;
    });

    return { lista: resultado.sort() };
  }
}

export { AbrigoAnimais as AbrigoAnimais };

