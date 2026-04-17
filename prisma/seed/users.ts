import { prisma } from '@/lib/prisma';

async function main() {
  console.log('🌱 Iniciando seed de usuários...');

  // Lista de usuários para criar
  const users = [
    {
      name: 'João Silva',
      email: 'joao@exemplo.com',
    },
    {
      name: 'Maria Oliveira',
      email: 'maria@exemplo.com',
    },
    {
      name: 'Carlos Souza',
      email: 'carlos@exemplo.com',
    },
    {
      name: 'Ana Costa',
      email: 'ana@exemplo.com',
    },
    {
      name: 'Pedro Santos',
      email: 'pedro@exemplo.com',
    },
  ];

  for (const userData of users) {
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: {
        name: userData.name,
        email: userData.email,
      },
    });
    console.log(`  ✅ Usuário criado: ${user.name} (${user.email})`);
  }

  console.log('🌱 Seed concluído!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
