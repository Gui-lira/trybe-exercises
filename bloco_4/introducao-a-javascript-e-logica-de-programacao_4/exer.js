let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

console.log('Olá, ' + info.personagem);

info['recorrente'] = 'sim';



let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};
for (let index in infoPatinhas) 
    {console.log(info[index] + ' e ' + infoPatinhas[index])}