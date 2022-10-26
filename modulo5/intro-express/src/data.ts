type user = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
    
}

type post = {
    id: number,
    userId: number,
    title: string,
    body: string
}

export const users : user[] = [
    { id: 1, name: 'João Maria', phone: '(21)3003-4004', email: 'joao@bimbao.org', website: 'www.joao.com.br' },
    { id: 2, name: 'Pedro Rosa', phone: '(21)3008-4001', email: 'pedro@beredo.org', website: 'www.pedro.com.br' },
    { id: 3, name: 'Ludmila Falida', phone: '(21)3001-4002', email: 'ludmila@falida.org', website: 'www.ludmila.com.br' },
    { id: 4, name: 'Bento Neto', phone: '(21)3009-4021', email: 'bento@amem.org', website: 'www.bento.com.br' },
]

export const posts : post[] = [
    { id: 1, userId: 1, title: 'Caixa Preta', body: 'A vida e uma caixa preta, nunca saberemos o seu real significado.'},
    { id: 2, userId: 2, title: 'Vida', body: 'Não deveríamos temer a morte, mais sim a vida.'},
    { id: 3, userId: 3, title: 'Seja', body: 'Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.'},
    { id: 4, userId: 4, title: 'Aleatório', body: 'No mundo do aleatório a ordem é não se preocupar.'},
]