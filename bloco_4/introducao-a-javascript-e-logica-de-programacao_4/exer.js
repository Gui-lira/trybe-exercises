let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

console.log('Olá, ' + info.personagem);

info['recorrente'] = 'sim';


for (let index in info)
    {console.log(index)};

for (let index in info)
    {console.log(info[index])};