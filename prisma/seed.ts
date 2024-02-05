 import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();
 async function seed() {
    const client1 = await prisma.client.create({
        data:{
            firstName:"Jonh ",
            lastName: "mendieta",
            email: "johndoe@gmail.com"
        }
    })
    const reservation = await prisma.reservation.create({
        data:{
            fecha: new Date (12/0/24),
           startTime: new Date (12/0/24),
           endTime: new Date (12/0/24),
           clientid: client1.id,
           reservationState: true,
          
        }
    })
    const employe = await prisma.employe.create({
        data:{
             name: 'Lucas',
             lastname:'julio',
             cargo: 'Emplead'
        }
    })
    console.log('Seed data inserted successfully');
 }


seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });