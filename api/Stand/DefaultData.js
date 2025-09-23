import ChalkMSG from '../Scripts/Chalk.js'
import { Role, User, TicketStatus, OrderStatus, Ticket, Message } from '../Models/Models.js'
import bcrypt from 'bcrypt'
import { mkUser } from '../Scripts/FileSystems.js'
import faker from 'faker'
import { v4 as uuidv4 } from 'uuid';

const defaultData = async () => {
    /* Default Roles */
    await Role.create({ id: "1", label: "SUPERADMIN" });
    await Role.create({ id: "2", label: "ADMIN" });
    await Role.create({ id: "3", label: "PARTNER" });
    await Role.create({ id: "4", label: "CLIENT" });
    
    /* Default TicketStatus */
    await TicketStatus.create({ id: "1", label: "Open" });
    await TicketStatus.create({ id: "2", label: "Close" });

    /* Default OrderStatus */
    await OrderStatus.create({ id: "1", label: "Validate" });
    await OrderStatus.create({ id: "2", label: "In progress" });
    await OrderStatus.create({ id: "3", label: "Available" });
    await OrderStatus.create({ id: "4", label: "Collected" });
    await OrderStatus.create({ id: "5", label: "Canceled" });

    /* Default Users */
    const hashPassword = () => bcrypt.hash("Password1@", 10);
    const sadminId =  uuidv4();
    await User.create({ id: sadminId, lastname: "Sadmin", firstname: "Sadmin", email: "sadmin@sadmin.sadmin", password: await hashPassword(), roleId: "1", shopId: null, path: `/sadmin.png`});
    mkUser(sadminId)
    const adminId =  uuidv4();
    await User.create({ id: adminId, lastname: "Admin", firstname: "Admin", email: "admin@admin.admin", password: await hashPassword(), roleId: "2", shopId: null, path: `/admin.png` });
    mkUser(adminId)
    const clientId =  uuidv4();
    await User.create({ id: clientId, lastname: "Client", firstname: "Client", email: "client@client.client", password: await hashPassword(), roleId: "4", shopId: null, path: `/client.png` });
    mkUser(clientId)

    /* Default Tickets */
    for (let i = 0; i < 15; i++) {
        const ticketId = uuidv4();
        await Ticket.create({
            id: ticketId,
            title: faker.lorem.sentence(4),
            content: faker.lorem.sentence(),
            userId: clientId,
            ticketStatusId: faker.datatype.number({ min: 1, max: 2 })
        });
        for (let j = 0; j < 5; j++) {
            await Message.create({
                id: uuidv4(),
                content: faker.lorem.sentence(),
                userId: adminId,
                ticketId: ticketId
            });
            await Message.create({
                id: uuidv4(),
                content: faker.lorem.sentence(),
                userId: clientId,
                ticketId: ticketId
            });
        }
    }

    console.log(`${ChalkMSG.SUCCESS}Default datas created !`);
}

export default defaultData