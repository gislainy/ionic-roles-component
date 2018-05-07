
function pode(userId: string, rules: Array<string>): Boolean {
  const user = userList.filter(u => u._id === userId_x)[0];
  const permissoes = [];
  Object.keys(rolesGroup).forEach(r => {
    if (user.roles.some(_r => _r == r)) {
      rolesGroup[r].forEach(_r => {
        if (permissoes.every(p => _r != p))
          permissoes.push(_r)
      })
    };
  });
  return permissoes.some(p => rules.indexOf(p) >= 0)
}


const userId_x = "userMarcelloId";

const rolesGroup = {
  gerente: [
    "gerente",
    "recepcao"
  ],
  administrador: [
    "gerente",
    "financeiro",
    "administrador",
    "recepcao",
  ],
  recepcao: [
    "recepcao",
  ],
  financeiro: [
    "financeiro"
  ]
}


const userList = [
  {
    _id: 'userGislainyId',
    email: 'gislainycrisostomo@gmail.com',
    roles: ["gerente"]
  },
  {
    _id: 'userJoseId',
    email: 'joseneto.design@gmail.com',
    roles: ["administrador"]
  },
  {
    _id: 'userMarcelloId',
    email: 'marcellovcs@gmail.com',
    roles: ["recepcao"]
  },
  {
    _id: 'userRamonId',
    email: 'ramonhenrique@gmail.com',
    roles: ["gerente", "financeiro"]
  },
];

export {
  pode
}